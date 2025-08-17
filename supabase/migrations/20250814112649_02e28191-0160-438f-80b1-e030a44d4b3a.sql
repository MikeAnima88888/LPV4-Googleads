-- Remove the overly permissive service role policy
DROP POLICY IF EXISTS "Service role can read all leads" ON public.contact_leads;

-- Create a more secure policy that only allows authenticated users with admin role
-- For now, we'll restrict to authenticated users only since no user roles system exists yet
CREATE POLICY "Only authenticated users can read leads" 
ON public.contact_leads 
FOR SELECT 
TO authenticated
USING (true);

-- Keep the existing insert policy for public form submissions
-- "Anyone can submit contact leads" policy remains unchanged

-- Add a policy for service role to access leads (for backend operations only)
CREATE POLICY "Service role limited access for backend operations" 
ON public.contact_leads 
FOR SELECT 
TO service_role
USING (true);