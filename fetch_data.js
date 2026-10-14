const fs = require('fs');

async function main() {
  const url = 'https://mvtuzkwslueesgszhcmm.supabase.co/rest/v1';
  const key = 'sb_publishable_KYDbVGr_25UA3jn9zfkC9g_L5TFDGoD';
  const headers = {
    'apikey': key,
    'Authorization': 'Bearer ' + key
  };

  const tables = ['settings', 'committee', 'testimonials', 'events', 'notices', 'donations'];
  const fullData = {};

  for (const table of tables) {
    try {
      const res = await fetch(`${url}/${table}?select=*`, { headers });
      const data = await res.json();
      console.log(`${table}: ${Array.isArray(data) ? data.length + ' rows' : JSON.stringify(data)}`);
      fullData[table] = data;
    } catch (e) {
      console.error(`${table} error:`, e.message);
    }
  }

  fs.writeFileSync('supabase_data.json', JSON.stringify(fullData, null, 2), 'utf8');
  console.log('Saved to supabase_data.json');
}

main();
