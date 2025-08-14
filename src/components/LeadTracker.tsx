import React, { useEffect } from "react";
import { DR_TRACKER_CONFIG, TRACKER_ENDPOINTS } from "../config/tracker.js";

const LeadTracker: React.FC = () => {
  useEffect(() => {
    if (!(window as any).jQuery) {
      const jqueryScript = document.createElement("script");
      jqueryScript.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
      jqueryScript.async = true;
      document.body.appendChild(jqueryScript);
    }

    // Only load tracker script if we have valid configuration
    if (!DR_TRACKER_CONFIG.API_KEY || !DR_TRACKER_CONFIG.CAMPAIGN_ID) {
      console.warn('Tracker configuration incomplete, skipping tracker initialization');
      return;
    }

    const trackerScript = document.createElement("script");
    trackerScript.src = TRACKER_ENDPOINTS.TRACKER_SCRIPT;
    trackerScript.async = true;
    document.body.appendChild(trackerScript);

    // Initialize Dr Tracker API configuration
    (window as any).DR_TRACKER_CONFIG = DR_TRACKER_CONFIG;
    
    // Add debugging for tracker initialization
    console.log('Tracker config initialized:', DR_TRACKER_CONFIG);
    
    // Wait for tracker script to load before initializing
    trackerScript.onload = () => {
      console.log('Tracker script loaded successfully');
      // Try to initialize tracker if available
      if ((window as any).dr_init) {
        try {
          (window as any).dr_init();
          console.log('Tracker initialized');
        } catch (error) {
          console.warn('Tracker initialization failed:', error);
        }
      }
    };
    
    trackerScript.onerror = (error) => {
      console.error('Failed to load tracker script:', error);
    };

    const callbackScript = document.createElement("script");
    callbackScript.innerHTML = `
      window.dr_callback_function = function(ret) {
        ret = JSON.parse(ret);
        const msgEl = document.querySelector(".dr-field-message");
        if (!msgEl) return;

        const show = (msg) => {
          msgEl.textContent = msg;
          msgEl.style.display = "block";
          setTimeout(() => msgEl.style.display = "none", 7000);
        };

        if (ret.ret_code === "404") {
          if (ret.ret_message === "Invalid Phone") return show("Your phone number is invalid");
          if (ret.ret_message === "Invalid Email") return show("Your email is invalid");
          if (ret.ret_message === "No brand found") return show("There is currently a problem to connect you");
        }

        if (ret.ret_code === "409") {
          return show("Your email is already signed up");
        }
      };
    `;
    document.body.appendChild(callbackScript);

    return () => {
      try {
        if (trackerScript.parentNode) {
          document.body.removeChild(trackerScript);
        }
        if (callbackScript.parentNode) {
          document.body.removeChild(callbackScript);
        }
      } catch (error) {
        console.warn("Error cleaning up tracker scripts:", error);
      }
    };
  }, []);

  return null;
};

export default LeadTracker;