-- Drop the existing insert policy and create one specifically for anon role
DROP POLICY IF EXISTS "public_insert_contact_leads" ON public.contact_leads;

-- Create INSERT policy specifically for anonymous users
CREATE POLICY "anon_insert_contact_leads" 
ON public.contact_leads 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Also create one for authenticated users just in case
CREATE POLICY "authenticated_insert_contact_leads" 
ON public.contact_leads 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Verify the anon role has the right permissions on the table
GRANT INSERT ON public.contact_leads TO anon;
GRANT USAGE ON SCHEMA public TO anon;