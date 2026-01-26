"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { ArrowDown, Clock, BarChart, Layout, Beaker, Tag, BookOpen, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import Hero1Image from "../../assets/hero1.png";

// Course Interface
interface Course {
    title: string;
    code: string;
    desc: string;
    duration: string;
    level: string;
    modules: number;
    labs: number;
    tags: string[];
}

const AcademicsPage = () => {
    const { t } = useTranslation("common");

    const years = [
        {
            id: "year1",
            title: "Year 1",
            subtitle: "Foundation Year",
            description: "Building the bedrock of technical competence. Students master the fundamentals of programming, logic, and professional communication.",
            color: "from-blue-600 to-indigo-600",
            courses: [
                {
                    title: t("courses.list.cs101.title"),
                    code: "CS-101",
                    desc: t("courses.list.cs101.desc"),
                    duration: "Trimester 1",
                    level: "Foundation",
                    modules: 5,
                    labs: 8,
                    tags: ["Computer Science", "Theory", "Hardware"],
                },
                {
                    title: t("courses.list.se101.title"),
                    code: "SE-101",
                    desc: t("courses.list.se101.desc"),
                    duration: "Trimester 2",
                    level: "Foundation",
                    modules: 6,
                    labs: 12,
                    tags: ["Development", "Fundamentals", "Logic"],
                },
                {
                    title: t("courses.list.mat101.title"),
                    code: "MAT-101",
                    desc: t("courses.list.mat101.desc"),
                    duration: "Full Year",
                    level: "Foundation",
                    modules: 8,
                    labs: 16,
                    tags: ["Mathematics", "Calculus", "Logic"],
                },
                {
                    title: t("courses.list.eng101.title"),
                    code: "ENG-101",
                    desc: t("courses.list.eng101.desc"),
                    duration: "Full Year",
                    level: "Foundation",
                    modules: 6,
                    labs: 8,
                    tags: ["Communication", "Writing", "Professional"],
                },
                {
                    title: t("courses.list.lan101.title"),
                    code: "LAN-101",
                    desc: t("courses.list.lan101.desc"),
                    duration: "Full Year",
                    level: "Foundation",
                    modules: 5,
                    labs: 10,
                    tags: ["Languages", "Culture", "Communication"],
                },
                {
                    title: t("courses.list.eth101.title"),
                    code: "ETH-101",
                    desc: t("courses.list.eth101.desc"),
                    duration: "Trimester 3",
                    level: "Foundation",
                    modules: 3,
                    labs: 2,
                    tags: ["Ethics", "Philosophy", "Technology"],
                },
            ]
        },
        {
            id: "year2",
            title: "Year 2",
            subtitle: "Core Engineering",
            description: "Deepening technical skills and system architecture. Focus shifts to building robust applications, databases, and networks.",
            color: "from-emerald-500 to-teal-600",
            courses: [
                {
                    title: t("courses.list.se102.title"),
                    code: "SE-102",
                    desc: t("courses.list.se102.desc"),
                    duration: "Trimester 1",
                    level: "Intermediate",
                    modules: 8,
                    labs: 15,
                    tags: ["Algorithms", "Data Structures", "Optimization"],
                },
                {
                    title: t("courses.list.db101.title"),
                    code: "DB-101",
                    desc: t("courses.list.db101.desc"),
                    duration: "Trimester 1",
                    level: "Intermediate",
                    modules: 7,
                    labs: 10,
                    tags: ["SQL", "Database Design", "Backend"],
                },
                {
                    title: t("courses.list.ui101.title"),
                    code: "UI-101",
                    desc: t("courses.list.ui101.desc"),
                    duration: "Trimester 2",
                    level: "Intermediate",
                    modules: 4,
                    labs: 8,
                    tags: ["Design", "Figma", "Prototyping"],
                },
                {
                    title: t("courses.list.ux101.title"),
                    code: "UX-101",
                    desc: t("courses.list.ux101.desc"),
                    duration: "Trimester 2",
                    level: "Intermediate",
                    modules: 6,
                    labs: 8,
                    tags: ["User Research", "Wireframing", "Testing"],
                },
                {
                    title: t("courses.list.nw201.title"),
                    code: "NW-201",
                    desc: t("courses.list.nw201.desc"),
                    duration: "Trimester 3",
                    level: "Intermediate",
                    modules: 7,
                    labs: 12,
                    tags: ["Networking", "Protocols", "Security"],
                },
            ]
        },
        {
            id: "year3",
            title: "Year 3",
            subtitle: "Innovation & Specialization",
            description: "Mastery and real-world application. Students tackle complex systems like embedded devices and launch entrepreneurial ventures.",
            color: "from-orange-500 to-red-600",
            courses: [
                {
                    title: t("courses.list.es201.title"),
                    code: "ES-201",
                    desc: t("courses.list.es201.desc"),
                    duration: "Trimester 1",
                    level: "Advanced",
                    modules: 10,
                    labs: 20,
                    tags: ["Embedded Systems", "C++", "Microcontrollers"],
                },
                {
                    title: t("courses.list.ee201.title"),
                    code: "EE-201",
                    desc: t("courses.list.ee201.desc"),
                    duration: "Trimester 2",
                    level: "Advanced",
                    modules: 8,
                    labs: 16,
                    tags: ["Circuits", "Electronics", "Physics"],
                },
                {
                    title: t("courses.list.bus101.title"),
                    code: "BUS-101",
                    desc: t("courses.list.bus101.desc"),
                    duration: "Full Year",
                    level: "Advanced",
                    modules: 4,
                    labs: 4,
                    tags: ["Business", "Management", "Strategy"],
                },
            ]
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-black min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-500/30">

            {/* Hero Section */}
            <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ transform: "scale(var(--hero-scale, 1))" }}
                >
                    <Image
                        src={Hero1Image}
                        alt="NGA Academics"
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

                <div className="relative z-10 h-full min-h-screen flex flex-col justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-20">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-blue-200 text-sm font-semibold mb-6 animate-fade-in-up uppercase tracking-widest backdrop-blur-md border border-white/10">
                            Academic Roadmap
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight text-white" data-aos="fade-up" data-aos-delay="100">
                            Your 3-Year Journey to <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-200">
                                Excellence
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
                            A structured, progressive curriculum designed to transform beginners into industry-ready engineers and innovators.
                        </p>
                    </div>
                </div>

                {/* Animated Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 z-20 h-16 md:h-24">
                    <svg
                        viewBox="0 0 1440 120"
                        className="w-full h-full fill-white dark:fill-black"
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

            {/* Main Content */}
            <div className="relative z-20 pb-40">
                {years.map((year, idx) => (
                    <div key={idx} className="relative">
                        {/* Visual Separator */}
                        {idx > 0 && (
                            <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 z-30">
                                <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        )}

                        <div
                            id={year.id}
                            className={`min-h-[80vh] border-t border-gray-200 dark:border-gray-800 ${idx % 2 === 0
                                ? "bg-white dark:bg-black"
                                : "bg-gray-100 dark:bg-gray-900"
                                }`}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                                <div className="flex flex-col lg:flex-row gap-16">

                                    {/* Sticky Sidebar */}
                                    <div className="lg:w-1/3">
                                        <div className="sticky top-32">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="text-6xl font-black text-gray-200 dark:text-gray-800 select-none">
                                                    0{idx + 1}
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
                                                    {year.title}
                                                </h2>
                                            </div>
                                            <h3 className="text-xl font-bold text-orange-500 mb-4 uppercase tracking-wide">
                                                {year.subtitle}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                                                {year.description}
                                            </p>
                                            <div className={`h-2 w-full rounded-full bg-gradient-to-r ${year.color} opacity-30`}>
                                                <div className={`h-full w-1/3 rounded-full bg-gradient-to-r ${year.color}`}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Course Lists (Grid with large cards) */}
                                    <div className="lg:w-2/3 space-y-8">
                                        {year.courses.map((course, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:shadow-2xl hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
                                                data-aos="fade-up"
                                                data-aos-delay={cIdx * 50}
                                            >
                                                <div className="flex flex-col md:flex-row gap-8">
                                                    <div className="flex-1 space-y-6">
                                                        <div className="flex items-start justify-between">
                                                            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/50">
                                                                {course.code}
                                                            </span>
                                                            <div className="flex gap-2">
                                                                {course.tags.slice(0, 2).map((tag, tIdx) => (
                                                                    <span key={tIdx} className="text-[10px] uppercase font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                                                {course.title}
                                                            </h3>
                                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                {course.desc}
                                                            </p>
                                                        </div>

                                                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                                <Clock className="w-4 h-4 text-orange-500" />
                                                                <span>{course.duration}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                                <BarChart className="w-4 h-4 text-green-500" />
                                                                <span>{course.level}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="md:w-48 flex-shrink-0 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 flex flex-col justify-center space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-gray-500">Modules</span>
                                                            <span className="text-lg font-bold text-gray-900 dark:text-white">{course.modules}</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
                                                            <div className={`bg-blue-500 h-1.5 rounded-full`} style={{ width: `${Math.min((course.modules / 12) * 100, 100)}%` }}></div>
                                                        </div>

                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-gray-500">Labs</span>
                                                            <span className="text-lg font-bold text-gray-900 dark:text-white">{course.labs}</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
                                                            <div className={`bg-orange-500 h-1.5 rounded-full`} style={{ width: `${Math.min((course.labs / 25) * 100, 100)}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer CTA */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">
                        {t("courses.cta.title")} <span className="text-orange-500">{t("courses.cta.highlight")}</span>
                    </h2>
                    <Link
                        href="/admissions"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg tracking-wide uppercase"
                    >
                        Apply Now <FiArrowUpRight />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AcademicsPage;
