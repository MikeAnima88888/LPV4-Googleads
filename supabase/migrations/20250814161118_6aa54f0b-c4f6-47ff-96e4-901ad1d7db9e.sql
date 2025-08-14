-- First, let's verify RLS is enabled and check the exact policy
SELECT pg_class.relname, pg_class.relrowsecurity 
FROM pg_class 
WHERE pg_class.relname = 'contact_leads';

-- Drop all existing policies and recreate them cleanly
DROP POLICY IF EXISTS "Allow anonymous form submissions" ON public.contact_leads;
DROP POLICY IF EXISTS "Only authenticated users can read leads" ON public.contact_leads;
DROP POLICY IF EXISTS "Service role limited access for backend operations" ON public.contact_leads;

-- Ensure RLS is enabled
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Create a simple, permissive INSERT policy for anonymous users
CREATE POLICY "public_insert_contact_leads" 
ON public.contact_leads 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create SELECT policies for authenticated users and service role
CREATE POLICY "authenticated_select_contact_leads" 
ON public.contact_leads 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "service_role_select_contact_leads" 
ON public.contact_leads 
FOR SELECT 
TO service_role
USING (true);