"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FiSun,
  FiMoon,
  FiChevronDown,
  FiMenu,
  FiX,
  FiCheck,
} from "react-icons/fi";

const Navbar = () => {
  const { t, i18n } = useTranslation("common");
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const updateActiveLink = () => {
      const hash = window.location.hash.slice(1) || "home";
      setActiveLink(hash);
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);

    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, []);

  // Listen for i18n language changes and update component state
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-md border-b border-gray-200 dark:border-gray-900/0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/apple-touch-icon.png"
              alt="New Generation Academy Logo"
              width={50}
              height={50}
              className="mr-2 rounded-full transition-all duration-300 w-auto h-[46px]"
            />
            <div>
              <h1 className="text-lg font-extrabold text-gray-900 dark:text-white transition-colors duration-300">
                New Generation Academy
              </h1>
              <div className="text-gray-600 dark:text-gray-300 text-xs opacity-70 font-semibold -mt-0.5">
                Transformed for Community
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <Link
              href="#home"
              className={`transition-all duration-300 px-4 py-2 rounded-full ${
                activeLink === "home"
                  ? "bg-primary-100 text-primary-950 dark:text-white dark:bg-gray-100/10 backdrop-blur-md"
                  : "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-900"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#about"
              className={`transition-all duration-300 px-4 py-2 rounded-full ${
                activeLink === "about"
                  ? "bg-primary-100 text-primary-950 dark:text-white dark:bg-gray-100/10 backdrop-blur-md"
                  : "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-900"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#courses"
              className={`transition-all duration-300 px-4 py-2 rounded-full ${
                activeLink === "courses"
                  ? "bg-primary-100 text-primary-950 dark:text-white dark:bg-gray-100/10 backdrop-blur-md"
                  : "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-900"
              }`}
            >
              {t("nav.courses")}
            </Link>
            <Link
              href="#contact"
              className={`transition-all duration-300 px-4 py-2 rounded-full ${
                activeLink === "contact"
                  ? "bg-primary-100 text-primary-950 dark:text-white dark:bg-gray-100/10 backdrop-blur-md"
                  : "text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-900"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center bg-gray-200 dark:bg-gray-100/10 text-gray-900 dark:text-gray-100 px-4 pr-6 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100/20 transition-all duration-300 text-sm hover:scale-105"
              >
                <div className="font-normal opacity-80">
                  {language === "en" ? t("nav.english") : t("nav.french")}
                </div>
                <div>
                  <FiChevronDown
                    className={`ml-2 transition-transform duration-300 ${
                      isLangDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {isLangDropdownOpen && (
                <div
                  className="absolute top-full mt-1 bg-white dark:bg-gray-800/95 rounded-2xl shadow-lg border dark:border-none border-gray-200 dark:border-gray-800 z-50 transform scale-100 opacity-100 transition-all duration-200"
                  ref={langDropdownRef}
                >
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`flex items-center justify-between w-full text-left px-3 pr-6 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-2xl transition-colors duration-200 ${
                      language === "en"
                        ? "bg-primary-100 dark:bg-primary-950/50"
                        : ""
                    }`}
                  >
                    {t("nav.english")}
                    {language === "en" && (
                      <div className="pl-3">
                        <FiCheck className="text-green-500" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className={`flex items-center justify-between w-full text-left px-3 pr-6 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-2xl transition-colors duration-200 ${
                      language === "fr"
                        ? "bg-primary-100 dark:bg-primary-950/50"
                        : ""
                    }`}
                  >
                    {t("nav.french")}
                    {language === "fr" && (
                      <div className="pl-3">
                        <FiCheck className="text-green-500" />
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="hidden md:block p-2 rounded-full bg-gray-200 dark:bg-gray-100/10 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-100/30 hover:scale-110 hover:rotate-180 transition-all duration-300"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800/95 backdrop-blur-md border-l border-gray-200 dark:border-gray-700 shadow-lg transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50`}
          ref={mobileMenuRef}
        >
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {t("nav.navigation")}
              </h3>
              <div className="space-y-1">
                <Link
                  href="#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-all duration-300 py-3 px-4 rounded-lg ${
                    activeLink === "home"
                      ? "bg-primary-100 text-p5m text-black dark:text-white dark:bg-gray-800/70"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-all duration-300 py-3 px-4 rounded-lg ${
                    activeLink === "about"
                      ? "bg-primary-100 text-p5m text-black dark:text-white dark:bg-gray-800/70"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href="#courses"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-all duration-300 py-3 px-4 rounded-lg ${
                    activeLink === "courses"
                      ? "bg-primary-100 text-p5m text-black dark:text-white dark:bg-gray-800/70"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {t("nav.courses")}
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-all duration-300 py-3 px-4 rounded-lg ${
                    activeLink === "contact"
                      ? "bg-primary-100 text-p5m text-black dark:text-white dark:bg-gray-800/70"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {t("nav.contact")}
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {t("nav.settings")}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    {t("nav.language")}
                  </span>
                  <select
                    value={language}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-full text-sm"
                  >
                    <option value="en">{t("nav.english")}</option>
                    <option value="fr">{t("nav.french")}</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    {t("nav.theme")}
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    {isDark ? (
                      <FiSun className="w-4 h-4" />
                    ) : (
                      <FiMoon className="w-4 h-4" />
                    )}
                    <span className="text-sm">
                      {isDark ? t("nav.light") : t("nav.dark")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
