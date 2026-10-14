import { createRequire } from 'node:module';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { spawn } from 'node:child_process';
const here=dirname(fileURLToPath(import.meta.url));
const root=resolve(here,'..');
const require=createRequire(resolve(root,'CycleOps/apps/web/package.json'));
const { chromium, expect }=require('@playwright/test');
const web=resolve(root,'_auditoria_2026-10-13/sources/quake-exposure/web');
const out=resolve(here,'qex-qa');mkdirSync(out,{recursive:true});
const snapshot=JSON.parse(readFileSync(resolve(web,'public/demo/snapshot.json'),'utf8'));
const server=spawn('python',['-m','http.server','55664','--bind','127.0.0.1','--directory',resolve(web,'dist')],{windowsHide:true,stdio:'ignore'});
let browser;
try {
  for(let n=0;n<50;n++){
    try {if((await fetch('http://127.0.0.1:55664')).ok)break;}catch{}
    await new Promise(r=>setTimeout(r,100));
  }
  browser=await chromium.launch({headless:true});
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  await page.clock.install();
  const pageErrors=[];page.on('pageerror',e=>pageErrors.push(e.message));
  await page.addInitScript(()=>{
    const original=window.fetch;
    window.auditRequests=[];
    window.fetch=(url,options)=>{
      if(String(url).startsWith('/api/events')) {
        const record={url:String(url),aborted:false};window.auditRequests.push(record);
        options?.signal?.addEventListener('abort',()=>{record.aborted=true;},{once:true});
      }
      return original(url,options);
    };
  });
  let stallEvents=false, eventCalls=0;
  const held=[];
  await page.route('**/api/**',async route=>{
    const url=new URL(route.request().url());const p=url.pathname;let body=null;
    if(p==='/api/tenants')body=snapshot.tenants;
    else if(p==='/api/events'){
      eventCalls++;
      if(stallEvents){held.push(route);return;}
      body=snapshot.events;
    } else if(p==='/api/status')body=snapshot.status;
    else if(p==='/api/operations')body=snapshot.operations[url.searchParams.get('tenant')];
    else if(p.match(/^\/api\/events\/[^/]+\/revisions$/))body=snapshot.revisions[decodeURIComponent(p.split('/')[3])]??[];
    else if(p==='/api/publications/current')body=snapshot.current.find(x=>{
      const v=x.result.input_vector;
      return v.tenant_id===url.searchParams.get('tenant')&&v.earthquake_uid===url.searchParams.get('earthquake_uid')&&v.mode===url.searchParams.get('mode');
    })??null;
    else {
      const match=p.match(/^\/api\/publications\/([^/]+)\/(assets|diff|region)$/);
      if(match&&snapshot.publications[match[1]]){
        const pub=JSON.parse(readFileSync(resolve(web,'public/demo',snapshot.publications[match[1]].file),'utf8'));
        if(match[2]==='assets')body={publication_id:match[1],assets:pub.assets};
        else if(match[2]==='diff')body=pub.diff;
        else body={publication_id:match[1],representation:'points',bounds:{west:-180,south:-90,east:180,north:90},zoom:2,total_count:pub.assets.length,eligible_count:pub.current.result.eligible_count,qualifying_count:pub.current.result.qualifying_count,insured_value_minor:{BRL:'0',USD:'0'},qualifying_value_minor:pub.current.result.qualifying_value_minor,assets:pub.assets,clusters:[]};
      }
    }
    await route.fulfill({status:body===null?404:200,contentType:'application/json',body:JSON.stringify(body)});
  });
  const chosen=snapshot.metadata.default_selection;
  const query=new URLSearchParams({scope:'REPLAY',tenant:chosen.tenant,event:chosen.event,mode:chosen.mode});
  await page.goto(`http://127.0.0.1:55664/?${query}`);
  await expect(page.locator('#clock')).toContainText('Atualizado às');
  await expect(page.locator('#app-feedback')).toBeHidden();
  const summary=await page.locator('#summary').innerHTML();
  const callsBefore=eventCalls;
  stallEvents=true;
  await page.clock.runFor(10_001);
  await expect.poll(()=>eventCalls).toBeGreaterThan(callsBefore);
  await page.clock.runFor(15_001);
  await expect(page.locator('#retry-analysis')).toBeVisible();
  await expect(page.locator('#feedback-message')).toContainText('Não foi possível atualizar');
  expect(await page.locator('#summary').innerHTML()).toBe(summary);
  await page.screenshot({path:resolve(out,'timeout-preserves-publication.png'),fullPage:true});
  stallEvents=false;
  const afterTimeout=eventCalls;
  await page.clock.runFor(10_001);
  await expect.poll(()=>eventCalls).toBeGreaterThan(afterTimeout);
  await expect(page.locator('#app-feedback')).toBeHidden();
  const beforeStall=eventCalls;
  stallEvents=true;
  await page.clock.runFor(10_001);
  await expect.poll(()=>eventCalls).toBeGreaterThan(beforeStall);
  const oldRequest=await page.evaluate(()=>window.auditRequests.length-1);
  stallEvents=false;
  await page.locator('#mode').selectOption(chosen.mode==='SHAKEMAP_MMI'?'RADIUS_TRIAGE':'SHAKEMAP_MMI');
  await expect.poll(()=>page.evaluate(i=>window.auditRequests[i].aborted,oldRequest)).toBe(true);
  await expect(page.locator('#app-feedback')).toBeHidden();
  const widths=[];
  for(const width of [1440,768,390,320]){
    await page.setViewportSize({width,height:1000});
    widths.push({width,overflow:await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth)});
    expect(widths.at(-1).overflow).toBe(0);
    await page.screenshot({path:resolve(out,`recovered-${width}.png`),fullPage:true});
  }
  expect(pageErrors).toEqual([]);
  const receipt={transport:'local built frontend + snapshot fixtures mocked at HTTP routes',timeoutMs:15000,keptPreviousPublication:true,automaticNextCycle:true,supersededRequestAborted:true,pageErrors,widths,heldRequests:held.length,eventCalls};
  writeFileSync(resolve(out,'browser.json'),JSON.stringify(receipt,null,2));
  console.log(JSON.stringify(receipt));
} finally {
  await browser?.close();server.kill();
}
