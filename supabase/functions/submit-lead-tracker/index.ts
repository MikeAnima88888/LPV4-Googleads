import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// API Configuration - these would be stored as secrets in production
const API_CONFIG = {
  API_KEY: 'TVRRMk1UbGZPREkxWHpFME5qRTVYdz09',
  API_PASSWORD: 'KQb05g4Vvi',
  CAMPAIGN_ID: '19394',
  LANGUAGE: 'en'
};

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
  clickId?: string;
  page?: string;
  ip?: string;
  country?: string;
  scamType?: string;
  amountLost?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received request to submit lead tracker');
    
    const leadData: LeadData = await req.json();
    console.log('Lead data received:', leadData);

    // Prepare form data for the tracker API
    const formData = new URLSearchParams({
      ApiKey: API_CONFIG.API_KEY,
      ApiPassword: API_CONFIG.API_PASSWORD,
      CampaignID: API_CONFIG.CAMPAIGN_ID,
      ClickID: leadData.clickId || '',
      FirstName: leadData.firstName,
      LastName: leadData.lastName,
      Email: leadData.email,
      PhoneNumber: leadData.phoneNumber,
      Language: API_CONFIG.LANGUAGE,
      Description: leadData.description || '',
      Note: '',
      Page: leadData.page || '',
      IP: leadData.ip || '',
      SubSource: '',
      P1: leadData.scamType || '', // Map scam type to P1
      P2: leadData.amountLost || '', // Map amount lost to P2
      P3: '',
      P4: '',
      P5: ''
    });

    console.log('Submitting to tracker API with data:', Object.fromEntries(formData));

    // Make the API call to the tracker
    const trackerResponse = await fetch('https://tracker.soulortrack.com/repost.php?act=register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const responseText = await trackerResponse.text();
    console.log('Tracker API response status:', trackerResponse.status);
    console.log('Tracker API response:', responseText);

    if (!trackerResponse.ok) {
      throw new Error(`Tracker API returned status ${trackerResponse.status}: ${responseText}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        trackerResponse: responseText,
        status: trackerResponse.status 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in submit-lead-tracker function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});