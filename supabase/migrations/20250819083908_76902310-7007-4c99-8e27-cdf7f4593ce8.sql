-- Drop existing problematic RLS policies
DROP POLICY IF EXISTS "anon_insert_contact_leads" ON contact_leads;
DROP POLICY IF EXISTS "authenticated_insert_contact_leads" ON contact_leads;

-- Create new RLS policies that properly allow inserts for both anon and authenticated users
CREATE POLICY "allow_anon_insert_contact_leads" 
ON contact_leads 
FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "allow_authenticated_insert_contact_leads" 
ON contact_leads 
FOR INSERT 
TO authenticated 
WITH CHECK (true);