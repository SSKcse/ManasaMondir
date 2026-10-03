const fs = require('fs');

const url = 'https://mvtuzkwslueesgszhcmm.supabase.co/rest/v1';
const key = 'sb_publishable_KYDbVGr_25UA3jn9zfkC9g_L5TFDGoD';
const headers = {
  'apikey': key,
  'Authorization': 'Bearer ' + key,
  'Content-Type': 'application/json',
  'Prefer': 'resolution=merge-duplicates,return=representation'
};

const dump = JSON.parse(fs.readFileSync('supabase_data.json', 'utf8'));

const appJsx = fs.readFileSync('app.jsx', 'utf8');
const timingsMatch = appJsx.match(/"timings":\s*(\{[\s\S]*?\n  \}),\n  "travel"/);
const travelMatch = appJsx.match(/"travel":\s*(\{[\s\S]*?\n  \}),\n  "mantras"/);
const mantrasMatch = appJsx.match(/"mantras":\s*(\[[\s\S]*?\n  \])\n\};/);

const templeTimings = timingsMatch ? JSON.parse(timingsMatch[1]) : {};
const travelInfo = travelMatch ? JSON.parse(travelMatch[1]) : {};
const sacredMantras = mantrasMatch ? JSON.parse(mantrasMatch[1]) : [];

async function postBatch(table, items) {
  if (!items || items.length === 0) return;
  console.log(`Syncing ${table} (${items.length} items)...`);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    try {
      const res = await fetch(`${url}/${table}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(item)
      });
      if (!res.ok) {
        const text = await res.text();
        console.error(`  [${table} #${i + 1}] Error ${res.status}:`, text.slice(0, 150));
      } else {
        process.stdout.write('.');
      }
    } catch (e) {
      console.error(`  [${table} #${i + 1}] Fetch error:`, e.message);
    }
  }
  console.log(`\nFinished ${table}.`);
}

async function run() {
  console.log('--- Starting migration to new Supabase project ---');
  console.log('Project URL:', url);

  // 1. Settings
  const settingsItems = [
    { key: 'marquee', value: 'গৈলার ঐতিহ্যবাহী শ্রীশ্রী মা-মনসা মন্দিরের বাৎসরিক পূজা ও উৎসব-২০২৬ আগামী ১৮ আগস্ট ২০২৬ (মঙ্গলবার) অনুষ্ঠিত হতে যাচ্ছে, উক্ত অনুষ্ঠানে আপনাদের সকলকে সবান্ধবে আমন্ত্রণ জানাচ্ছি।' },
    { key: 'featured_test_ids', value: '[5,6,4,8]' },
    { key: 'temple_timings', value: JSON.stringify(templeTimings) },
    { key: 'travel_info', value: JSON.stringify(travelInfo) },
    { key: 'sacred_mantras', value: JSON.stringify(sacredMantras) }
  ];
  await postBatch('settings', settingsItems);

  // 2. Committee
  await postBatch('committee', dump.committee || []);

  // 3. Testimonials
  await postBatch('testimonials', dump.testimonials || []);

  // 4. Events
  await postBatch('events', dump.events || []);

  // 5. Notices
  await postBatch('notices', dump.notices || []);

  // 6. Donations
  await postBatch('donations', dump.donations || []);

  console.log('--- Migration process completed! ---');
}

run();
