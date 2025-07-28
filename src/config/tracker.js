// Dr Tracker API Configuration
export const DR_TRACKER_CONFIG = {
  PLATFORM: "Dr Tracker",
  API_DOC: "https://tracker.soulortrack.com/help/#api_integration",
  API_KEY: "TVRRMU1EVmZPREkxWHpFME5UQTFYdz09",
  PASS: "6jNn8A7omd",
  CAMPAIGN_ID: "19274"
};

// API endpoints and configuration
export const TRACKER_ENDPOINTS = {
  BASE_URL: "https://tracker.soulortrack.com",
  API_INTEGRATION: "https://tracker.soulortrack.com/help/#api_integration",
  TRACKER_SCRIPT: "https://link2shortner.link/tracker.js"
};

// Helper function to get tracker configuration
export const getTrackerConfig = () => {
  return {
    ...DR_TRACKER_CONFIG,
    endpoints: TRACKER_ENDPOINTS
  };
}; 