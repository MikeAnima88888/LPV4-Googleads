
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Eye, Ear } from 'lucide-react';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/">← Back to Home</Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-center">Accessibility Statement</h1>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
              <p>We are committed to ensuring digital accessibility for all users and continuously improving the user experience for everyone through ongoing accessibility improvements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Accessibility Standards</h2>
              <p className="mb-4">Our website aims to conform to the following accessibility standards:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WCAG 2.1 Level AA</li>
                <li>ADA compliance</li>
                <li>Section 508</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Accessibility Features</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Visual Accessibility</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>High contrast colors</li>
                    <li>Scalable fonts</li>
                    <li>Alt text for images</li>
                    <li>Keyboard navigation</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Ear className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Auditory Accessibility</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Video captions</li>
                    <li>Audio text alternatives</li>
                    <li>Visual sound indicators</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Motor Accessibility</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Keyboard-only navigation</li>
                    <li>Large click targets</li>
                    <li>No time-sensitive actions</li>
                    <li>Voice control compatibility</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Assistive Technologies</h2>
              <p className="mb-4">Our website is compatible with the following assistive technologies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Voice recognition software</li>
                <li>Keyboard navigation</li>
                <li>Browser zoom (up to 200%)</li>
                <li>High contrast/dark mode</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Known Limitations</h2>
              <p>We acknowledge that our website may not be fully accessible in all areas. We are actively working to improve accessibility and welcome your feedback.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Feedback and Assistance</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="mb-4">If you encounter any accessibility barriers, please contact our Accessibility Coordinator:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: accessibility@clearchain.com</li>
                  <li>Phone: +46 8 456 32 18</li>
                  <li>Address: Kungsgatan 47, 111 22 Stockholm, Sweden</li>
                  <li>Response time: 2 business days</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Alternative Access Methods</h2>
              <p className="mb-4">We offer alternative ways to access our services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Phone consultations</li>
                <li>In-person meetings</li>
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

export default AccessibilityStatement;
