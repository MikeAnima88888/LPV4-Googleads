import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  phonePrefix?: string;   // <-- added
  description: string;
  clickId?: string;
  page?: string;
  ip?: string;
  country?: string;
  scamType?: string;
  amountLost?: string;
}

function normalizePhone(phone: string, prefix: string = ''): string {
  if (!phone) return '';
  let clean = phone.replace(/[\s\-()]/g, '');
  if (clean.startsWith('+')) return clean;
  if (clean.startsWith('00')) return '+' + clean.slice(2);
  if (prefix) {
    if (clean.startsWith('0')) clean = clean.slice(1);
    return `${prefix}${clean}`;
  }
  return clean;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received request to submit lead tracker');
    
    const leadData: LeadData = await req.json();
    console.log('Lead data received:', leadData);

    const formattedPhoneNumber = normalizePhone(leadData.phoneNumber, leadData.phonePrefix);

    const formData = new URLSearchParams({
      ApiKey: API_CONFIG.API_KEY,
      ApiPassword: API_CONFIG.API_PASSWORD,
      CampaignID: API_CONFIG.CAMPAIGN_ID,
      ClickID: leadData.clickId || '',
      FirstName: leadData.firstName,
      LastName: leadData.lastName,
      Email: leadData.email,
      PhoneNumber: formattedPhoneNumber,
      Language: API_CONFIG.LANGUAGE,
      Description: leadData.description || '',
      Note: '',
      Page: leadData.page || '',
      IP: leadData.ip || '',
      SubSource: '',
      P1: leadData.scamType || '',
      P2: leadData.amountLost || '',
      P3: '',
      P4: '',
      P5: ''
    });

    console.log('Submitting to tracker API with data:', Object.fromEntries(formData));

    const trackerResponse = await fetch('https://tracker.soulortrack.com/repost.php?act=register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    const responseText = await trackerResponse.text();
    console.log('Tracker API response status:', trackerResponse.status);
    console.log('Tracker API response:', responseText);
    let trackerJson: any;
    try {
      trackerJson = JSON.parse(responseText);
    } catch (err) {
      trackerJson = { ret_code: trackerResponse.status, ret_message: 'Invalid JSON response' };
    }
    
    const isSuccess = trackerJson.ret_code === "200" || trackerJson.ret_code === "201";
    return new Response(
      JSON.stringify({ 
        success: isSuccess,
        message: trackerJson.ret_message,
        trackerResponse: trackerJson,
        status: trackerResponse.status,
        submission: Object.fromEntries(formData)
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in submit-lead-tracker function:', error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
