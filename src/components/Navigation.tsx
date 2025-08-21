
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('consultation-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/80 transition-all duration-300 group">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <Link to="/" aria-label="Go to home" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center space-x-1">
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 truncate">CLEARCHAIN</span>
      
                </div>
                <div className="hidden sm:flex space-x-2 mt-1">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full whitespace-nowrap">
                    Licensed Legal Services
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full whitespace-nowrap">
                    Consumer Protection
                  </span>
                </div>
              </div>
            </Link>
            {/* Inline toolbar navigation (desktop) */}
            <nav className="hidden md:flex items-center gap-6 ml-6">
              <Link to="/" className="text-slate-700 hover:text-slate-900 text-sm font-medium">Home</Link>
              <Link to="/contact" className="text-slate-700 hover:text-slate-900 text-sm font-medium">Contact</Link>
              <Link to="/about" className="text-slate-700 hover:text-slate-900 text-sm font-medium">About</Link>
              <Link to="/privacy-policy" className="text-slate-700 hover:text-slate-900 text-sm font-medium">Privacy</Link>
              <Link to="/terms-of-service" className="text-slate-700 hover:text-slate-900 text-sm font-medium">Terms</Link>
              <Link to="/legal-disclaimer" className="text-slate-700 hover:text-slate-900 text-sm font-medium">Disclaimer</Link>
            </nav>
          </div>

          {/* Desktop Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>Free Consultation Available</span>
            </div>
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Free Legal Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Inline toolbar handled next to logo on desktop */}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="px-3 py-4 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600 px-3 py-2">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Free Consultation Available</span>
              </div>
              <Button 
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
              >
                Get Free Legal Consultation
              </Button>
              {/* Mobile toolbar links */}
              <div className="grid grid-cols-2 gap-2 px-3">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-slate-900 text-sm font-medium py-2">Home</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-slate-900 text-sm font-medium py-2">Contact</Link>
                <Link to="/privacy-policy" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-slate-900 text-sm font-medium py-2">Privacy</Link>
                <Link to="/terms-of-service" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-slate-900 text-sm font-medium py-2">Terms</Link>
                <Link to="/legal-disclaimer" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-slate-900 text-sm font-medium py-2">Disclaimer</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-slate-900 text-sm font-medium py-2">About</Link>
              </div>
              <div className="flex flex-wrap gap-2 px-3">
                <span className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Licensed Legal Services
                </span>
                <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
                  Consumer Protection
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Navigation;
