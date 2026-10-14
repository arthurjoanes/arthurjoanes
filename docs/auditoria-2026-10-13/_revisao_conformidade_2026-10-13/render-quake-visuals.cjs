const fs = require('fs');
const path = require('path');
const {pathToFileURL} = require('url');
const root = path.resolve(__dirname, '..');
const {chromium} = require(path.join(root,'CycleOps/apps/web/node_modules/@playwright/test'));
const inv = JSON.parse(fs.readFileSync(path.join(__dirname,'visual-inventory.json'),'utf8'));
const out = path.join(__dirname,'quake-exposure-visual');fs.mkdirSync(out,{recursive:true});
const assets = inv.local_resources.filter(a=>a.path.includes('/quake-exposure/'));
const esc = s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1400,height:1000}});
 const svgs=assets.filter(a=>a.path.endsWith('.svg'));
 const sheet=`<html><meta charset="utf-8"><style>body{font:15px Arial;background:#eee;margin:20px}main{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}figure{margin:0;border:1px solid #aaa;background:white;padding:14px;height:140px;display:flex;flex-direction:column;align-items:center;justify-content:space-between}figure.wide{grid-column:1/-1;height:auto;gap:12px}img{max-width:280px;max-height:90px}.wide img{max-width:100%;max-height:360px}figcaption{font:12px monospace;overflow-wrap:anywhere}</style><h1>QuakeExposure — recursos SVG locais</h1><main>${svgs.map(a=>`<figure class="${a.path.endsWith('banner.svg')?'wide':''}"><img src="${pathToFileURL(a.absolute_path)}"><figcaption>${esc(a.path)}</figcaption></figure>`).join('')}</main></html>`;
 const sheetPath=path.join(out,'svg-contact.html');fs.writeFileSync(sheetPath,sheet);
 await page.goto(pathToFileURL(sheetPath).href);await page.screenshot({path:path.join(out,'svg-contact.png'),fullPage:true});
 const results=[];await page.goto('about:blank');
 await page.addScriptTag({url:'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'});
 await page.evaluate(()=>mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'default'}));
 const diagrams=inv.references.filter(r=>r.repo==='quake-exposure'&&r.kind==='diagram_source_block');
 for(let i=0;i<diagrams.length;i++){
  const d=diagrams[i], lines=fs.readFileSync(path.join(root,d.document),'utf8').split(/\r?\n/);
  const code=lines.slice(d.line-1,d.source_line_end).filter(line=>!line.trim().startsWith('```')).join('\n');
  const result=await page.evaluate(async({code,i})=>{try{const x=await mermaid.render('diag'+i,code);document.body.innerHTML=x.svg;document.body.style.margin='20px';return {ok:true};}catch(e){return {ok:false,error:String(e)}}},{code,i});
  if(result.ok)await page.screenshot({path:path.join(out,`diagram-${i+1}.png`),fullPage:true});
  results.push({kind:'diagram',index:i+1,document:d.document,line:d.line,...result});
 }
 await browser.close();fs.writeFileSync(path.join(out,'render-receipt.json'),JSON.stringify({svg:svgs.map(a=>a.path),results},null,2));console.log(JSON.stringify(results));
})();
