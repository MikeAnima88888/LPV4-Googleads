
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/">← Back to Home</Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <h1 className="text-3xl font-bold text-center">Legal Disclaimer</h1>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">No Attorney-Client Relationship</h2>
              <p className="font-medium text-red-600 mb-4">IMPORTANT NOTICE:</p>
              <p className="mb-4">The use of this website does not create an attorney-client relationship. A formal retainer agreement is required to establish such a relationship.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Not Legal Advice</h2>
              <p className="mb-4">The information provided on this website is for general informational purposes only. Due to the complexity and constant changes in the law, case-specific legal advice is always needed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">No Guarantee of Results</h2>
              <p>Past results do not guarantee future outcomes. Each case has unique circumstances that affect the outcome.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Confidentiality Warning</h2>
              <p className="font-medium text-red-600 mb-4">WARNING:</p>
              <p>Attorney-client privilege protection is conditional on establishing a formal relationship. Do not send confidential information through this website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Advertising Material</h2>
              <p className="mb-4">This website may be considered advertising material under professional conduct rules. The choice of an attorney is an important decision.</p>
              <p className="text-sm text-gray-700">We follow the advertising requirements of major platforms including Meta, Google Ads, and TikTok. Prior results do not guarantee a similar outcome. We do not make exaggerated or misleading claims, and any use of pixels or cookies for advertising is disclosed in our Privacy and Cookie Policies with opt-out mechanisms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Jurisdiction and Licensing</h2>
              <p>Our attorneys are licensed in specific jurisdictions. State laws vary, and this information may not apply to your situation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
              <p>We disclaim all liability for any actions taken or not taken based on information from this website. Always consult with a qualified attorney.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Time Limitations</h2>
              <p className="font-medium text-red-600 mb-4">URGENT:</p>
              <p>Legal matters are subject to strict time limits. Contact an attorney immediately to protect your rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
              <p className="mb-4">For legal consultation:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: legal@clearchain.com</li>
                <li>Phone: +36 1 234 56 78</li>
                <li>Address: Andrássy út 67, 1062 Budapest, Hungary</li>
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

export default LegalDisclaimer;
