"use client";

import {
  FiBookOpen,
  FiHome,
  FiTarget,
  FiUsers,
  FiCompass,
  FiArrowRight,
} from "react-icons/fi";
import { useState } from "react";

const ReasonToJoin = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: FiBookOpen,
      title: "Industry-Relevant Curriculum",
      description:
        "Cutting-edge courses designed with industry experts to ensure you learn what matters most in today's tech landscape.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    },
    {
      icon: FiHome,
      title: "State-of-the-Art Facilities",
      description:
        "Modern learning spaces equipped with the latest technology to provide the best educational experience.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      icon: FiTarget,
      title: "Practical Approach",
      description:
        "Hands-on learning with real-world projects that prepare you for immediate success in your career.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      icon: FiUsers,
      title: "Industry Partnerships",
      description:
        "Strong connections with leading companies providing internships, mentorship, and career opportunities.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
    {
      icon: FiCompass,
      title: "Career Pathways",
      description:
        "Comprehensive support and guidance to help you navigate your journey from student to professional.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-950 py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-800/5 dark:bg-primary-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-primary-800 dark:bg-primary-700 text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-black dark:text-white leading-tight">
            Reasons to Join Our Academy
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover what makes us the perfect choice for your educational
            journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-pointer"
              >
                {/* Card Container */}
                <div className="relative h-80 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-primary-800 dark:hover:border-primary-700 shadow-xl hover:shadow-2xl dark:shadow-black/50 dark:hover:shadow-primary-800/20 transition-all duration-500 hover:-translate-y-2">
                  {/* Background Image */}
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-primary-800/95 group-hover:via-black/70 dark:from-black/95 dark:via-black/60 dark:group-hover:from-primary-800/98 dark:group-hover:via-black/80 transition-all duration-500"></div>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary-800 dark:bg-primary-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-lg dark:shadow-black/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <IconComponent
                          className="w-8 h-8 text-primary-800 dark:text-primary-600"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow flex flex-col justify-end space-y-3">
                      <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-white/90 dark:text-white/95 text-sm leading-relaxed transition-colors duration-300">
                        {reason.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg dark:shadow-black/50">
                        <FiArrowRight
                          className="w-5 h-5 text-primary-800 dark:text-primary-600"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white dark:bg-gray-900 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-bl-full transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button Section */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-8">
          <button className="group relative px-6 py-3 bg-primary-800 dark:bg-primary-700 text-white rounded-full font-bold text-sm dark:shadow-black/50 dark:hover:shadow-primary-800/30 transition-all duration-300 hover:scale-105 overflow-hidden">
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <span className="relative flex items-center gap-2">
              Register Now
              <FiArrowRight
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                strokeWidth={2.5}
              />
            </span>
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join thousands of successful graduates
          </p>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-800 dark:bg-primary-700 animate-pulse"></div>
            <div
              className="w-2 h-2 rounded-full bg-primary-800 dark:bg-primary-700 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-primary-800 dark:bg-primary-700 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToJoin;
