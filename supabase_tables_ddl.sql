-- ============================================================
-- MONOSHA MONDIR SUPABASE DATABASE INITIALIZATION SCRIPT
-- Project: https://mvtuzkwslueesgszhcmm.supabase.co
-- Generated: 2026-10-03T16:21:59.132Z
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

