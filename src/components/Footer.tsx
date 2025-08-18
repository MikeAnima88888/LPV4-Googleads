
import { Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Logo */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="flex items-center space-x-3 mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-black text-white">CLEARCHAIN</span>
                  <span className="text-2xl font-light text-emerald-400">Recovery</span>
                </div>
                <span className="text-sm text-slate-400">Licensed Legal Services</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Free Legal Consultation</span>
              </div>
              <p className="text-emerald-100 text-sm mb-2">Speak with a licensed attorney about your case</p>
              <ul className="text-white/90 text-sm space-y-1">
                <li>Canada: <a href="tel:+16476015502" className="hover:underline underline-offset-2">+1 (647)-601-5502</a></li>
                <li>United Kingdom: <a href="tel:+442037696468" className="hover:underline underline-offset-2">+44 (203)-769-6468</a></li>
                <li>Sweden: <a href="tel:+46406829478" className="hover:underline underline-offset-2">+46 (406)-829-478</a></li>
                <li>Australia: <a href="tel:+61289070307" className="hover:underline underline-offset-2">+61 (289)-070-307</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <nav className="flex flex-wrap gap-4 text-slate-300 text-sm">
              <Link to="/contact" className="hover:text-white underline-offset-4 hover:underline">Contact</Link>
              <Link to="/about" className="hover:text-white underline-offset-4 hover:underline">About</Link>
              <Link to="/privacy-policy" className="hover:text-white underline-offset-4 hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white underline-offset-4 hover:underline">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white underline-offset-4 hover:underline">Cookie Policy</Link>
              <Link to="/legal-disclaimer" className="hover:text-white underline-offset-4 hover:underline">Legal Disclaimer</Link>
              <Link to="/accessibility" className="hover:text-white underline-offset-4 hover:underline">Accessibility</Link>
            </nav>
          </div>

          {/* Legal Disclaimers */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Important Legal Notices</h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-white mb-3">Attorney Advertising</h4>
                  <p className="mb-4">
                    This website constitutes attorney advertising. Prior results do not guarantee 
                    a similar outcome. The information on this website is for general information 
                    purposes only and is not intended to be legal advice.
                  </p>
                  
                  <h4 className="font-semibold text-white mb-3">No Attorney-Client Relationship</h4>
                  <p>
                    Contacting CLEARCHAIN Recovery through this website does not create an 
                    attorney-client relationship. Confidential or time-sensitive information 
                    should not be sent through this form.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Licensed Professionals</h4>
                  <p className="mb-4">
                    CLEARCHAIN Recovery works with licensed attorneys who are authorized to 
                    practice law in their respective jurisdictions. Not all attorneys are 
                    licensed in all states.
                  </p>
                  
                  <h4 className="font-semibold text-white mb-3">Consultation Disclaimer</h4>
                  <p>
                    A free consultation does not guarantee that we will take your case. 
                    Each case is evaluated on its individual merits. Legal representation 
                    may not be appropriate for all situations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Service Areas & Limitations</h3>
              
              <div className="text-sm text-slate-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Geographic Limitations:</strong> Legal services 
                  are provided by attorneys licensed in their respective jurisdictions. Not all 
                  legal services are available in all locations. International cases may have 
                  additional complexities and limitations.
                </p>
                
                <p>
                  <strong className="text-white">Case Evaluation:</strong> Each fraud case is 
                  unique and must be evaluated individually. The availability of legal remedies 
                  depends on various factors including jurisdiction, applicable laws, available 
                  evidence, and the specific circumstances of each case.
                </p>
                
                <p>
                  <strong className="text-white">Recovery Limitations:</strong> While we assist 
                  clients in exploring legal options for recovery, we cannot guarantee successful 
                  recovery of lost funds. The ability to recover assets depends on many factors 
                  beyond our control, including the location and availability of assets.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Consumer Protection Statement</h3>
              
              <div className="text-sm text-slate-300 leading-relaxed space-y-4">
                <p>
                  CLEARCHAIN Recovery is committed to ethical legal practices and consumer protection. 
                  We provide transparent information about legal options and work with licensed 
                  attorneys who adhere to professional standards of conduct.
                </p>
                
                <p>
                  <strong className="text-white">Warning:</strong> Be cautious of companies that 
                  guarantee fund recovery or charge upfront fees for recovery services. Legitimate 
                  legal services should be transparent about their fee structure and limitations.
                </p>
                
                <p className="text-xs text-slate-400 border-t border-slate-600 pt-4 mt-6">
                  © {new Date().getFullYear()} CLEARCHAIN Recovery. This website and its content are protected by copyright law. 
                  All rights reserved. Unauthorized reproduction or distribution is prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
