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
  phonePrefix?: string;
  description: string;
  clickId?: string;
  page?: string;
  ip?: string;
  country?: string;
  scamType?: string;
  amountLost?: string;
}

// Country code mapping
const COUNTRY_CODES: { [key: string]: string } = {
  "United States": "+1",
  "Canada": "+1", 
  "United Kingdom": "+44",
  "Australia": "+61",
  "New Zealand": "+64",
  "Germany": "+49",
  "France": "+33",
  "Spain": "+34",
  "Italy": "+39",
  "Netherlands": "+31",
  "Belgium": "+32",
  "Switzerland": "+41",
  "Austria": "+43",
  "Sweden": "+46",
  "Norway": "+47",
  "Denmark": "+45",
  "Finland": "+358",
  "Ireland": "+353",
  "Portugal": "+351",
  "Greece": "+30",
  "Poland": "+48",
  "Czech Republic": "+420",
  "Hungary": "+36",
  "Romania": "+40",
  "Bulgaria": "+359",
  "Croatia": "+385",
  "Slovenia": "+386",
  "Slovakia": "+421",
  "Lithuania": "+370",
  "Latvia": "+371",
  "Estonia": "+372",
  "Malta": "+356",
  "Cyprus": "+357",
  "Luxembourg": "+352",
  "Iceland": "+354",
  "Brazil": "+55",
  "Mexico": "+52",
  "Argentina": "+54",
  "Chile": "+56",
  "Colombia": "+57",
  "Peru": "+51",
  "Venezuela": "+58",
  "Uruguay": "+598",
  "Paraguay": "+595",
  "Bolivia": "+591",
  "Ecuador": "+593",
  "Japan": "+81",
  "South Korea": "+82",
  "China": "+86",
  "India": "+91",
  "Singapore": "+65",
  "Hong Kong": "+852",
  "Taiwan": "+886",
  "Thailand": "+66",
  "Malaysia": "+60",
  "Philippines": "+63",
  "Indonesia": "+62",
  "Vietnam": "+84",
  "Israel": "+972",
  "United Arab Emirates": "+971",
  "Saudi Arabia": "+966",
  "South Africa": "+27",
  "Egypt": "+20",
  "Nigeria": "+234",
  "Kenya": "+254",
  "Ghana": "+233",
  "Morocco": "+212",
  "Tunisia": "+216",
  "Algeria": "+213",
  "Turkey": "+90",
  "Russia": "+7",
  "Ukraine": "+380",
  "Belarus": "+375",
  "Kazakhstan": "+7",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received request to submit lead tracker');
    
    const leadData: LeadData = await req.json();
    console.log('Lead data received:', leadData);

    // Use provided phone prefix to format phone number
    const formattedPhoneNumber = leadData.phonePrefix ? `${leadData.phonePrefix}${leadData.phoneNumber}` : leadData.phoneNumber;

    // Prepare form data for the tracker API
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