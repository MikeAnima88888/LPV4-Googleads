
import { CheckCircle, Lock, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const scrollToForm = () => {
    // First, trigger the form section to load by scrolling to its container
    const formContainer = document.querySelector('[data-section="form"]');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth' });
      
      // Wait a bit for the component to load, then try to find the actual form
      setTimeout(() => {
        const form = document.getElementById('consultation-form') || 
                    document.querySelector('form') || 
                    formContainer;
        if (form) {
          form.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const benefits = [
    { icon: CheckCircle, text: "Free Legal Consultation" },
    { icon: Lock, text: "Confidential Case Review" },
    { icon: Clock, text: "24-Hour Response Time" },
    { icon: Award, text: "Licensed Legal Professionals" }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Don't Let Scammers
            <span className="block text-emerald-400 mt-2">Get Away With It</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Our licensed legal professionals have helped over 1,000 fraud victims explore their 
            legal options. Get your free consultation today and learn about your rights.
          </p>

          {/* Statistics Recap */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <benefit.icon className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
                <p className="text-white font-semibold text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl p-8 mb-12 backdrop-blur-sm">
            <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Legal Action May Be Possible
            </p>
            <p className="text-lg text-slate-300">
              Many fraud victims have legal options they don't know about. Our attorneys can help you understand your rights and explore potential recovery options.
            </p>
          </div>

          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Legal Consultation Now
          </Button>

          <p className="text-slate-400 mt-6 text-sm">
            No obligation • Completely confidential • Licensed attorneys standing by
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
