const fs = require('fs');

async function sync() {
  const url = 'https://mvtuzkwslueesgszhcmm.supabase.co/rest/v1';
  const key = 'sb_publishable_KYDbVGr_25UA3jn9zfkC9g_L5TFDGoD';
  const headers = {
    'apikey': key,
    'Authorization': 'Bearer ' + key,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates,return=representation'
  };

  const appJsx = fs.readFileSync('app.jsx', 'utf8');

  // Extract PRELOADED_DATA by reading json-like section
  const timingsMatch = appJsx.match(/"timings":\s*(\{[\s\S]*?\n  \}),\n  "travel"/);
  const travelMatch = appJsx.match(/"travel":\s*(\{[\s\S]*?\n  \}),\n  "mantras"/);
  const mantrasMatch = appJsx.match(/"mantras":\s*(\[[\s\S]*?\n  \])\n\};/);

  if (!timingsMatch || !travelMatch || !mantrasMatch) {
    console.error('Could not extract data from app.jsx');
    return;
  }

  const timings = JSON.parse(timingsMatch[1]);
  const travel = JSON.parse(travelMatch[1]);
  const mantras = JSON.parse(mantrasMatch[1]);

  console.log('Extracted timings keys:', Object.keys(timings));
  console.log('Extracted travel keys:', Object.keys(travel));
  console.log('Extracted mantras count:', mantras.length);

  // Check existing settings
  const existingRes = await fetch(`${url}/settings?select=*`, { headers });
  const existingSettings = await existingRes.json();
  console.log('Existing settings:', existingSettings);

  const payload = [
    { key: 'temple_timings', value: JSON.stringify(timings) },
    { key: 'travel_info', value: JSON.stringify(travel) },
    { key: 'sacred_mantras', value: JSON.stringify(mantras) }
  ];

  for (const item of payload) {
    const existing = existingSettings.find(s => s.key === item.key);
    if (existing) {
      console.log(`Updating ${item.key} (id: ${existing.id})...`);
      const updateRes = await fetch(`${url}/settings?id=eq.${existing.id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ value: item.value })
      });
      console.log(`Update ${item.key} status:`, updateRes.status);
    } else {
      console.log(`Inserting ${item.key}...`);
      const insertRes = await fetch(`${url}/settings`, {
        method: 'POST',
        headers,
        body: JSON.stringify(item)
      });
      console.log(`Insert ${item.key} status:`, insertRes.status);
    }
  }

  // Verify
  const verifyRes = await fetch(`${url}/settings?select=*`, { headers });
  const verifySettings = await verifyRes.json();
  console.log('Final settings keys in Supabase:', verifySettings.map(s => s.key));
}

sync();
