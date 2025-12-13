"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import Hero1Image from "../assets/hero1.png";
// import RImage1 from "../assets/r-image1.png";
// import RImage2 from "../assets/r-image2.png";
// import RImage3 from "../assets/r-image3.png";
import Programs from "@/components/Programs";
import AboutComponent from "@/components/AboutComponent";
import ReasonToJoin from "@/components/ReasonToJoin";
import RecentBlogs from "@/components/RecentBlogs";
import OurPartners from "@/components/OurPartners";
import AdsToRegister from "@/components/AdsToRegister";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  const slides: Array<
    { type: "image"; src: any } | { type: "video"; src: string }
  > = [
    { type: "video", src: "https://nga.ac.rw/videos/nga_video_1.mp4" },
    // { type: "image", src: RImage1 },
    // { type: "image", src: RImage2 },
    // { type: "image", src: RImage3 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load video src after component mounts to prevent blocking
    const timer = setTimeout(() => {
      setVideoSrc(slides[currentSlide].src);
    }, 100); // small delay
    return () => clearTimeout(timer);
  }, [currentSlide, slides]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      <main className="">
        <div className="min-h-[120vh] h-[1060px] overflow-y-hidden relative w-full bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0">
            {slides[currentSlide].type === "video" ? (
              <>
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    muted={isMuted}
                    loop
                    preload="none"
                    onLoadedData={() => setVideoLoaded(true)}
                    className="w-full h-full object-cover animate-zoom-in"
                  />
                ) : null}
                {!videoLoaded && (
                  <div className="absolute inset-0 bg-primary-900 text-white flex items-center justify-center">
                    <div className="text-center w-full flex flex-col items-center justify-center">
                      <div className="flex space-x-4">
                        <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
                        <div className="w-6 h-6 bg-white rounded-full animate-bounce animation-delay-300"></div>
                        <div className="w-6 h-6 bg-white rounded-full animate-bounce animation-delay-500"></div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Image
                src={slides[currentSlide].src}
                alt=""
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          {slides[currentSlide].type === "video" && (
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-[5rem] right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 hover:scale-110 transition-all duration-300 animate-fade-in animation-delay-300"
            >
              {isMuted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
            </button>
          )}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative overflow-x-hidden">
              <Image
                src={Hero1Image}
                height={500}
                width={500}
                alt=""
                className="w-full min-w-[900px] h-auto"
              />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bold">
                <div className="absolute top-1/3 md:top-1/2 text-base sm:text-lg md:text-xl animate-slide-in-up animation-delay-1000">
                  New Generation Academy integrates Christian values into all
                  activities <br />
                  to develop students intellectually, morally, and spiritually.
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
            <div className="text-xl md:text-4xl mb-6 md:mb-4 opacity-80 animate-slide-in-left">
              {t("hero.welcome")}
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-4 md:mb-0 animate-slide-in-right animation-delay-300">
              {t("hero.academyName")}
            </h3>
            <div className="text-2xl mt-4 opacity-80 mb-6 md:mb-0 animate-fade-in animation-delay-500">
              {t("hero.tagline")}
            </div>
            <div className="mt-8 flex flex-col md:flex-row md:items-center w-full md:w-max gap-4 font-bold">
              <button className="bg-dark-500 text-white px-6 py-3.5 rounded-full hover:bg-dark-700 hover:scale-105 transition-all duration-300 animate-bounce-in animation-delay-700">
                {t("hero.learnMore")}
              </button>
              {/* <button className="border-2 border-white text-white bg-black/40 px-6 py-3.5 rounded-full hover:bg-dark-500 transition-colors duration-300">
                {t("hero.register")}
              </button> */}
            </div>
          </div>
        </div>
        <div className="min-h-screen">
          {/* Programs section */}
          <Programs />
          {/* About section */}
          <AboutComponent />
          {/* Reason to join section */}
          <ReasonToJoin />
          {/* Recent Blogs section */}
          <RecentBlogs />
          {/* Our Partners section */}
          <OurPartners />
          {/* Ads to register section */}
          <AdsToRegister />
        </div>
      </main>
    </div>
  );
}
