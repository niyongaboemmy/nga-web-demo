"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRight, ArrowDown } from "lucide-react";
import Hero1Image from "../assets/hero1.png";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

// Lazy load components for better performance
const Programs = dynamic(() => import("@/components/Programs"));
const AboutComponent = dynamic(() => import("@/components/AboutComponent"));
const ReasonToJoin = dynamic(() => import("@/components/ReasonToJoin"));
const RecentBlogs = dynamic(() => import("@/components/RecentBlogs"));
const OurPartners = dynamic(() => import("@/components/OurPartners"));
const AdsToRegister = dynamic(() => import("@/components/AdsToRegister"));

export default function Home() {
  const { t } = useTranslation("common");

  // const fallbackImage = Hero1Image;

  // Video logic moved to Global Layout (BackgroundVideo.tsx)

  return (
    <div className="min-h-screen font-sans bg-transparent overflow-x-hidden">
      <main>
        {/* Hero Section - Content Only (Video is in Global Layout) */}
        <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
          {/* Background Media Container Removed - Handled Globally */}

          {/* Slide Indicators Removed */}

          {/* Content Container */}
          <div className="relative z-10 h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {/* Welcome Text */}
              <div className="text-base sm:text-xl md:text-2xl text-white/80 mb-4 font-light tracking-wide">
                {t("hero.welcome") || "Welcome to Innovation"}
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-orange-200 dark:from-white dark:via-blue-200 dark:to-orange-300 bg-clip-text text-transparent">
                {t("hero.academyName") || "Transform Tomorrow"}
              </h1>

              {/* Tagline */}
              <p className="hidden sm:block text-lg sm:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light">
                {t("hero.tagline") ||
                  "Master cutting-edge technologies through hands-on learning, modern labs, and strong industry partnerships."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="group px-6 py-3 bg-gradient-to-r from-primary-900 to-primary-900 dark:from-dark-500 dark:to-dark-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-base tracking-wide">
                  {t("hero.learnMore") || "Learn More"}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white font-bold rounded-full hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/50 dark:hover:border-white/40 transition-all duration-300 transform hover:scale-105 text-base tracking-wide">
                  {t("hero.register") || "Register"}
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 sm:flex flex-col items-center gap-3 animate-bounce"
            style={{
              opacity: "var(--scroll-opacity, 1)",
            }}
          >
            <span className="text-white/60 dark:text-white/50 text-sm font-semibold">
              SCROLL TO EXPLORE
            </span>
            <ArrowDown className="w-5 h-5 text-white/60 dark:text-white/50" />
          </div>

          {/* Cute Animated Divider */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-24">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-full fill-primary-600 dark:fill-primary-700"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z"
                className="animate-wave"
              />
            </svg>

            {/* Floating Circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-2 left-10 w-6 h-6 bg-white/30 rounded-full animate-float"></div>
              <div
                className="absolute top-4 right-12 w-4 h-4 bg-white/20 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-6 left-1/4 w-5 h-5 bg-white/15 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-3 right-1/4 w-3 h-3 bg-white/25 rounded-full animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute bottom-8 right-20 w-4 h-4 bg-white/20 rounded-full animate-float"
                style={{ animationDelay: "2.5s" }}
              ></div>
            </div>
          </div>

          <style>{`
            @keyframes wave {
              0% {
                d: path('M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z');
              }
              50% {
                d: path('M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z');
              }
              100% {
                d: path('M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z');
              }
            }
            .animate-wave {
              animation: wave 4s ease-in-out infinite;
            }
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
                opacity: 0.6;
              }
              50% {
                transform: translateY(-20px);
                opacity: 0.2;
              }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}</style>
        </div>

        {/* Programs Section */}
        <section>
          <Programs />
        </section>

        {/* About Section */}
        <section>
          <AboutComponent />
        </section>

        {/* Reason to Join Section */}
        <section>
          <ReasonToJoin />
        </section>

        {/* Recent Blogs Section */}
        <section>
          <RecentBlogs />
        </section>

        {/* Our Partners Section */}
        <section>
          <OurPartners />
        </section>

        {/* Ads to Register Section */}
        <section>
          <AdsToRegister />
        </section>
      </main>
    </div>
  );
}
