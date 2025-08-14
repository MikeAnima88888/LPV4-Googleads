import React, { useEffect } from "react";
import { DR_TRACKER_CONFIG, TRACKER_ENDPOINTS } from "../config/tracker.js";

const LeadTracker: React.FC = () => {
  useEffect(() => {
    // Disable external tracker script since we're using edge function instead
    console.log('LeadTracker: Using edge function instead of external script');
    
    // Only set up the callback function for potential future use
    (window as any).DR_TRACKER_CONFIG = DR_TRACKER_CONFIG;
    
    const callbackScript = document.createElement("script");
    callbackScript.innerHTML = `
      window.dr_callback_function = function(ret) {
        console.log('Tracker callback received:', ret);
        try {
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
        } catch (error) {
          console.warn('Error parsing tracker callback:', error);
        }
      };
    `;
    document.body.appendChild(callbackScript);

    return () => {
      try {
        if (callbackScript.parentNode) {
          document.body.removeChild(callbackScript);
        }
      } catch (error) {
        console.warn("Error cleaning up callback script:", error);
      }
    };
  }, []);

  return null;
};

export default LeadTracker;