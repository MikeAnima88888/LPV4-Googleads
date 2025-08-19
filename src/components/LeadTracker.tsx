import React, { useEffect } from "react";
import { DR_TRACKER_CONFIG, TRACKER_ENDPOINTS } from "../config/tracker.js";

const LeadTracker: React.FC = () => {
  useEffect(() => {
    // Load jQuery with error handling
    if (!(window as any).jQuery) {
      const jqueryScript = document.createElement("script");
      jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
      jqueryScript.async = true;
      jqueryScript.onerror = () => {
        console.warn("Failed to load jQuery, tracker may not work properly");
      };
      document.body.appendChild(jqueryScript);
    }

    // Load tracker script with error handling
    const trackerScript = document.createElement("script");
    trackerScript.src = TRACKER_ENDPOINTS.TRACKER_SCRIPT;
    trackerScript.async = true;
    trackerScript.onerror = () => {
      console.warn("Failed to load tracker script:", TRACKER_ENDPOINTS.TRACKER_SCRIPT);
    };
    document.body.appendChild(trackerScript);

    // Initialize Dr Tracker API configuration
    (window as any).DR_TRACKER_CONFIG = DR_TRACKER_CONFIG;

    const callbackScript = document.createElement("script");
    callbackScript.innerHTML = `
      window.dr_callback_function = function(ret) {
        try {
          if (typeof ret === 'string') {
            ret = JSON.parse(ret);
          }
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
        } catch (error) {
          console.warn("Error in dr_callback_function:", error);
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