const { chromium } = require('../loja-assistente/frontend/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.route('**/*', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><title>Synthetic UUID origin probe</title>' }));
    await page.goto('http://uuid-demo.example.invalid');
    const result = await page.evaluate(() => {
      let originalError = null;
      try { crypto.randomUUID(); } catch (error) { originalError = `${error.name}: ${error.message}`; }
      return { origin: location.origin, secureContext: isSecureContext, randomUUID: typeof crypto.randomUUID, getRandomValues: typeof crypto.getRandomValues, originalError };
    });
    fs.writeFileSync(path.join(__dirname, 'loja-uuid-origin-before.json'), JSON.stringify({ browser: browser.version(), network: 'All requests fulfilled locally by Playwright; no server or backend.', ...result }, null, 2) + '\n');
    console.log(JSON.stringify(result));
    if (result.secureContext || result.randomUUID !== 'undefined' || result.getRandomValues !== 'function' || !result.originalError) process.exitCode = 1;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
