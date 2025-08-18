
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LeadForm from '@/components/LeadForm';
import StatisticsSection from '@/components/StatisticsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Immediate render
    setIsLoaded(true);
  }, []);

  // Scroll to anchor (e.g., /#consultation-form) when coming from other pages
  useEffect(() => {
    if (!isLoaded) return;
    const hash = location.hash?.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash, isLoaded]);

  return (
    <div className={`font-inter transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <div data-hero>
          <HeroSection />
        </div>
        
        <div data-section="stats" className="min-h-[1px]">
          <StatisticsSection />
        </div>
        
        <div data-section="services" className="min-h-[1px]">
          <ServicesSection />
        </div>
        
        <div data-section="testimonials" className="min-h-[1px]">
          <TestimonialsSection />
        </div>
        
        <div data-section="form" className="min-h-[1px]">
          <LeadForm />
        </div>
        
        <div data-section="cta" className="min-h-[1px]">
          <FinalCTA />
        </div>
      </main>
      
      <div data-section="footer" className="min-h-[1px]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
