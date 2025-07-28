
import { TrendingUp, Shield, Heart, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
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

  const services = [
    {
      icon: TrendingUp,
      title: "Investment Fraud Legal Representation",
      description: "Legal assistance for victims of fraudulent investment schemes, binary options, and fake trading platforms.",
      highlight: "Recover Lost Investments",
      theme: "emerald",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      cardBg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: Shield,
      title: "Cryptocurrency Asset Legal Services",
      description: "Specialized legal support for cryptocurrency fraud, including recovery of stolen digital assets and platform failures.",
      highlight: "Crypto Recovery Experts",
      theme: "blue",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
      buttonBg: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Heart,
      title: "Romance Scam Legal Support",
      description: "Compassionate legal assistance for victims of romance scams and dating app fraud schemes.",
      highlight: "Confidential Support",
      theme: "rose",
      iconBg: "bg-gradient-to-br from-rose-500 to-rose-600",
      cardBg: "bg-gradient-to-br from-rose-50 to-rose-100",
      buttonBg: "bg-rose-600 hover:bg-rose-700"
    },
    {
      icon: AlertTriangle,
      title: "Consumer Protection Legal Services",
      description: "Comprehensive legal protection for online shopping fraud, tech support scams, and other consumer fraud.",
      highlight: "Full Legal Protection",
      theme: "amber",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
      cardBg: "bg-gradient-to-br from-amber-50 to-amber-100",
      buttonBg: "bg-amber-600 hover:bg-amber-700"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Legal Services for Fraud Victims
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our licensed legal professionals specialize in helping victims of online fraud 
            explore their legal options and pursue compensation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.cardBg} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer`}
            >
              <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`px-4 py-2 bg-white rounded-full text-sm font-semibold text-${service.theme}-700 shadow-sm`}>
                  {service.highlight}
                </span>
                <Button 
                  onClick={scrollToForm}
                  size="sm"
                  className={`${service.buttonBg} text-white rounded-xl px-4 py-2 font-semibold shadow-lg transition-all duration-300`}
                >
                  Get Help <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
