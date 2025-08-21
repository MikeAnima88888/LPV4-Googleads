
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Shield, CheckCircle, Lock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">← Back to Home</Link>
        </Button>

        {/* Page header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg mb-4">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Contact CLEARCHAIN</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Confidential, no-obligation consultations with licensed legal professionals.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full">Licensed Legal Services</span>
            <span className="px-3 py-1.5 bg-blue-500/20 text-blue-200 text-xs font-semibold rounded-full">Consumer Protection</span>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact methods */}
          <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-sm rounded-3xl">
            <CardHeader>
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                    <Mail className="h-5 w-5 text-emerald-400" />
                    Email
                  </div>
                  <div className="text-slate-200 text-sm">contact@clearchainrecovery.com</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2 text-white font-semibold">
                    <Phone className="h-5 w-5 text-emerald-400" />
                    Phone
                  </div>
                  <ul className="text-slate-200 text-sm space-y-1">
                    <li>
                      Canada: <a href="tel:+16476015502" className="hover:text-white underline underline-offset-2">+1 (647)-601-5502</a>
                    </li>
                    <li>
                      United Kingdom: <a href="tel:+442037696468" className="hover:text-white underline underline-offset-2">+44 (203)-769-6468</a>
                    </li>
                    <li>
                      Sweden: <a href="tel:+46406829478" className="hover:text-white underline underline-offset-2">+46 (406)-829-478</a>
                    </li>
                    <li>
                      Australia: <a href="tel:+61289070307" className="hover:text-white underline underline-offset-2">+61 (289)-070-307</a>
                    </li>
                  </ul>
                  <div className="text-slate-400 text-xs mt-2">Available during consultation</div>
                </div>
              </div>

              {/* Address moved below as a full-width, organized section */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3 text-white font-semibold">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  Office Locations & Address
                </div>
                <p className="text-slate-200 text-xs mb-4">Legal services provided by licensed attorneys in applicable jurisdictions</p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-white/90 font-semibold">Stockholm, Sweden</div>
                    <div className="text-emerald-200 text-sm">Global Investigations Head Office</div>
                    <div className="text-slate-200 text-sm">Vasagatan 11, 111 20</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-white/90 font-semibold">Budapest, Hungary</div>
                    <div className="text-emerald-200 text-sm">International HQ & Legal Operations Center</div>
                    <div className="text-slate-200 text-sm">96-98 Váci Road, 1133 Budapest, Hungary</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-white/90 font-semibold">United Kingdom, London</div>
                    <div className="text-emerald-200 text-sm">CA Headquarters</div>
                    <div className="text-slate-200 text-sm">First Bath Place, EC2A 3DR</div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200 text-sm">24-hour response target</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200 text-sm">Confidential consultation</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200 text-sm">Licensed professionals</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA / Notices */}
          <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-3xl shadow-xl">
            <CardHeader>
              <h2 className="text-2xl font-bold">Free Legal Consultation</h2>
              <p className="text-emerald-100 text-sm">Speak with a licensed attorney about your case</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <Button asChild size="lg" className="w-full bg-white text-emerald-800 hover:bg-white/90 font-bold">
                <Link to="/#consultation-form">Get Your Free Consultation</Link>
              </Button>
              <div className="text-xs text-emerald-100/90 space-y-2">
                <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
                <p>No attorney-client relationship is formed until a formal retainer is signed.</p>
                <p>Services intended for adults (18+).</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;


