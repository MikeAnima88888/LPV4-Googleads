
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "M. Thompson",
      location: "New York",
      text: "CLEARCHAIN Recovery helped me understand my legal options after losing $50,000 to a cryptocurrency scam. Their professional approach and expertise gave me hope when I thought all was lost.",
      rating: 5
    },
    {
      name: "D. Chen",
      location: "San Francisco",
      text: "The legal team at CLEARCHAIN provided exceptional guidance through my investment fraud case. They were responsive, knowledgeable, and truly cared about getting results.",
      rating: 5
    },
    {
      name: "J. Martinez",
      location: "Miami",
      text: "After falling victim to a romance scam, I was devastated. CLEARCHAIN's compassionate legal team helped me explore my options and provided the support I needed during a difficult time.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from clients who found legal guidance and support through our services
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-slate-700 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-bold text-slate-900 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-slate-500">
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-emerald-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 mb-2">
              <div className="text-2xl font-black text-emerald-600">A+</div>
            </div>
            <div className="text-sm text-slate-600">Legal Rating</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 mb-2">
              <div className="text-2xl font-black text-blue-600">Licensed</div>
            </div>
            <div className="text-sm text-slate-600">Legal Professionals</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 mb-2">
              <div className="text-2xl font-black text-amber-600">15+</div>
            </div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-4 mb-2">
              <div className="text-2xl font-black text-rose-600">24/7</div>
            </div>
            <div className="text-sm text-slate-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
