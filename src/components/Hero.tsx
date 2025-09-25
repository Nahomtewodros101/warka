import React, { useEffect, useState } from "react";
import { ChevronDown, MapPin, Home, TrendingUp } from "lucide-react";
import { Logo } from "./Logo";

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Find Your Dream Home",
      subtitle: "Where luxury meets nature",
      description:
        "Discover exceptional properties that blend modern living with natural beauty",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      title: "Sustainable Living",
      subtitle: "Eco-friendly properties",
      description:
        "Invest in properties that care for the environment and your future",
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      title: "Prime Locations",
      subtitle: "Strategic investments",
      description:
        "Properties in the most sought-after locations with guaranteed growth",
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Home, value: "500+", label: "Properties Sold" },
    { icon: MapPin, value: "15+", label: "Prime Locations" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  // Function to handle smooth scroll to Properties section
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-emerald-900/40"></div>
          </div>
        ))}
      </div>

      {/* Floating Trees Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-10 dark:opacity-5 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          >
            <Logo className="w-16 h-16 opacity-30 filter drop-shadow-lg" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <Logo className="w-24 h-24 animate-pulse hover:animate-bounce transition-all duration-500" />
              <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
            <span className="block">{slides[currentSlide].title}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block mt-2 font-display italic">
              {slides[currentSlide].subtitle}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToProperties}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Explore Properties</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="https://t.me/warkaproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 block text-center"
            >
              Schedule Viewing
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group transition-all duration-500 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-emerald-400 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};