"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { ChevronRight, Play, ArrowDown } from "lucide-react";
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

  const slides: Array<
    { type: "image"; src: any } | { type: "video"; src: string }
  > = [
    { type: "video", src: "./videos/video1.mp4" },
    { type: "video", src: "./videos/video2.mp4" },
    { type: "video", src: "./videos/video3.mp4" },
  ];

  const fallbackImage = Hero1Image;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(slides[0].src);
  const [nextVideoSrc, setNextVideoSrc] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setNextVideoSrc(slides[currentSlide].src);
  }, [currentSlide]);

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-950 overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-950">
          {/* Background Media Container */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ transform: "scale(var(--hero-scale, 1))" }}
          >
            {slides[currentSlide].type === "video" && !videoError ? (
              <>
                <video
                  src={currentVideoSrc}
                  autoPlay
                  muted={isMuted}
                  loop
                  preload="metadata"
                  onLoadedData={() => setVideoLoaded(true)}
                  onError={() => setVideoError(true)}
                  className={`w-full h-full object-cover transition-opacity duration-1000`}
                />
                {nextVideoSrc && (
                  <video
                    src={nextVideoSrc}
                    autoPlay
                    muted={isMuted}
                    loop
                    preload="metadata"
                    onLoadedData={() => {
                      setVideoLoaded(true);
                      setCurrentVideoSrc(nextVideoSrc);
                      setNextVideoSrc(null);
                    }}
                    onError={() => setVideoError(true)}
                    className={`w-full h-full object-cover`}
                  />
                )}
                {!videoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                      <div
                        className="w-3 h-3 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Image src={fallbackImage} alt="" fill className="object-cover" />
            )}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>

          {/* Animated Mesh Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(at 20% 50%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 50%, rgba(249, 115, 22, 0.3) 0px, transparent 50%),
                radial-gradient(at 50% 100%, rgba(168, 85, 247, 0.2) 0px, transparent 50%)
              `,
              backgroundSize: "200% 200%",
            }}
          ></div>

          {/* Volume Control Button */}
          {slides[currentSlide].type === "video" && !videoError && (
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-8 right-8 z-20 p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-white hover:bg-white/20 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              aria-label="Toggle mute"
            >
              {isMuted ? (
                <MdVolumeOff
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              ) : (
                <MdVolumeUp
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
              )}
            </button>
          )}

          {/* Slide Indicators */}
          <div className="absolute bottom-24 right-8 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-8 bg-white dark:bg-orange-400"
                    : "w-2 bg-white/50 dark:bg-white/30 hover:bg-white/70 dark:hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

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
          <div className="absolute bottom-0 left-0 right-0 z-10 h-32">
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
