import { useEffect } from "react";

const LeadTracker = () => {
  useEffect(() => {
    if (!window.jQuery) {
      const jqueryScript = document.createElement("script");
      jqueryScript.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
      jqueryScript.async = true;
      document.body.appendChild(jqueryScript);
    }

    const trackerScript = document.createElement("script");
    trackerScript.src = "https://link2shortner.link/tracker.js";
    trackerScript.async = true;
    document.body.appendChild(trackerScript);

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
      document.body.removeChild(trackerScript);
      document.body.removeChild(callbackScript);
    };
  }, []);

  return null;
};

export default LeadTracker;
