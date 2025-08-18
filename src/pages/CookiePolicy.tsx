
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/">← Back to Home</Link>
        </Button>

        <Card>
          <CardHeader>
            <h1 className="text-3xl font-bold text-center">Cookie Policy</h1>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better user experience and allow us to analyze how our website is used.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website by collecting information anonymously.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                  <p>These cookies are used to track visitors across websites to display relevant advertisements.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Functionality Cookies</h3>
                  <p>These cookies remember your preferences and settings to provide a personalized experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Third-Party Cookies</h2>
              <p className="mb-4">We use third-party services that may place cookies on your device:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Meta (Facebook/Instagram) Pixel</li>
                <li>Google Ads & Google Analytics</li>
                <li>TikTok Pixel / SDK (where applicable)</li>
                <li>Other marketing and analytics platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Managing Cookies</h2>
              <p className="mb-4">You can control cookies through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser settings control</li>
                <li>Delete existing cookies</li>
                <li>Privacy tools</li>
                <li>Opt-out industry tools</li>
                <li>Meta: facebook.com/ads/preferences</li>
                <li>Google: adssettings.google.com</li>
                <li>TikTok: support.tiktok.com → Personalized ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Consent</h2>
              <p>
                Where required by law (e.g., EEA/UK), we request your consent before using non-essential
                cookies/pixels. You can withdraw consent at any time by adjusting your browser or device
                settings and using the tools above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="mb-4">For questions about our Cookie Policy:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: cookies@yourlaw.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </section>

            <p className="text-center text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;
