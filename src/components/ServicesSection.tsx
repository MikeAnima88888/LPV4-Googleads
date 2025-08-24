
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
      title: "Investment Scam Consultation",
      description: "Consultation to help you understand your options regarding investment scams, including fraudulent schemes and fake trading platforms.",
      highlight: "Learn About Options",
      theme: "emerald",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      cardBg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: Shield,
      title: "Cryptocurrency Scam Consultation",
      description: "Consultation to help you understand your options in cryptocurrency scam cases, including platform failures.",
      highlight: "Learn About Options",
      theme: "blue",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
      buttonBg: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Heart,
      title: "Romance Scam Consultation",
      description: "Compassionate guidance for people affected by romance scams and dating-app fraud.",
      highlight: "Learn About Options",
      theme: "rose",
      iconBg: "bg-gradient-to-br from-rose-500 to-rose-600",
      cardBg: "bg-gradient-to-br from-rose-50 to-rose-100",
      buttonBg: "bg-rose-600 hover:bg-rose-700"
    },
    {
      icon: AlertTriangle,
      title: "Consumer Protection Consultation",
      description: "Guidance regarding online shopping scams, tech-support scams, and other consumer scam matters.",
      highlight: "Learn About Options",
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
            Consultation Services for Scam Victims
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our team specializes in helping people affected by online scams 
            understand their options and explore available resources.
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
