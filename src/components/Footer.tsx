import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scroll to Properties section
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          >
            <Logo className="w-12 h-12" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
            {/* Company Info */}
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="w-12 h-12 animate-pulse" />
                <div>
                  <h3 className="text-2xl font-bold font-display">WARKA</h3>
                  <p className="text-emerald-400 font-medium -mt-1">
                    PROPERTIES
                  </p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Peace of Mind. Property with Purpose. Rooted in excellence,
                growing with you towards a sustainable future.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">+251912635255</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">info@warkaproperties.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Bole, Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start">
              <button
                onClick={scrollToProperties}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              >
                <span className="relative z-10">Explore Properties</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="https://t.me/warkaproperties"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 block text-center w-full sm:w-auto"
              >
                Schedule Viewing
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-slate-400 text-sm">
                © {currentYear} Warka Properties. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
