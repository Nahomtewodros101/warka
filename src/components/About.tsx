import React, { useState, useEffect } from "react";
import { Award, Users, Clock, Target, CheckCircle } from "lucide-react";
import { Logo } from "./Logo";

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    properties: 0,
    clients: 0,
    satisfaction: 0,
  });

  const finalValues = {
    experience: 15,
    properties: 500,
    clients: 1200,
    satisfaction: 98,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounters({
              experience: Math.floor(finalValues.experience * progress),
              properties: Math.floor(finalValues.properties * progress),
              clients: Math.floor(finalValues.clients * progress),
              satisfaction: Math.floor(finalValues.satisfaction * progress),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounters(finalValues);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide exceptional real estate services that help our clients find their perfect property while contributing to sustainable community development.",
    },
    {
      icon: CheckCircle,
      title: "Our Vision",
      description:
        "To be the leading real estate company in Ethiopia, known for integrity, innovation, and creating lasting relationships with our clients.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, excellence, sustainability, and client satisfaction are at the core of everything we do in the real estate industry.",
    },
  ];

  const achievements = [
    {
      icon: Clock,
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: counters.properties,
      suffix: "+",
      label: "Properties Sold",
    },
    {
      icon: Award,
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: Target,
      value: counters.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-slate-800 dark:text-white mb-6">
            About Warka Properties
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Rooted in excellence, growing with purpose. We are more than just a
            real estate company - we are your partners in finding the perfect
            property.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Warka Properties Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6">
                <Logo className="w-12 h-12 animate-pulse" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-float"></div>
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold font-display text-slate-800 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Like the mighty Warka tree that provides shelter and sustenance
                to communities across Ethiopia, Warka Properties has been
                nurturing dreams and providing homes for families since our
                founding.
              </p>
              <p>
                Our journey began with a simple belief: that everyone deserves a
                place to call home, and every property transaction should be
                handled with the utmost care and professionalism.
              </p>
              <p>
                Today, we stand as one of Ethiopia's most trusted real estate
                companies, with deep roots in the community and branches that
                reach across the nation's most desirable locations.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              {[
                "15+ years of real estate expertise",
                "500+ successful property transactions",
                "Award-winning customer service",
                "Sustainable development focus",
              ].map((point, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
