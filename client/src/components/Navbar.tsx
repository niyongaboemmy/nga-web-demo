"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation("common");
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [language, setLanguage] = useState("en");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const updateActiveLink = () => {
      if (pathname === "/about" || pathname?.startsWith("/about/")) {
        setActiveLink("about");
      } else if (pathname === "/academics" || pathname?.startsWith("/academics/")) {
        setActiveLink("academics");
      } else if (pathname === "/innovation" || pathname?.startsWith("/innovation/")) {
        setActiveLink("innovation");
      } else if (pathname === "/admissions" || pathname?.startsWith("/admissions/")) {
        setActiveLink("admissions");
      } else if (pathname === "/contact" || pathname?.startsWith("/contact/")) {
        setActiveLink("contact");
      } else if (pathname === "/") {
        const hash = window.location.hash.slice(1);
        if (hash === "contact") setActiveLink("contact");
        else setActiveLink("home");
      } else {
        setActiveLink("home");
      }
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);

    // const handleScroll = () => {
    //   setIsScrolled(window.scrollY > window.innerHeight);
    // };

    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

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

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  //   if (!isDark) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full ${
        // isScrolled &&
        !isDark
          ? "bg-dark-700 border-none border-white/20"
          : "bg-dark-700 dark:bg-transparent border-none border-gray-800/50"
        } dark:from-gray-900/20 dark:to-gray-800/20 backdrop-blur-md dark:border-gray-900/0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/apple-touch-icon.png"
                alt="NGA-Coding Academy Logo"
                width={50}
                height={50}
                className="mr-2 rounded-full transition-all duration-300 w-auto h-[46px]"
              />
              <div>
                <h1 className="text-lg font-extrabold text-white dark:text-white transition-colors duration-300">
                  NGA-Coding Academy
                </h1>
                <div className="text-blue-100 dark:text-gray-300 text-xs opacity-70 font-normal -mt-0.5">
                  Building Rwanda’s Next Generation of Developers
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-xs bg-white/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
            <Link
              href="/"
              onClick={() => setActiveLink("home")}
              className={`transition-all duration-300 px-4 py-1.5 rounded-full font-normal ${activeLink === "home"
                ? "bg-white text-black dark:bg-white dark:text-black shadow-lg"
                : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              onClick={() => setActiveLink("about")}
              className={`transition-all duration-300 px-4 py-1.5 rounded-full font-normal ${activeLink === "about"
                ? "bg-white text-black dark:bg-white dark:text-black shadow-lg"
                : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/academics"
              onClick={() => setActiveLink("academics")}
              className={`transition-all duration-300 px-4 py-1.5 rounded-full font-normal ${activeLink === "academics"
                ? "bg-white text-black dark:bg-white dark:text-black shadow-lg"
                : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
            >
              {t("nav.academics")}
            </Link>
            <Link
              href="/innovation"
              onClick={() => setActiveLink("innovation")}
              className={`transition-all duration-300 px-4 py-1.5 rounded-full font-normal ${activeLink === "innovation"
                ? "bg-white text-black dark:bg-white dark:text-black shadow-lg"
                : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
            >
              {t("nav.innovation")}
            </Link>
            <Link
              href="/admissions"
              onClick={() => setActiveLink("admissions")}
              className={`transition-all duration-300 px-4 py-1.5 rounded-full font-normal ${activeLink === "admissions"
                ? "bg-white text-black dark:bg-white dark:text-black shadow-lg"
                : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
            >
              {t("nav.admissions")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setActiveLink("contact")}
              className={`transition-all duration-300 px-4 py-1.5 rounded-full font-normal ${activeLink === "contact"
                ? "bg-white text-black dark:bg-white dark:text-black shadow-lg"
                : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
            >
              {t("nav.contact")}
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center bg-transparent border border-white/20 text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300 text-xs font-normal"
              >
                <div className="opacity-90">
                  {language === "en" ? "EN" : "FR"}
                </div>
                <div>
                  <FiChevronDown
                    className={`ml-1 transition-transform duration-300 ${isLangDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </button>
              {isLangDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 w-32 p-1 z-50 transform origin-top-right transition-all duration-200"
                  ref={langDropdownRef}
                >
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`flex items-center justify-between w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors ${language === "en"
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      }`}
                  >
                    English
                    {language === "en" && <FiCheck className="text-green-500 w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className={`flex items-center justify-between w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors ${language === "fr"
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      }`}
                  >
                    Français
                    {language === "fr" && <FiCheck className="text-green-500 w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center p-2 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-all"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          ref={mobileMenuRef}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
            <span className="font-bold text-lg dark:text-white">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <FiX className="w-5 h-5 dark:text-white" />
            </button>
          </div>
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-2">
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink("home");
                  }}
                  className={`block transition-all duration-200 py-3 px-4 rounded-xl font-normal ${activeLink === "home"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-all duration-200 py-3 px-4 rounded-xl font-normal ${activeLink === "about"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href="/academics"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink("academics");
                  }}
                  className={`block transition-all duration-200 py-3 px-4 rounded-xl font-normal ${activeLink === "academics"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  {t("nav.academics")}
                </Link>
                <Link
                  href="/innovation"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink("innovation");
                  }}
                  className={`block transition-all duration-200 py-3 px-4 rounded-xl font-normal ${activeLink === "innovation"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  {t("nav.innovation")}
                </Link>
                <Link
                  href="/admissions"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink("admissions");
                  }}
                  className={`block transition-all duration-200 py-3 px-4 rounded-xl font-normal ${activeLink === "admissions"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  {t("nav.admissions")}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink("contact");
                  }}
                  className={`block transition-all duration-200 py-3 px-4 rounded-xl font-normal ${activeLink === "contact"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
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
