import { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft, Clock, Shield, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const [countdown, setCountdown] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section with Emerald Gradient */}
          <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 px-8 py-12 text-white">
            {/* Background Pattern Effects */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-emerald-300 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Main Text */}
              <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Thank You for Your Submission!
              </h1>
              <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
                Your consultation request has been received by our legal team. 
                A licensed attorney will review your case and contact you within 24 hours.
              </p>

              {/* Auto-redirect notice */}
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white text-sm">
                  Redirecting to main page in <span className="font-bold text-xl">{countdown}</span> seconds...
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            {/* What Happens Next */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                What Happens Next?
              </h2>
              
              <div className="grid gap-6 md:gap-8">
                <div className="flex items-start space-x-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      Case Review (Within 24 Hours)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our licensed attorneys will carefully review your case details and determine the best legal options available to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      Personal Consultation Call
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      You'll receive a personal call from our legal team to discuss your case, answer questions, and explain your legal options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      Legal Action Plan
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      If we can help with your case, we'll provide a clear action plan and next steps to pursue legal remedies for your situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-blue-500 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Important Notice</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Confidentiality Assured:</strong> All information you've provided is strictly confidential and protected by attorney-client privilege. 
                Your consultation is completely free with no obligation to proceed.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="w-full sm:w-auto"
              >
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Return to Main Page
                </Button>
              </Link>
              
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-2xl font-semibold transition-all duration-300"
                onClick={() => window.print()}
              >
                Print Confirmation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
