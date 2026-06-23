const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:5173/oceanview/';

const ROUTES = [
  { route: '',                    name: 'home' },
  { route: '#products',           name: 'products' },
  { route: '#retirement-risk',    name: 'retirement-risk' },
  { route: '#life-events',        name: 'life-events' },
  { route: '#case-studies',       name: 'case-studies' },
  { route: '#white-papers',       name: 'white-papers' },
  { route: '#rrs-market-risk',    name: 'rrs-market-risk' },
  { route: '#rrs-inflation-risk', name: 'rrs-inflation-risk' },
  { route: '#rrs-longevity-risk', name: 'rrs-longevity-risk' },
  { route: '#rrs-interest-rate-risk', name: 'rrs-interest-rate-risk' },
  { route: '#les-approaching-retirement', name: 'les-approaching-retirement' },
  { route: '#les-market-volatility', name: 'les-market-volatility' },
  { route: '#les-financial-windfall', name: 'les-financial-windfall' },
  { route: '#les-career-transitions', name: 'les-career-transitions' },
  { route: '#fia-overview',       name: 'fia-overview' },
  { route: '#sky-harbourview-myga', name: 'sky-harbourview-myga' },
  { route: '#harbourview-fia',    name: 'harbourview-fia' },
  { route: '#brochures',          name: 'brochures' },
  { route: '#blog',               name: 'blog' },
  { route: '#downloads',          name: 'downloads' },
  { route: '#contact',            name: 'contact' },
  { route: '#professionals',      name: 'professionals' },
  { route: '#client-resources',   name: 'client-resources' },
  { route: '#insights',           name: 'insights' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1680, height: 900 },
    deviceScaleFactor: 1,
  });

  const outDir = __dirname;

  for (const { route, name } of ROUTES) {
    const page = await context.newPage();
    console.log(`Extracting: ${name}`);
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    // Get the full rendered HTML
    const html = await page.evaluate(() => {
      // Clone the document to avoid modifying the live one
      const clone = document.documentElement.cloneNode(true);
      // Get all stylesheets and inline them
      const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
      let inlineCSS = '';
      styles.forEach(s => {
        if (s.tagName === 'STYLE') {
          inlineCSS += s.textContent + '\n';
        }
      });
      // Get computed styles from the stylesheet
      const allStyles = document.styleSheets;
      for (const sheet of allStyles) {
        try {
          for (const rule of sheet.cssRules) {
            inlineCSS += rule.cssText + '\n';
          }
        } catch(e) {
          // Cross-origin stylesheets can't be read — skip
        }
      }
      return '<!DOCTYPE html>\n<html>' + document.documentElement.innerHTML + '</html>';
    });

    fs.writeFileSync(path.join(outDir, `${name}.html`), html);
    console.log(`  ✅ saved: ${name}.html`);
    await page.close();
  }

  await browser.close();
  console.log('\nAll 24 HTML snapshots captured!');
})();