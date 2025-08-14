-- Drop the existing insert policy and recreate it to ensure anonymous form submissions work
DROP POLICY IF EXISTS "Anyone can submit contact leads" ON public.contact_leads;

-- Create a proper policy for anonymous form submissions
CREATE POLICY "Allow anonymous form submissions" 
ON public.contact_leads 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;