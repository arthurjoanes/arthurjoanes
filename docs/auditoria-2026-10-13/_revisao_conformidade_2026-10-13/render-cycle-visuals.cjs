const fs = require('fs');
const path = require('path');
const {pathToFileURL} = require('url');
const root = path.resolve(__dirname, '..');
const {chromium} = require(path.join(root,'CycleOps/apps/web/node_modules/@playwright/test'));
const inv = JSON.parse(fs.readFileSync(path.join(__dirname,'visual-inventory.json'),'utf8'));
const out = path.join(__dirname,'cycleops-visual');fs.mkdirSync(out,{recursive:true});
const assets = inv.local_resources.filter(a=>a.path.startsWith('CycleOps/'));
const esc = s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1400,height:1000}});
 const svgs=assets.filter(a=>a.path.endsWith('.svg'));
 const sheet=`<html><meta charset="utf-8"><style>body{font:15px Arial;background:#eee;margin:20px}main{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}figure{margin:0;border:1px solid #aaa;background:white;padding:14px;height:140px;display:flex;flex-direction:column;align-items:center;justify-content:space-between}figure.dark{background:#123e4a;color:white}img{max-width:280px;max-height:90px}figcaption{font:12px monospace;overflow-wrap:anywhere}</style><h1>CycleOps — recursos SVG locais</h1><main>${svgs.map(a=>`<figure class="${a.path.includes('-light')?'dark':''}"><img src="${pathToFileURL(a.absolute_path)}"><figcaption>${esc(a.path)}</figcaption></figure>`).join('')}</main></html>`;
 const sheetPath=path.join(out,'svg-contact.html');fs.writeFileSync(sheetPath,sheet);
 await page.goto(pathToFileURL(sheetPath).href);await page.screenshot({path:path.join(out,'svg-contact.png'),fullPage:true});
 const results=[];await page.goto('about:blank');
 await page.addScriptTag({url:'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'});
 await page.evaluate(()=>mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'default'}));
 const diagrams=inv.references.filter(r=>r.repo==='cycleops'&&r.kind==='diagram_source_block');
 for(let i=0;i<diagrams.length;i++){
  const d=diagrams[i], lines=fs.readFileSync(path.join(root,d.document),'utf8').split(/\r?\n/);
  const code=lines.slice(d.line-1,d.source_line_end).filter(line=>!line.trim().startsWith('```')).join('\n');
  const result=await page.evaluate(async({code,i})=>{try{const x=await mermaid.render('diag'+i,code);document.body.innerHTML=x.svg;document.body.style.margin='20px';return {ok:true};}catch(e){return {ok:false,error:String(e)}}},{code,i});
  if(result.ok)await page.screenshot({path:path.join(out,`diagram-${i+1}.png`),fullPage:true});
  results.push({kind:'diagram',index:i+1,document:d.document,line:d.line,...result});
 }
 for(const a of assets.filter(x=>x.path.endsWith('.webm'))){
  const html=path.join(out,'video.html');fs.writeFileSync(html,`<html><style>body{margin:0}video{display:block;width:100%}</style><video muted src="${pathToFileURL(a.absolute_path)}"></video></html>`);
  await page.goto(pathToFileURL(html).href);
  const meta=await page.evaluate(async()=>{const v=document.querySelector('video');if(v.readyState<1)await new Promise(r=>v.addEventListener('loadedmetadata',r,{once:true}));return {duration:v.duration,width:v.videoWidth,height:v.videoHeight}});
  await page.setViewportSize({width:meta.width,height:meta.height});
  for(const t of [0,5,10,15,20,Math.max(0,meta.duration-.25)]){
   await page.evaluate(async t=>{const v=document.querySelector('video');if(Math.abs(v.currentTime-t)<.01&&v.readyState>=2)return;await new Promise(resolve=>{v.addEventListener('seeked',resolve,{once:true});v.currentTime=t});},t);
   await page.screenshot({path:path.join(out,`${path.basename(a.path,'.webm')}-${t.toFixed(2)}.png`)});
  }
  results.push({kind:'video',source:a.path,...meta,samples:'0,5,10,15,20,end-.25; no audio review'});
 }
 await browser.close();fs.writeFileSync(path.join(out,'render-receipt.json'),JSON.stringify({svg:svgs.map(a=>a.path),results},null,2));console.log(JSON.stringify(results));
})();
