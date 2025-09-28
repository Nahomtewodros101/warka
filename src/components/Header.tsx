import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-emerald-100 dark:border-slate-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div>
              <h1 className="text-2xl font-bold font-display text-slate-800 dark:text-white tracking-tight">
                WARKA
              </h1>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium -mt-1">
                PROPERTIES
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative  text-black hover:text-emerald-600  font-medium transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-black dark:text-slate-400">
              <Phone className="w-4 h-4" />
              <span>+251912635255</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-black dark:text-slate-400">
              <a
                href="https://t.me/warkaproperties"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-emerald-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-slate-700 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 border border-emerald-100 dark:border-slate-700">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-slate-700 dark:text-black hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-all duration-300 font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-2 border-t border-emerald-100 dark:border-slate-700 mt-2">
              <div className="flex items-center space-x-2  text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4" />
                <span>+251912635255</span>
              </div>
              <div className="flex items-center space-x-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4" />
                <span>+251960888885</span>
              </div>
              <div className="flex items-center space-x-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4" />
                <span>+251996598826</span>
              </div>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
