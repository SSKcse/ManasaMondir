const fs = require('fs');

// Read existing dump
const dump = JSON.parse(fs.readFileSync('supabase_data.json', 'utf8'));

const appJsx = fs.readFileSync('app.jsx', 'utf8');
const timingsMatch = appJsx.match(/"timings":\s*(\{[\s\S]*?\n  \}),\n  "travel"/);
const travelMatch = appJsx.match(/"travel":\s*(\{[\s\S]*?\n  \}),\n  "mantras"/);
const mantrasMatch = appJsx.match(/"mantras":\s*(\[[\s\S]*?\n  \])\n\};/);

const templeTimings = timingsMatch ? JSON.parse(timingsMatch[1]) : {};
const travelInfo = travelMatch ? JSON.parse(travelMatch[1]) : {};
const sacredMantras = mantrasMatch ? JSON.parse(mantrasMatch[1]) : [];

// Ensure settings has all 5 keys
const settingsMap = new Map();
(dump.settings || []).forEach(s => settingsMap.set(s.key, s.value));
settingsMap.set('temple_timings', JSON.stringify(templeTimings));
settingsMap.set('travel_info', JSON.stringify(travelInfo));
settingsMap.set('sacred_mantras', JSON.stringify(sacredMantras));

let sql = `-- ============================================================
-- MONOSHA MONDIR SUPABASE DATABASE INITIALIZATION SCRIPT
-- Project: https://mvtuzkwslueesgszhcmm.supabase.co
-- Generated: ${new Date().toISOString()}
-- ============================================================

-- 1. Create Tables
CREATE TABLE IF NOT EXISTS public.settings (
    id BIGSERIAL PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT
);

CREATE TABLE IF NOT EXISTS public.committee (
    id BIGSERIAL PRIMARY KEY,
    name TEXT,
    role TEXT,
    phone TEXT,
    image TEXT,
    order_idx INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.testimonials (
    id BIGSERIAL PRIMARY KEY,
    date TEXT,
    name TEXT,
    designation TEXT,
    text TEXT
);

CREATE TABLE IF NOT EXISTS public.events (
    id BIGSERIAL PRIMARY KEY,
    title TEXT,
    date TEXT,
    description TEXT,
    image TEXT
);

CREATE TABLE IF NOT EXISTS public.notices (
    id BIGSERIAL PRIMARY KEY,
    date TEXT,
    title TEXT,
    text TEXT
);

CREATE TABLE IF NOT EXISTS public.donations (
    id BIGSERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    type TEXT,
    amount TEXT,
    date TEXT,
    is_hidden BOOLEAN DEFAULT FALSE
);

-- 2. Configure Row Level Security (RLS) - Permissive for Anon Public Client
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.committee ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public settings access" ON public.settings;
CREATE POLICY "Public settings access" ON public.settings FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public committee access" ON public.committee;
CREATE POLICY "Public committee access" ON public.committee FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public testimonials access" ON public.testimonials;
CREATE POLICY "Public testimonials access" ON public.testimonials FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public events access" ON public.events;
CREATE POLICY "Public events access" ON public.events FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public notices access" ON public.notices;
CREATE POLICY "Public notices access" ON public.notices FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public donations access" ON public.donations;
CREATE POLICY "Public donations access" ON public.donations FOR ALL USING (true) WITH CHECK (true);

-- 3. Populate Settings
`;

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

for (const [key, value] of settingsMap.entries()) {
  sql += `INSERT INTO public.settings (key, value) VALUES (${escapeSql(key)}, ${escapeSql(value)}) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;\n`;
}

// Committee
sql += `\n-- 4. Populate Committee (${(dump.committee || []).length} members)\n`;
for (const c of (dump.committee || [])) {
  sql += `INSERT INTO public.committee (id, name, role, phone, image, order_idx) VALUES (${c.id}, ${escapeSql(c.name)}, ${escapeSql(c.role)}, ${escapeSql(c.phone)}, ${escapeSql(c.image)}, ${c.order_idx || 0}) ON CONFLICT (id) DO NOTHING;\n`;
}
sql += `SELECT setval('public.committee_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.committee));\n`;

// Testimonials
sql += `\n-- 5. Populate Testimonials (${(dump.testimonials || []).length} items)\n`;
for (const t of (dump.testimonials || [])) {
  sql += `INSERT INTO public.testimonials (id, date, name, designation, text) VALUES (${t.id}, ${escapeSql(t.date)}, ${escapeSql(t.name)}, ${escapeSql(t.designation)}, ${escapeSql(t.text)}) ON CONFLICT (id) DO NOTHING;\n`;
}
sql += `SELECT setval('public.testimonials_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.testimonials));\n`;

// Events
sql += `\n-- 6. Populate Events (${(dump.events || []).length} items)\n`;
for (const e of (dump.events || [])) {
  sql += `INSERT INTO public.events (id, title, date, description, image) VALUES (${e.id}, ${escapeSql(e.title)}, ${escapeSql(e.date)}, ${escapeSql(e.description)}, ${escapeSql(e.image)}) ON CONFLICT (id) DO NOTHING;\n`;
}
sql += `SELECT setval('public.events_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.events));\n`;

// Notices
sql += `\n-- 7. Populate Notices (${(dump.notices || []).length} items)\n`;
for (const n of (dump.notices || [])) {
  sql += `INSERT INTO public.notices (id, date, title, text) VALUES (${n.id}, ${escapeSql(n.date)}, ${escapeSql(n.title)}, ${escapeSql(n.text)}) ON CONFLICT (id) DO NOTHING;\n`;
}
sql += `SELECT setval('public.notices_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.notices));\n`;

// Donations
sql += `\n-- 8. Populate Donations (${(dump.donations || []).length} items)\n`;
for (const d of (dump.donations || [])) {
  sql += `INSERT INTO public.donations (id, name, address, type, amount, date, is_hidden) VALUES (${d.id}, ${escapeSql(d.name)}, ${escapeSql(d.address)}, ${escapeSql(d.type)}, ${escapeSql(d.amount)}, ${escapeSql(d.date)}, ${d.is_hidden ? 'TRUE' : 'FALSE'}) ON CONFLICT (id) DO NOTHING;\n`;
}
sql += `SELECT setval('public.donations_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.donations));\n`;

fs.writeFileSync('supabase_schema_and_data.sql', sql, 'utf8');
console.log('Successfully generated supabase_schema_and_data.sql. File size:', (sql.length / 1024 / 1024).toFixed(2), 'MB');

// Also create a light DDL-only version (tables & RLS only, fast to paste)
const ddlOnly = sql.split('-- 3. Populate Settings')[0];
fs.writeFileSync('supabase_tables_ddl.sql', ddlOnly, 'utf8');
console.log('Successfully generated supabase_tables_ddl.sql (tables & RLS only).');
