import React, { useState, useEffect } from "react";
import { MapPin, Bed, Bath, Square, Heart, Eye, Filter } from "lucide-react";
import { Logo } from "./Logo";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  type: "sale" | "rent";
  featured: boolean;
}

export const Properties: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "sale" | "rent">("all");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Villa with Garden",
      location: "Bole, Addis Ababa",
      price: "2,500,000 ETB",
      beds: 4,
      baths: 3,
      area: "350m²",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      type: "sale",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Kazanchis, Addis Ababa",
      price: "15,000 ETB/month",
      beds: 2,
      baths: 2,
      area: "120m²",
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      type: "rent",
      featured: false,
    },
    {
      id: 3,
      title: "Family House with Pool",
      location: "Old Airport, Addis Ababa",
      price: "3,200,000 ETB",
      beds: 5,
      baths: 4,
      area: "450m²",
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      type: "sale",
      featured: true,
    },
    {
      id: 4,
      title: "Cozy Studio Apartment",
      location: "Piazza, Addis Ababa",
      price: "8,000 ETB/month",
      beds: 1,
      baths: 1,
      area: "45m²",
      image:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      type: "rent",
      featured: false,
    },
    {
      id: 5,
      title: "Penthouse with City View",
      location: "CMC, Addis Ababa",
      price: "4,800,000 ETB",
      beds: 3,
      baths: 3,
      area: "280m²",
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      type: "sale",
      featured: true,
    },
    {
      id: 6,
      title: "Garden Apartment",
      location: "Megenagna, Addis Ababa",
      price: "12,000 ETB/month",
      beds: 3,
      baths: 2,
      area: "180m²",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      type: "rent",
      featured: false,
    },
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

    const element = document.getElementById("properties");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const filteredProperties = properties.filter(
    (property) => filter === "all" || property.type === filter
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="properties"
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
            Featured Properties
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium properties that
            offer the perfect blend of luxury, comfort, and natural beauty.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg border border-slate-200 dark:border-slate-700">
            {["all", "sale", "rent"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  filter === type
                    ? "bg-emerald-600 text-white shadow-lg scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                {type === "all" ? "All Properties" : `For ${type}`}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 dark:border-slate-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {property.featured && (
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.type === "sale"
                        ? "bg-blue-600 text-white"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    For {property.type}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      favorites.includes(property.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(property.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {property.title}
                </h3>

                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Link */}
                <a
                  href="https://t.me/warkaproperties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg block text-center"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-emerald-600 dark:border-emerald-400 rounded-full font-semibold hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 transition-all duration-300 hover:scale-105">
            <span className="flex items-center">
              Load More Properties
              <Logo className="w-5 h-5 ml-2 group-hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
