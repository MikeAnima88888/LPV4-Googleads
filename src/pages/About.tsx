
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Target, CheckCircle, Search, Bitcoin, Bug, RefreshCw, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">← Back to Home</Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg mb-4">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">About Us</h1>
          <p className="text-emerald-300 font-semibold">Unveiling Excellence and Dedication</p>
          <p className="text-slate-300 max-w-2xl mx-auto mt-3">
            Ethical, transparent guidance for fraud victims — connecting you with licensed legal professionals.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full">Licensed Legal Services</span>
            <span className="px-3 py-1.5 bg-blue-500/20 text-blue-200 text-xs font-semibold rounded-full">Consumer Protection</span>
            <span className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Headquartered in London, UK</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: About sections */}
          <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-sm rounded-3xl">
            <CardHeader>
              <h2 className="text-2xl font-bold text-white">Who We Are</h2>
            </CardHeader>
            <CardContent className="space-y-8 text-slate-200">
              <section>
                <p>
                  We connect individuals affected by online and financial fraud with licensed attorneys who can
                  assess potential legal options. Our focus is clarity, confidentiality, and ethical practice.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3">Unveiling Excellence and Dedication</h3>
                <p className="mb-3">
                  CLEARCHAIN was founded by ClearChain Recovery, Crypto Investigations, Asset Recovery and Offshore Legal Experts.
                  With over 40 years of experience in these fields individually they came together to form a boutique Cyber and Crypto Intelligence Group focused on providing results.
                </p>
                <p>
                  Using the latest Cyber tools, Open Source Intelligence (OSINT), Human Intelligence (HUMINT), cutting edge technology and Cyber Tools, we provide Actionable Intelligence to our clients.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"><Target className="h-5 w-5 text-emerald-400" /> Our Mission</h3>
                <p>
                  Provide transparent information and confidential consultations to help victims make informed
                  decisions about potential legal actions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"><Users className="h-5 w-5 text-emerald-400" /> How We Work</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Listen and collect the essential facts</li>
                  <li>Offer a confidential consultation with licensed attorneys</li>
                  <li>Outline potential legal paths and next steps where appropriate</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"><Award className="h-5 w-5 text-emerald-400" /> Professional Standards</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Attorney advertising — prior results do not guarantee a similar outcome</li>
                  <li>No attorney-client relationship until a formal retainer is signed</li>
                  <li>Services intended for adults (18+)</li>
                </ul>
              </section>

              {/* Main Aspects of Our Work */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4">Main Aspects of Our Work</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold"><Search className="h-5 w-5 text-emerald-400" /> Open Source Intelligence</div>
                    <p className="text-slate-200 text-sm">We obtain vital insight to assist our investigations by meticulously analyzing publicly accessible data, giving our customers a comprehensive perspective of potential dangers and weaknesses.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold"><Bitcoin className="h-5 w-5 text-emerald-400" /> Digital Asset Tracing</div>
                    <p className="text-slate-200 text-sm">We track digital assets back to their sources using cutting-edge technology, assisting our clients in identifying and recovering stolen or misused monies in the complicated world of cryptocurrencies.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold"><Bug className="h-5 w-5 text-emerald-400" /> Cyber Investigations</div>
                    <p className="text-slate-200 text-sm">Our knowledgeable staff performs extensive cyber investigations, utilizing cutting-edge technologies and procedures to unearth key evidence and track the complicated channels of assets-related crime.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold"><RefreshCw className="h-5 w-5 text-emerald-400" /> Asset Recovery</div>
                    <p className="text-slate-200 text-sm">Our professional asset recovery specialists work relentlessly to help individuals and businesses recover monies and assets from fraudulent schemes and cybercriminals, assuring a never-ending pursuit of justice and reparation.</p>
                  </div>
                </div>
              </section>

              {/* Approach */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-2">Approach</h3>
                <h4 className="text-lg font-semibold text-emerald-300 mb-2">Our Approach to Asset Recovery</h4>
                <p className="mb-3">We believe that Intelligence led Asset Recovery leads to better results. Gone are the old days when a simple demand could be made for assets or funds to be returned. Today Cyber Criminals are extremely sophisticated at hiding assets and their identities.</p>
                <p>Financial recovery enables our clients to even the playing field. First identifying the real beneficial owners of the criminal scheme and locating recoverable assets.</p>
              </section>

              {/* Objective */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-2">Our Objective</h3>
                <p className="mb-3">Our major goal is to give our clients with Actionable Intelligence that results in tangible benefits. We understand that each case is unique, which is why we adjust our approach to each circumstance. We uncover critical information that traditional approaches may overlook by:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Integrating advanced Cyber technologies</li>
                  <li>Open Source Intelligence (OSINT)</li>
                  <li>The useful insights generated from Human Intelligence (HUMINT)</li>
                </ul>
              </section>

              {/* Our Mission values */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p>We are guided by the ideals of honesty, confidentiality, and openness as a corporation. We understand the sensitivity of financial fraud cases and treat each one with the utmost care. Our clients may be confident that their information and interests are secure. We take pleasure in developing long-term relationships with our clients and winning their confidence by our professionalism, experience, and constant dedication to producing great results. CLEARCHAIN considers itself a partner in the quest of justice and recovery, not merely a service provider.</p>
              </section>

              {/* Philosophy */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-2">Our Philosophy</h3>
                <p className="mb-3">We recognize the rising complexity of financial crimes in the digital age and the necessity for specific experience in countering them at CLEARCHAIN. Our team is well-versed in the complexities of:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cybercrime</li>
                  <li>Cryptocurrency investigations</li>
                  <li>Asset recovery</li>
                </ul>
                <p className="mt-3">We take pleasure in being at the forefront of the business, harnessing the most recent technological breakthroughs, and deploying a complete set of Cyber Tools to acquire and analyze data.</p>
              </section>

              {/* Offices */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">Our Office Locations</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-1 text-white font-semibold">
                      <MapPin className="h-5 w-5 text-emerald-400" /> Stockholm, Sweden
                    </div>
                    <div className="text-emerald-200 text-sm mb-1">Global Investigations Head Office</div>
                    <p className="text-slate-200 text-sm">Vasagatan 11, 111 20</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-1 text-white font-semibold">
                      <MapPin className="h-5 w-5 text-emerald-400" /> Budapest, Hungary
                    </div>
                    <div className="text-emerald-200 text-sm mb-1">International Headquarters and Financial Recovery Operations Center</div>
                    <p className="text-slate-200 text-sm">96-98 Váci Road, 1133 Budapest, Hungary</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:col-span-2">
                    <div className="flex items-center gap-2 mb-1 text-white font-semibold">
                      <MapPin className="h-5 w-5 text-emerald-400" /> United Kingdom, London
                    </div>
                    <div className="text-emerald-200 text-sm mb-1">CA Headquarters</div>
                    <p className="text-slate-200 text-sm">First Bath Place, EC2A 3DR</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          {/* Right: CTA */}
          <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-3xl shadow-xl">
            <CardHeader>
              <h2 className="text-2xl font-bold">Start Your Confidential Consultation</h2>
              <p className="text-emerald-100 text-sm">Licensed legal professionals, no obligation</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-3 text-emerald-100/95">
                <CheckCircle className="h-5 w-5" /> 24-hour response target
              </div>
              <Button asChild size="lg" className="w-full bg-white text-emerald-800 hover:bg-white/90 font-bold">
                <Link to="/">Get Free Consultation</Link>
              </Button>
              <p className="text-xs text-emerald-100/90">
                Prior results do not guarantee a similar outcome. No attorney-client relationship until a formal retainer is signed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;


