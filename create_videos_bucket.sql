-- ============================================================
-- 1. Create Public Storage Bucket 'videos' for Temple Media
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/mvtuzkwslueesgszhcmm/sql
-- ============================================================

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('videos', 'videos', true, 52428800, ARRAY['video/*'])
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Configure Row Level Security (RLS) Policies for Public Uploads & Reads
DROP POLICY IF EXISTS "Public Videos Select" ON storage.objects;
CREATE POLICY "Public Videos Select" ON storage.objects 
FOR SELECT USING (bucket_id = 'videos');

DROP POLICY IF EXISTS "Public Videos Insert" ON storage.objects;
CREATE POLICY "Public Videos Insert" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'videos');

DROP POLICY IF EXISTS "Public Videos Update" ON storage.objects;
CREATE POLICY "Public Videos Update" ON storage.objects 
FOR UPDATE USING (bucket_id = 'videos');

DROP POLICY IF EXISTS "Public Videos Delete" ON storage.objects;
CREATE POLICY "Public Videos Delete" ON storage.objects 
FOR DELETE USING (bucket_id = 'videos');
