const { chromium } = require('../loja-assistente/frontend/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const stamp = '2026-10-13T01:30:00Z';
const conv = {id:'b',title:'Conversa B preservada',created_at:stamp};
const answer = (id, conversation_id, question) => ({id,conversation_id,question,status:'unsupported',message:'Resposta sintética',mode:'demo',plan:null,result:null,request_id:id,created_at:stamp});
async function fixture(page, recover404=false) {
  const posts=[];
  await page.route('**/api/**',async route=>{
    const p=new URL(route.request().url()).pathname;
    if(p==='/api/auth/me') return route.fulfill({json:{user:{id:'u',name:'Pessoa sintética',email:'u@example.invalid',role:'manager',organization:{id:'t',name:'Tenant sintético'},stores:[{id:'s',name:'Centro'}]},csrf_token:'synthetic',reference_date:'2026-08-17',dataset_version:'synthetic',llm_available:false}});
    if(p==='/api/conversations/page') return route.fulfill({json:{items:[conv],next_cursor:null,has_more:false}});
    if(p==='/api/conversations/b')return route.fulfill({json:{...conv,messages:[answer('b-1','b','Resposta antiga de B')],messages_next_cursor:null}});
    if(p==='/api/favorites')return route.fulfill({json:[]});
    if(p==='/api/assistant/query') {
      posts.push(route.request().postDataJSON());
      if(posts.length===1)return route.abort('failed');
      return route.fulfill({json:answer('a-1','a','Quanto vendi ontem?')});
    }
    if(p.startsWith('/api/assistant/requests/'))return recover404?route.fulfill({status:404,json:{detail:'Intenção não encontrada'}}):route.fulfill({json:answer('a-1','a','Quanto vendi ontem?')});
    return route.fulfill({status:404,json:{detail:'Rota não incluída na fixture'}});
  });
  await page.goto('http://127.0.0.1:3129');
  await page.getByLabel('Pergunta',{exact:true}).fill('Quanto vendi ontem?');
  await page.getByRole('button',{name:'Enviar pergunta'}).click();
  await page.getByText(/Não foi possível confirmar a execução/).waitFor();
  return posts;
}
(async()=>{
  const browser=await chromium.launch({headless:true});
  const report={method:'Build existente, Chromium local e todas as APIs interceptadas; nenhuma chamada real ou credencial',buildId:fs.readFileSync(path.join(__dirname,'../loja-assistente/frontend/.next/BUILD_ID'),'utf8').trim(),cases:[]};
  try {
    const page=await browser.newPage({viewport:{width:1440,height:1000}});
    const posts=await fixture(page);
    await page.locator('.history-menu > summary').click();
    await page.getByRole('button',{name:/Conversa B preservada/}).click();
    await page.getByRole('heading',{name:'Resposta antiga de B',exact:true}).waitFor();
    const enabled=await page.getByRole('button',{name:'Enviar pergunta'}).isEnabled();
    await page.getByLabel('Pergunta',{exact:true}).fill('Pergunta nova na conversa B');
    await page.getByRole('button',{name:'Enviar pergunta'}).click();
    await page.getByRole('heading',{name:'Quanto vendi ontem?',exact:true}).waitFor();
    report.cases.push({name:'navegação depois de resultado incerto',sendEnabledAfterNavigation:enabled,typed:'Pergunta nova na conversa B',posted:posts,visibleOptions:await page.locator('#result-selector option').allTextContents(),optionValues:await page.locator('#result-selector option').evaluateAll(nodes=>nodes.map(n=>n.value))});
    await page.close();
    const second=await browser.newPage({viewport:{width:1440,height:1000}});
    const posts404=await fixture(second,true);
    await second.getByRole('button',{name:'Recarregar estado atual',exact:true}).click();
    await second.getByText('Resposta recuperada. Nenhuma nova consulta foi executada.').waitFor();
    report.cases.push({name:'recuperação 404 envia a intenção pela primeira vez',posted:posts404,confirmation:await second.getByText('Resposta recuperada. Nenhuma nova consulta foi executada.').innerText()});
    fs.writeFileSync(path.join(__dirname,'loja-intent-before.json'),JSON.stringify(report,null,2));
    console.log(JSON.stringify(report,null,2));
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
