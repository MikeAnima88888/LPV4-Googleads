import React, { useState } from "react";
import LeadTracker from "./LeadTracker";

export const LandingPageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneExt, setPhoneExt] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <LeadTracker />
      <form className="dr-form">
        <input
          type="hidden"
          className="dr-field-suid"
          id="dr-field-suid"
          value="<YOUR APIKEY>"
        />
        <input
          type="hidden"
          className="dr-field-clickid"
          id="dr-field-clickid"
          value="<YOUR CLICKID>"
        />
        <input
          type="hidden"
          className="dr-field-sourceid"
          id="dr-field-sourceid"
          value="<YOUR SOURCE ID>"
        />
        <input
          type="hidden"
          className="dr-send-capi"
          id="dr-send-capi"
          value=""
        />
        <input type="hidden" className="dr-field-brand" value="auto" />
        <input type="hidden" className="dr-campaign-id" value="<YOUR CAMPAIGN ID>" />
        <input
          type="hidden"
          className="dr-submit-type"
          id="dr-submit-type"
          value="0"
        />{" "}
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            className="dr-field-fname"
            id="dr-field-fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="dr-field-email"
            id="dr-field-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <>
          <div className="dr-field-ext-hide">
            <label htmlFor="phone_ext">Phone Ext:</label>
            <input
              type="text"
              className="dr-field-ext"
              id="dr-field-ext"
              value={phoneExt}
              onChange={(e) => setPhoneExt(e.target.value)}
            />
          </div>
          <div className="dr-field-phone-hide">
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="text"
              className="dr-field-phone"
              id="dr-field-phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </>
        <div
          className="dr-field-message"
          style={{ display: "none", color: "red" }}
        ></div>
        <button type="submit" className="dr-field-submit">
          Submit Form
        </button>
      </form>
    </>
  );
};

export default LandingPageForm;
