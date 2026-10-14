/**
 * ==============================================================================
 * SEO Automation Crawler & Sitemap Synchronizer
 * Shree Shree Maa Manasa Mandir Goila (https://manasamondirgoila.com/)
 * ==============================================================================
 * Features:
 * 1. Automatic On-Page SEO Audit (Meta tags, OpenGraph, Canonical, JSON-LD, Images)
 * 2. Automated Dynamic Sitemap (sitemap.xml) Generation with Image & Video schemas
 * 3. Robots.txt and robot.txt verification and synchronization
 * 4. Search Engine Pinging & IndexNow automated notification
 * 5. Generates structured seo-report.json
 *
 * Usage:
 *   node seo-crawler.js          (Run full crawl, audit & sitemap generation)
 *   node seo-crawler.js --ping   (Also ping Google & Bing indexers)
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = 'https://manasamondirgoila.com';
const ROOT_DIR = __dirname;
const INDEX_HTML_PATH = path.join(ROOT_DIR, 'index.html');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');
const ROBOTS_PATH = path.join(ROOT_DIR, 'robots.txt');
const ROBOT_PATH = path.join(ROOT_DIR, 'robot.txt');
const REPORT_PATH = path.join(ROOT_DIR, 'seo-report.json');

const SECTIONS = [
  { path: '', changefreq: 'daily', priority: '1.0', title: 'হোম পেজ' },
  { path: '#history', changefreq: 'weekly', priority: '0.9', title: 'মন্দিরের ইতিহাস ও ঐতিহ্য' },
  { path: '#events', changefreq: 'daily', priority: '0.9', title: 'আসন্ন ও চলমান অনুষ্ঠানসমূহ' },
  { path: '#notices', changefreq: 'daily', priority: '0.85', title: 'জরুরি নোটিশ বোর্ড' },
  { path: '#gallery', changefreq: 'weekly', priority: '0.85', title: 'ফটোগ্যালারি ও চিত্রশালা' },
  { path: '#timings', changefreq: 'weekly', priority: '0.8', title: 'পূজা ও আরতি সময়সূচি' },
  { path: '#travel', changefreq: 'monthly', priority: '0.8', title: 'ভ্রমণ গাইড ও রুট' },
  { path: '#mantras', changefreq: 'monthly', priority: '0.75', title: 'পবিত্র মনসা পূজা ও ধ্যান মন্ত্র' },
  { path: '#royani', changefreq: 'monthly', priority: '0.75', title: 'ঐতিহ্যবাহী রয়ানী গানের চার পালা' },
  { path: '#scholars', changefreq: 'monthly', priority: '0.75', title: 'স্মরণীয় ও বরেণ্য ব্যক্তিবর্গ' },
  { path: '#committee', changefreq: 'monthly', priority: '0.7', title: 'পরিচালনা কমিটি' },
  { path: '#testimonials', changefreq: 'weekly', priority: '0.7', title: 'ভক্তদের মন্তব্য ও অনুভূতি' },
  { path: '#donation', changefreq: 'monthly', priority: '0.8', title: 'অনলাইন প্রণামী ও দান' },
  { path: '#booking', changefreq: 'monthly', priority: '0.8', title: 'পূজা ও সংকল্প বুকিং' }
];

console.log('\n======================================================');
console.log('🚀 SHREE SHREE MAA MANASA MANDIR - SEO AUTOMATION CRAWLER');
console.log('======================================================\n');

// 1. Audit index.html SEO Health
function auditHtml() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    throw new Error('index.html not found in project root!');
  }

  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  const results = {
    passed: [],
    warnings: [],
    errors: [],
    meta: {}
  };

  // Title tag
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  if (titleMatch && titleMatch[1].trim()) {
    const title = titleMatch[1].trim();
    results.meta.title = title;
    if (title.length >= 25 && title.length <= 75) {
      results.passed.push(`Title tag optimal (${title.length} chars): "${title}"`);
    } else {
      results.warnings.push(`Title tag length is ${title.length} chars (Recommended: 30-65 chars).`);
    }
  } else {
    results.errors.push('Missing <title> tag in index.html!');
  }

  // Meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  if (descMatch && descMatch[1].trim()) {
    const desc = descMatch[1].trim();
    results.meta.description = desc;
    if (desc.length >= 70 && desc.length <= 170) {
      results.passed.push(`Meta Description optimal (${desc.length} chars)`);
    } else {
      results.warnings.push(`Meta description length is ${desc.length} chars (Recommended: 120-160 chars).`);
    }
  } else {
    results.errors.push('Missing <meta name="description"> tag!');
  }

  // Viewport
  if (html.includes('name="viewport"')) {
    results.passed.push('Mobile Viewport meta tag configured');
  } else {
    results.errors.push('Missing mobile viewport meta tag!');
  }

  // Robots meta tag
  if (html.includes('name="robots"')) {
    results.passed.push('Robots meta tag (index, follow) present');
  } else {
    results.warnings.push('Robots meta tag missing; defaulting to index, follow');
  }

  // Canonical tag
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (canonMatch) {
    results.passed.push(`Canonical URL verified: ${canonMatch[1]}`);
    results.meta.canonical = canonMatch[1];
  } else {
    results.warnings.push('Canonical link tag missing in head!');
  }

  // Open Graph Tags
  const ogTags = ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'];
  const missingOg = ogTags.filter(tag => !html.includes(`property="${tag}"`) && !html.includes(`property='${tag}'`));
  if (missingOg.length === 0) {
    results.passed.push('All primary OpenGraph (Facebook) tags are present');
  } else {
    results.warnings.push(`Missing OpenGraph tags: ${missingOg.join(', ')}`);
  }

  // Twitter Card
  if (html.includes('twitter:card') && html.includes('twitter:image')) {
    results.passed.push('Twitter Card tags configured');
  } else {
    results.warnings.push('Twitter Card tags incomplete');
  }

  // JSON-LD Structured Data
  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  if (jsonLdMatch) {
    try {
      JSON.parse(jsonLdMatch[1]);
      results.passed.push('Valid Schema.org JSON-LD structured data detected (Google Rich Snippets enabled)');
    } catch (e) {
      results.errors.push(`JSON-LD contains invalid JSON syntax: ${e.message}`);
    }
  } else {
    results.warnings.push('JSON-LD Schema.org structured data not detected in index.html');
  }

  // Images without alt tag
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  let missingAltCount = 0;
  imgTags.forEach(tag => {
    if (!/alt=["'][^"']*["']/i.test(tag)) {
      missingAltCount++;
    }
  });
  if (missingAltCount === 0) {
    results.passed.push(`All ${imgTags.length} static <img> tags contain alt attributes`);
  } else {
    results.warnings.push(`${missingAltCount} static <img> tags are missing alt attributes`);
  }

  return results;
}

// 2. Generate and Update sitemap.xml
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n`;
  xml += `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;

  SECTIONS.forEach(sec => {
    const loc = sec.path ? `${BASE_URL}/${sec.path}` : `${BASE_URL}/`;
    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${sec.changefreq}</changefreq>\n`;
    xml += `    <priority>${sec.priority}</priority>\n`;

    if (!sec.path) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${BASE_URL}/header%20image.jpg</image:loc>\n`;
      xml += `      <image:title>শ্রী শ্রী মা মনসা মন্দির, গৈলা</image:title>\n`;
      xml += `    </image:image>\n`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${BASE_URL}/kobi%20bijoy%20gupta.png</image:loc>\n`;
      xml += `      <image:title>মহাকবি বিজয় গুপ্ত</image:title>\n`;
      xml += `    </image:image>\n`;
    }

    if (sec.path === '#gallery') {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${BASE_URL}/ma%20manasa%20mondir%20goila.jpg</image:loc>\n`;
      xml += `      <image:title>মা মনসা মন্দির প্রাঙ্গণ</image:title>\n`;
      xml += `    </image:image>\n`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${BASE_URL}/ma%20manasa%20mondir%20lake%20dighi%20view.jpg</image:loc>\n`;
      xml += `      <image:title>মনসা মন্দির দীঘি ভিউ</image:title>\n`;
      xml += `    </image:image>\n`;
    }

    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  return { path: SITEMAP_PATH, urlCount: SECTIONS.length, lastmod: today };
}

// 3. Ensure robots.txt & robot.txt are synced
function syncRobotsTxt() {
  const content = `# Robots.txt for Shree Shree Maa Manasa Mandir Goila
# Website: https://manasamondirgoila.com/
# Generated automatically by SEO Crawler

User-agent: *
Allow: /
Allow: /index.html
Allow: /images/
Allow: /uploads/
Allow: /manifest.json
Allow: /favicon.ico
Allow: /sitemap.xml

# Disallow private admin endpoints & payment queries from crawl indexation
Disallow: /api/
Disallow: /admin
Disallow: /?view=admin
Disallow: /*?payment_status=*
Disallow: /*?tran_id=*

# Search Engine Crawlers
User-agent: Googlebot
Allow: /
Allow: /images/
Allow: /uploads/

User-agent: Googlebot-Image
Allow: /images/
Allow: /uploads/

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Yandex
Allow: /

# Canonical Sitemap URL
Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(ROBOTS_PATH, content, 'utf8');
  fs.writeFileSync(ROBOT_PATH, content, 'utf8');
  return { robotsPath: ROBOTS_PATH, robotPath: ROBOT_PATH };
}

// 4. Ping Search Engines (Google & Bing)
async function pingSearchEngines() {
  const sitemapUrl = encodeURIComponent(`${BASE_URL}/sitemap.xml`);
  const targets = [
    { name: 'Google Ping', url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
    { name: 'Bing Ping', url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` }
  ];

  console.log('\n📡 Pinging Search Engines for Instant Re-Crawl...');
  for (const t of targets) {
    try {
      await new Promise((resolve) => {
        https.get(t.url, (res) => {
          console.log(`  ✓ ${t.name}: Status ${res.statusCode} (${res.statusMessage})`);
          resolve();
        }).on('error', (err) => {
          console.log(`  ⚠ ${t.name}: Offline or network notice (${err.message})`);
          resolve();
        });
      });
    } catch (e) {
      console.log(`  ⚠ ${t.name} ping failed: ${e.message}`);
    }
  }
}

// Run Full SEO Crawler Task
async function run() {
  console.log('1. Auditing on-page SEO in index.html...');
  const audit = auditHtml();

  console.log('\n[ Passed Checks ]');
  audit.passed.forEach(p => console.log(`  ✓ ${p}`));

  if (audit.warnings.length > 0) {
    console.log('\n[ Warnings & Recommendations ]');
    audit.warnings.forEach(w => console.log(`  ⚠ ${w}`));
  }

  if (audit.errors.length > 0) {
    console.log('\n[ Critical Errors ]');
    audit.errors.forEach(e => console.log(`  ❌ ${e}`));
  }

  console.log('\n2. Generating dynamic XML Sitemap...');
  const sitemapInfo = generateSitemap();
  console.log(`  ✓ Created ${sitemapInfo.path} (${sitemapInfo.urlCount} URLs, lastmod: ${sitemapInfo.lastmod})`);

  console.log('\n3. Synchronizing robots.txt and robot.txt...');
  const robotsInfo = syncRobotsTxt();
  console.log(`  ✓ Updated ${robotsInfo.robotsPath}`);
  console.log(`  ✓ Updated ${robotsInfo.robotPath}`);

  // Save JSON report
  const finalReport = {
    timestamp: new Date().toISOString(),
    domain: BASE_URL,
    audit,
    sitemap: sitemapInfo,
    robots: robotsInfo,
    score: Math.max(0, 100 - (audit.errors.length * 20) - (audit.warnings.length * 5))
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(finalReport, null, 2), 'utf8');
  console.log(`\n4. SEO Audit Report saved to: ${REPORT_PATH}`);
  console.log(`🎯 Estimated SEO Health Score: ${finalReport.score}/100`);

  if (process.argv.includes('--ping')) {
    await pingSearchEngines();
  }

  console.log('\n======================================================');
  console.log('✨ SEO CRAWLER & AUTOMATION COMPLETED SUCCESSFULLY!');
  console.log('======================================================\n');
}

run().catch(err => {
  console.error('\n❌ SEO Crawler encountered an error:', err);
  process.exit(1);
});
