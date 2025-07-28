# Dr Tracker API Configuration

This directory contains the configuration for the Dr Tracker API integration.

## Configuration Details

- **Platform**: Dr Tracker
- **API Documentation**: https://tracker.soulortrack.com/help/#api_integration
- **API Key**: TVRRMU1EVmZPREkxWHpFME5UQTFYdz09
- **Password**: 6jNn8A7omd
- **Campaign ID**: 19274

## Files

- `tracker.js` - Contains the API configuration and helper functions
- `README.md` - This documentation file

## Usage

The configuration is imported and used in the `LeadTracker` component:

```javascript
import { DR_TRACKER_CONFIG, TRACKER_ENDPOINTS } from "../config/tracker.js";
```

## Security Note

The API credentials are stored in the configuration file. In a production environment, consider:
- Using environment variables
- Implementing proper authentication
- Securing API keys through backend services

## API Integration

The Dr Tracker API is integrated through:
1. Loading the tracker script from the provided URL
2. Initializing the configuration globally
3. Handling callbacks for form submissions
4. Managing error responses and user feedback 