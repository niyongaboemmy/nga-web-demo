"use client";

import React, { useState } from "react";
import {
  FiTarget,
  FiEye,
  FiCheck,
  FiArrowRight,
  FiZap,
  FiGlobe,
  FiUsers,
  FiAward,
  FiBook,
  FiTrendingUp
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Hero1Image from "../../assets/hero1.png";
import MissionImage from "../../assets/r-image1.png";
import VisionImage from "../../assets/r-image2.png";
import { ArrowDown, ChevronDown } from "lucide-react";
import OurPartners from "@/components/OurPartners";
import AdsToRegister from "@/components/AdsToRegister";
import { motion } from "framer-motion";

const AboutPageContent = () => {
  const { t } = useTranslation("common");
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      icon: FiZap,
      title: t("aboutPage.values.items.innovation.title"),
      desc: t("aboutPage.values.items.innovation.desc"),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiCheck,
      title: t("aboutPage.values.items.ethical.title"),
      desc: t("aboutPage.values.items.ethical.desc"),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FiUsers,
      title: t("aboutPage.values.items.christ.title"),
      desc: t("aboutPage.values.items.christ.desc"),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FiGlobe,
      title: t("aboutPage.values.items.job.title"),
      desc: t("aboutPage.values.items.job.desc"),
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const stats = [
    { number: "500+", label: t("aboutPage.stats.students"), icon: FiUsers },
    { number: "98%", label: t("aboutPage.stats.success"), icon: FiTrendingUp },
    { number: "15+", label: t("aboutPage.stats.partners"), icon: FiAward },
    { number: "5+", label: t("aboutPage.stats.years"), icon: FiBook }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: "scale(var(--hero-scale, 1))" }}
        >
          <Image
            src={Hero1Image}
            alt="About NGA Coding Academy"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-900/60 to-gray-900/90"></div>

        {/* Floating Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-6 h-6 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-12 w-4 h-4 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-orange-500/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-blue-200 text-sm font-semibold mb-6 animate-fade-in-up uppercase tracking-widest backdrop-blur-md border border-white/10">
              {t("aboutPage.hero.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight text-white" data-aos="fade-up" data-aos-delay="100">
              {t("aboutPage.hero.title")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-200">
                {t("aboutPage.hero.highlight")}
              </span>{" "}
              {t("aboutPage.hero.suffix")}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
              {t("aboutPage.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="300">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              >
                {t("aboutPage.hero.start")} <FiArrowRight />
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                {t("aboutPage.hero.explore")}
              </Link>
            </div>
          </div>

        </div>

        {/* Animated Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-16 md:h-16">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-full fill-white dark:fill-gray-950"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>

        <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px); opacity: 0.6; }
                50% { transform: translateY(-20px); opacity: 0.2; }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
        `}</style>
      </div>

      {/* Statistics Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-800/5 dark:bg-primary-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-primary-800 dark:bg-primary-700 text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider">
                {t("aboutPage.stats.badge")}
              </span>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-black dark:text-white leading-tight">
              {t("aboutPage.stats.title")}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("aboutPage.stats.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-700 transition-all duration-300 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
                  <div className="text-3xl md:text-4xl font-black text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Side */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4 text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm">
                <div className="w-8 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                {t("aboutPage.mission.badge")}
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black mb-8 leading-tight" data-aos="fade-right">
                {t("aboutPage.mission.title")} <span className="text-primary-600 dark:text-primary-400">{t("aboutPage.mission.highlight")}</span> {t("aboutPage.mission.suffix")}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed" data-aos="fade-right" data-aos-delay="100">
                {t("aboutPage.mission.description")}
              </p>
              <ul className="space-y-4 mb-8" data-aos="fade-right" data-aos-delay="200">
                {[t("aboutPage.mission.list.educating"), t("aboutPage.mission.list.community"), t("aboutPage.mission.list.talent")].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                      <FiCheck size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Image Side */}
            <div className="lg:w-1/2 order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 group" data-aos="fade-left">
                <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-600/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <Image
                  src={MissionImage}
                  alt="Our Mission"
                  width={800}
                  height={600}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Card - Enhanced Visibility - Now Outside Image Container */}
              <div className="absolute -bottom-6 -left-6 z-20 hidden md:block">
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-primary-500/30 dark:border-primary-400/30 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">98%</div>
                  <div className="text-base font-bold text-gray-700 dark:text-gray-200">{t("aboutPage.mission.floating_title")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image Side */}
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-secondary-500/20 transition-all duration-500 group">
                <div className="absolute inset-0 bg-secondary-500/10 dark:bg-secondary-500/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <Image
                  src={VisionImage}
                  alt="Our Vision"
                  width={800}
                  height={600}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Text Side */}
            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="flex items-center gap-2 mb-4 text-secondary-500 font-bold tracking-wider uppercase text-sm">
                <div className="w-8 h-1 bg-secondary-500 rounded-full"></div>
                {t("aboutPage.vision.badge")}
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black mb-8 leading-tight">
                {t("aboutPage.vision.title")} <span className="text-secondary-500">{t("aboutPage.vision.highlight")}</span> {t("aboutPage.vision.suffix")}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t("aboutPage.vision.description")}
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-xs">
                  <FiTarget className="w-8 h-8 text-secondary-500 mb-2" />
                  <h4 className="font-bold mb-1">{t("aboutPage.vision.box1.title")}</h4>
                  <p className="text-sm text-gray-500">{t("aboutPage.vision.box1.desc")}</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-xs">
                  <FiEye className="w-8 h-8 text-secondary-500 mb-2" />
                  <h4 className="font-bold mb-1">{t("aboutPage.vision.box2.title")}</h4>
                  <p className="text-sm text-gray-500">{t("aboutPage.vision.box2.desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Grid */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-950 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-800/5 dark:bg-primary-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-primary-800 dark:bg-primary-700 text-white text-sm font-bold rounded-full shadow-lg uppercase tracking-wider">
                {t("aboutPage.values.badge")}
              </span>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-black dark:text-white leading-tight">
              {t("aboutPage.values.title")}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("aboutPage.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredValue(idx)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Dark Background Base */}
                  <div className="absolute inset-0 bg-gray-900 dark:bg-gray-900"></div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{value.title}</h3>
                      <p className="text-gray-400 group-hover:text-white/90 transition-colors leading-relaxed text-sm">
                        {value.desc}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="border-t border-gray-100 dark:border-gray-900">
        <OurPartners />
      </section>

      {/* Ads to Register Section */}
      <section>
        <AdsToRegister />
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent />
    </React.Suspense>
  );
};

export default AboutPage;
