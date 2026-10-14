const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {createRequire} = require('node:module');
const {pathToFileURL} = require('node:url');
const root = path.resolve(__dirname, '..');
const {chromium} = createRequire(path.join(root, 'CycleOps/apps/web/package.json'))('@playwright/test');
const output = path.join(__dirname, 'api-qa'); fs.mkdirSync(output,{recursive:true});
(async()=>{
  const browser=await chromium.launch({headless:true});
  const receipt={api:[],preview:[],ops:[],css:[]};
  try {
    const page=await browser.newPage();
    const errors=[]; page.on('pageerror',e=>errors.push(e.message));
    for(const width of [320,768,1440]){
      await page.setViewportSize({width,height:900});
      await page.goto('http://127.0.0.1:55662/?status=firing');
      const seen=[];
      for(let number=1;number<=3;number++){
        await page.locator('.incident-row').first().waitFor();
        const ids=await page.locator('.incident-row').evaluateAll(rows=>rows.map(row=>row.id));
        assert.equal(ids.length,number===3?5:100); seen.push(...ids);
        assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
        if(number===2){
          const previous=page.url();
          await page.locator('.incident-action').first().click();
          await page.getByRole('link',{name:'← Voltar à central',exact:true}).click();
          assert.equal(page.url().split('#')[0],previous.split('#')[0]);
        }
        if(number<3){
          const next=page.getByRole('link',{name:'Ocorrências seguintes →',exact:true});
          await next.focus(); await page.keyboard.press('Enter');
          await page.waitForURL(url=>url.searchParams.has('cursor')&&url.hash==='#conteudo');
        }
      }
      assert.equal(new Set(seen).size,205);
      await page.screenshot({path:path.join(output,`api-last-${width}.png`),fullPage:false});
      await page.locator('.pagination').scrollIntoViewIfNeeded();
      await page.locator('.pagination a').first().focus();
      await page.screenshot({path:path.join(output,`api-pagination-${width}.png`)});
      receipt.api.push({width,unique:205,pages:[100,100,5],detailReturn:true,keyboardNext:true,overflow:false});
      await page.goto('http://127.0.0.1:55663/');
      await page.evaluate(()=>document.fonts.ready);
      assert(await page.evaluate(()=>document.fonts.check('14px "IBM Plex Sans"')));
      assert(await page.locator('.brand-mark').evaluate(img=>img.complete&&img.naturalWidth>0));
      for(const asset of ['favicon.svg','mark-light.svg','plex-sans-regular.woff2','plex-sans-semibold.woff2']){
        assert.equal((await page.request.get('http://127.0.0.1:55663/assets/'+asset)).status(),200);
      }
      await page.screenshot({path:path.join(output,`api-preview-${width}.png`)});
      receipt.preview.push({width,assets200:4,font:true,brand:true});
    }
    assert.equal((await page.goto('http://127.0.0.1:55662/?cursor=invalid')).status(),422);
    const reportPath=path.join(root,'containerops/docs/examples/report.html');
    const html=fs.readFileSync(reportPath,'utf8');
    const css=fs.readFileSync(path.join(root,'containerops/scripts/report.css'),'utf8').replace(/\r\n/g,'\n');
    const oldCss=fs.readFileSync(path.join(__dirname,'ops-before.css'),'utf8').replace(/\r\n/g,'\n');
    assert(html.includes(css.trim()));
    for(const width of [320,768,1440]){
      await page.setViewportSize({width,height:900});
      await page.goto(pathToFileURL(reportPath).href+'#backups');
      await page.evaluate(()=>document.fonts.ready);
      await page.locator('#backups details').first().evaluate(el=>el.open=true);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      const posix=page.locator('#backups pre[id$="-posix"]').first();
      await posix.waitFor({state:'visible'});
      const button=page.locator('[data-command-target="'+await posix.getAttribute('id')+'"]');
      await button.focus(); await page.keyboard.press('Enter');
      await page.screenshot({path:path.join(output,`ops-backups-${width}.png`)});
      receipt.ops.push({width,posixText:await posix.textContent(),copyFeedback:await button.locator('xpath=../..').locator('.copy-feedback').textContent(),overflow:false});
      await page.goto(pathToFileURL(reportPath).href+'#overview');
      await page.getByText('Identidade dos processos e limites dos containers',{exact:true}).click();
      const resources=page.locator('#overview .table-wrap');
      assert.match(await resources.textContent(),/0,25/);
      await resources.scrollIntoViewIfNeeded();
      await page.screenshot({path:path.join(output,`ops-quota-${width}.png`)});
      for(const media of ['screen','print']) for(const open of [false,true]){
        const snapshots=[];
        for(const stylesheet of [oldCss,css]){
          await page.emulateMedia({media});
          await page.setContent(html.replace(css.trim(),stylesheet.trim()));
          await page.locator('.record-details').evaluateAll((items,open)=>items.forEach(el=>el.open=open),open);
          snapshots.push(await page.locator('.surface-panel,.panel-toolbar,.operation-summary,.notice,.record-details,.identity-column .panel-toolbar>span,.control-list').evaluateAll(items=>items.map(el=>{
            const s=getComputedStyle(el); return ['marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingBottom','paddingLeft','paddingRight','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth'].map(k=>s[k]);
          })));
        }
        assert.deepEqual(snapshots[0],snapshots[1]);
        receipt.css.push({width,media,open,equal:true});
      }
      await page.emulateMedia({media:'screen'});
    }
    assert.deepEqual(errors,[]); receipt.pageErrors=errors;
    fs.writeFileSync(path.join(output,'browser.json'),JSON.stringify(receipt,null,2));
    console.log(JSON.stringify(receipt,null,2));
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
