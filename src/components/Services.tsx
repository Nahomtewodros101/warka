import React, { useState, useEffect } from 'react';
import { Home, Search, FileText, Calculator, Shield, Users } from 'lucide-react';
import { Logo } from './Logo';

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "Find your perfect property with our advanced search tools and expert guidance.",
      features: ["Advanced filtering", "Virtual tours", "Market analysis", "Location insights"]
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Comprehensive property management services to maximize your investment returns.",
      features: ["Tenant screening", "Maintenance coordination", "Rent collection", "Financial reporting"]
    },
    {
      icon: Calculator,
      title: "Investment Analysis",
      description: "Professional investment analysis to help you make informed property decisions.",
      features: ["ROI calculations", "Market trends", "Risk assessment", "Growth projections"]
    },
    {
      icon: FileText,
      title: "Legal Services",
      description: "Complete legal support for all your property transactions and documentation.",
      features: ["Contract review", "Title verification", "Legal compliance", "Documentation"]
    },
    {
      icon: Shield,
      title: "Property Insurance",
      description: "Protect your investment with comprehensive property insurance solutions.",
      features: ["Coverage options", "Risk assessment", "Claims support", "Policy management"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert consultation services to guide you through every step of your property journey.",
      features: ["Market insights", "Strategy planning", "Investment advice", "Personalized guidance"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-slate-800 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive real estate services designed to meet all your property needs with excellence and integrity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                activeService === index ? 'ring-2 ring-emerald-500 shadow-2xl scale-105' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Logo className="w-full h-full" />
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
                activeService === index ? 'animate-pulse' : ''
              }`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};