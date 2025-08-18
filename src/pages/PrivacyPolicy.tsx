
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/">← Back to Home</Link>
        </Button>

        <Card>
          <CardHeader>
            <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
            <p className="text-center text-gray-600 mt-2">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect various types of information to provide and improve our legal services:</p>
              
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Legal case details and documentation you provide</li>
                <li>Communication preferences and history</li>
                <li>Location information (IP address, general geographic location)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Device and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Referral sources and marketing attribution data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide legal consultation and representation services</li>
                <li>Communicate with you about your case and legal matters</li>
                <li>Send legal updates, newsletters, and educational content</li>
                <li>Improve and personalize our services</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Conduct marketing and advertising activities</li>
                <li>Analyze website performance and user behavior</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-medium mb-3">With Your Consent</h3>
              <p className="mb-4">We will share your information when you have given us explicit consent to do so.</p>

              <h3 className="text-xl font-medium mb-3">Service Providers and Business Partners</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Licensed attorneys and legal professionals in our network</li>
                <li>Technology service providers (hosting, analytics, communication tools)</li>
                <li>Marketing and advertising partners, including social media platforms</li>
                <li>Payment processors and financial service providers</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Advertising Partners</h3>
              <p className="mb-4">
                We work with advertising partners, including Meta (Facebook), Google, and other platforms to deliver 
                targeted advertisements. These partners may collect information about your interactions with our website 
                and advertisements through cookies, pixels, and similar technologies.
              </p>

              <h3 className="text-xl font-medium mb-3">Legal Requirements</h3>
              <p className="mb-4">We may disclose information when required by law, legal process, or to protect our rights and the rights of others.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies, web beacons, pixels, and similar technologies to collect information about your 
                use of our website and to provide personalized experiences.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
                <li><strong>Social Media Cookies:</strong> Enable social media features and personalized content</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Meta Pixel</h3>
              <p className="mb-4">
                We use Meta Pixel (Facebook Pixel) to measure the effectiveness of our advertising campaigns 
                and provide personalized advertising experiences. Meta may use this information to show you 
                relevant ads on Facebook, Instagram, and other platforms. You can learn more about Meta's 
                data practices at <a href="https://www.facebook.com/privacy/policy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Facebook's Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security and Retention</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Data Retention</h3>
              <p className="mb-4">
                We retain your personal information for as long as necessary to provide our services, comply with 
                legal obligations, resolve disputes, and enforce our agreements. Legal case information may be 
                retained for extended periods as required by professional conduct rules and legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications and targeted advertising</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Advertising Choices</h3>
              <p className="mb-4">You can control personalized advertising through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Your browser's cookie settings</li>
                <li>Facebook Ad Preferences: <a href="https://www.facebook.com/ads/preferences" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a></li>
                <li>Google Ad Settings: <a href="https://adssettings.google.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></li>
                <li>Digital Advertising Alliance opt-out: <a href="http://optout.aboutads.info" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a></li>
              </ul>
              <p className="mb-4">TikTok Ads personalisation controls: <a href="https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/personalized-ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">TikTok Ads Preferences</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Advertising & Pixels (Meta, Google Ads, TikTok)</h2>
              <p className="mb-4">We work with advertising partners including Meta (Facebook/Instagram), Google Ads, and TikTok. These partners may use cookies, pixels, SDKs, or similar technologies to measure campaign performance and deliver relevant advertisements.</p>
              <h3 className="text-xl font-medium mb-3">What Data May Be Collected</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Device and browser information, IP address, timestamp</li>
                <li>Pages visited, events (e.g., form submission), referral URLs</li>
                <li>Ad interactions, campaign parameters (e.g., UTM), hashed identifiers where applicable</li>
              </ul>
              <h3 className="text-xl font-medium mb-3">Purposes</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Measure ad performance and conversions</li>
                <li>Prevent fraud and improve ad delivery</li>
                <li>Deliver and limit personalized ads subject to your preferences</li>
              </ul>
              <h3 className="text-xl font-medium mb-3">Legal Basis</h3>
              <p className="mb-4">Where required (e.g., EEA/UK), we rely on your consent for marketing/advertising cookies and pixels. In other regions, we may rely on legitimate interests for measurement and security, where permitted by law. You can withdraw consent or adjust preferences at any time via your browser settings and our cookie controls.</p>
              <h3 className="text-xl font-medium mb-3">Opt-Out & Controls</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Facebook: <a href="https://www.facebook.com/ads/preferences" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a></li>
                <li>Google: <a href="https://adssettings.google.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></li>
                <li>TikTok: <a href="https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/personalized-ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">TikTok Ads Preferences</a></li>
                <li>DAA/NAI tools: <a href="http://optout.aboutads.info" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a>, <a href="https://optout.networkadvertising.org/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Regional Disclosures</h2>
              <h3 className="text-xl font-medium mb-3">EEA/UK</h3>
              <p className="mb-4">If you are located in the EEA/UK, we will request your consent before placing non-essential cookies or pixels. You can change your preferences at any time using your browser settings and available cookie controls. We respect applicable data subject rights under GDPR/UK GDPR.</p>
              <h3 className="text-xl font-medium mb-3">California (CCPA/CPRA)</h3>
              <p className="mb-4">We do not sell personal information for money. Some sharing for cross-context behavioral advertising may be considered a “sale” or “share” under California law. You can opt out of such sharing via your cookie settings and the advertising links above.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have different data protection laws. We ensure appropriate safeguards are in place 
                to protect your information when it is transferred internationally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children under 18. If we become aware that we have collected information 
                from a child under 18, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the effective date. We encourage you 
                to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li><strong>Email:</strong> privacy@clearchainrecovery.com</li>
                  <li><strong>Phone:</strong> Available during consultation</li>
                  <li><strong>Address:</strong> Legal services provided by licensed attorneys in applicable jurisdictions</li>
                </ul>
              </div>
            </section>

            <div className="border-t pt-6 mt-8">
              <p className="text-center text-gray-600 text-sm">
                This Privacy Policy was last updated on {new Date().toLocaleDateString()} and is compliant with 
                applicable privacy laws including GDPR, CCPA, and advertising platform requirements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
