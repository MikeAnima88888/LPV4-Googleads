
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/">← Back to Home</Link>
        </Button>

        <Card>
          <CardHeader>
            <h1 className="text-3xl font-bold text-center">Terms of Service</h1>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Legal Disclaimer (Summary)</h2>
              <p className="mb-3">
                The following disclaimer forms part of these Terms of Service. It summarizes key
                points from our full <Link to="/legal-disclaimer" className="text-blue-600 underline">Legal Disclaimer</Link>.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800">
                <li><strong>Attorney Advertising:</strong> This website may be considered attorney advertising. Prior results do not guarantee a similar outcome.</li>
                <li><strong>No Attorney-Client Relationship:</strong> Using this website or contacting us does not create an attorney-client relationship. A formal retainer is required.</li>
                <li><strong>Not Legal Advice:</strong> The information provided is for general informational purposes only and is not legal advice.</li>
                <li><strong>No Guarantees:</strong> We cannot guarantee results. Each case depends on its unique facts and applicable law.</li>
                <li><strong>Confidentiality:</strong> Do not send confidential information until a formal relationship is established.</li>
                <li><strong>Jurisdiction & Licensing:</strong> Attorneys are licensed in specific jurisdictions; services may not be available in all locations.</li>
                <li><strong>Time Sensitivity:</strong> Legal claims are subject to deadlines; seek legal advice promptly to preserve rights.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
              <p>By using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Attorney-Client Relationship</h2>
              <p className="mb-4">Important notice regarding attorney-client relationships:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No relationship formed by website use</li>
                <li>Information not legal advice</li>
                <li>Formal retainer required</li>
                <li>Confidentiality protections conditional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Use of Services</h2>
              <p className="mb-4">You agree to use our services for lawful purposes only. Prohibited activities include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>False information</li>
                <li>Law violations</li>
                <li>Website interference</li>
                <li>Unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, we disclaim all liability for indirect, incidental, or consequential damages arising from your use of our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Termination</h2>
              <p>We reserve the right to terminate your access to our services immediately at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
              <p>These terms are governed by the laws of [Your State/Jurisdiction].</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
              <p className="mb-4">For questions about these Terms of Service:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: legal@yourlaw.com</li>
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

export default TermsOfService;
