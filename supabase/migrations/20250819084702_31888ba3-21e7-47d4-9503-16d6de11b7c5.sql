-- Re-enable RLS on contact_leads table
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows anyone to insert contact leads (public form)
CREATE POLICY "allow_public_insert_contact_leads" 
ON contact_leads 
FOR INSERT 
WITH CHECK (true);