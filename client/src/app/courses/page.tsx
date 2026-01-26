"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Hero1Image from "../../assets/hero1.png";
import CourseModal from "../../components/CourseModal";

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

const CoursesPage = () => {
    const { t } = useTranslation("common");
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (course: Course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Optional: clear selected course after animation if needed, but keeping it usually looks better during exit
    };

    const categories = [
        {
            id: "software",
            title: t("courses.categories.software.title"),
            description: t("courses.categories.software.description"),
            color: "from-blue-600 to-indigo-600",
            courses: [
                {
                    title: t("courses.list.se101.title"),
                    code: "SE-101",
                    desc: t("courses.list.se101.desc"),
                    duration: "12 Weeks",
                    level: "Beginner",
                    modules: 6,
                    labs: 12,
                    tags: ["Development", "Fundamentals", "Logic"],
                },
                {
                    title: t("courses.list.se102.title"),
                    code: "SE-102",
                    desc: t("courses.list.se102.desc"),
                    duration: "14 Weeks",
                    level: "Intermediate",
                    modules: 8,
                    labs: 15,
                    tags: ["Algorithms", "Data Structures", "Optimization"],
                },
                {
                    title: t("courses.list.cs101.title"),
                    code: "CS-101",
                    desc: t("courses.list.cs101.desc"),
                    duration: "10 Weeks",
                    level: "Beginner",
                    modules: 5,
                    labs: 8,
                    tags: ["Computer Science", "Theory", "Hardware"],
                },
                {
                    title: t("courses.list.db101.title"),
                    code: "DB-101",
                    desc: t("courses.list.db101.desc"),
                    duration: "12 Weeks",
                    level: "Intermediate",
                    modules: 7,
                    labs: 10,
                    tags: ["SQL", "Database Design", "Backend"],
                },
                {
                    title: t("courses.list.ui101.title"),
                    code: "UI-101",
                    desc: t("courses.list.ui101.desc"),
                    duration: "8 Weeks",
                    level: "Beginner",
                    modules: 4,
                    labs: 8,
                    tags: ["Design", "Figma", "Prototyping"],
                },
                {
                    title: t("courses.list.ux101.title"),
                    code: "UX-101",
                    desc: t("courses.list.ux101.desc"),
                    duration: "10 Weeks",
                    level: "Intermediate",
                    modules: 6,
                    labs: 8,
                    tags: ["User Research", "Wireframing", "Testing"],
                },
            ]
        },
        {
            id: "hardware",
            title: t("courses.categories.hardware.title"),
            description: t("courses.categories.hardware.description"),
            color: "from-orange-500 to-red-600",
            courses: [
                {
                    title: t("courses.list.es201.title"),
                    code: "ES-201",
                    desc: t("courses.list.es201.desc"),
                    duration: "16 Weeks",
                    level: "Advanced",
                    modules: 10,
                    labs: 20,
                    tags: ["Embedded Systems", "C++", "Microcontrollers"],
                },
                {
                    title: t("courses.list.ee201.title"),
                    code: "EE-201",
                    desc: t("courses.list.ee201.desc"),
                    duration: "14 Weeks",
                    level: "Intermediate",
                    modules: 8,
                    labs: 16,
                    tags: ["Circuits", "Electronics", "Physics"],
                },
                {
                    title: t("courses.list.nw201.title"),
                    code: "NW-201",
                    desc: t("courses.list.nw201.desc"),
                    duration: "12 Weeks",
                    level: "Intermediate",
                    modules: 7,
                    labs: 12,
                    tags: ["Networking", "Protocols", "Security"],
                },
            ]
        },
        {
            id: "core",
            title: t("courses.categories.core.title"),
            description: t("courses.categories.core.description"),
            color: "from-emerald-500 to-teal-600",
            courses: [
                {
                    title: t("courses.list.bus101.title"),
                    code: "BUS-101",
                    desc: t("courses.list.bus101.desc"),
                    duration: "8 Weeks",
                    level: "Beginner",
                    modules: 4,
                    labs: 4,
                    tags: ["Business", "Management", "Strategy"],
                },
                {
                    title: t("courses.list.eng101.title"),
                    code: "ENG-101",
                    desc: t("courses.list.eng101.desc"),
                    duration: "8 Weeks",
                    level: "Beginner",
                    modules: 6,
                    labs: 8,
                    tags: ["Communication", "Writing", "Professional"],
                },
                {
                    title: t("courses.list.mat101.title"),
                    code: "MAT-101",
                    desc: t("courses.list.mat101.desc"),
                    duration: "12 Weeks",
                    level: "Intermediate",
                    modules: 8,
                    labs: 16,
                    tags: ["Mathematics", "Calculus", "Logic"],
                },
                {
                    title: t("courses.list.eth101.title"),
                    code: "ETH-101",
                    desc: t("courses.list.eth101.desc"),
                    duration: "6 Weeks",
                    level: "Beginner",
                    modules: 3,
                    labs: 2,
                    tags: ["Ethics", "Philosophy", "Technology"],
                },
                {
                    title: t("courses.list.lan101.title"),
                    code: "LAN-101",
                    desc: t("courses.list.lan101.desc"),
                    duration: "10 Weeks",
                    level: "Beginner",
                    modules: 5,
                    labs: 10,
                    tags: ["Languages", "Culture", "Communication"],
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
                        alt="NGA Courses"
                        fill
                        className="object-cover opacity-60 dark:opacity-40"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>
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

                <div className="relative z-10 h-screen flex flex-col justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-blue-200 text-sm font-semibold mb-6 animate-fade-in-up uppercase tracking-widest backdrop-blur-md border border-white/10">
                            {t("courses.hero.badge")}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight text-white" data-aos="fade-up" data-aos-delay="100">
                            {t("courses.hero.title")} <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-200">
                                {t("courses.hero.highlight")}
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
                            {t("courses.hero.description")}
                        </p>
                    </div>
                </div>

                {/* Animated Scroll Indicator - Consistent with About Us/Home */}
                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce cursor-pointer"
                    onClick={() => {
                        const firstCategory = document.getElementById("software");
                        firstCategory?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <span className="text-white/60 text-xs font-medium tracking-widest uppercase">{t("courses.hero.explore")}</span>
                    <ArrowDown className="w-5 h-5 text-white/60" />
                </div>
            </div>

            {/* Main Content - Sticky Layout */}
            <div className="relative z-20 pb-40">
                {categories.map((category, idx) => (
                    <div key={idx} id={category.id} className="min-h-screen border-t border-gray-200 dark:border-gray-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                            <div className="flex flex-col lg:flex-row gap-20">

                                {/* Sticky Sidebar */}
                                <div className="lg:w-1/3">
                                    <div className="sticky top-32">
                                        <span className="text-9xl font-black text-gray-100 dark:text-gray-900 absolute -top-20 -left-10 -z-10 select-none">
                                            0{idx + 1}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                            {category.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-sm">
                                            {category.description}
                                        </p>
                                        <div className={`h-2 w-full rounded-full bg-gradient-to-r ${category.color} opacity-20`}>
                                            <div className={`h-full w-1/3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bento Grid */}
                                <div className="lg:w-2/3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {category.courses.map((course, cIdx) => {
                                            // Make the first card span 2 columns (Feature card)
                                            const isFeature = cIdx === 0;
                                            return (
                                                <div
                                                    key={cIdx}
                                                    onClick={() => openModal(course)}
                                                    className={`group relative bg-white dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-500 cursor-pointer ${isFeature ? 'md:col-span-2 bg-gray-50 dark:bg-gray-800/20' : ''}`}
                                                    data-aos="fade-up"
                                                    data-aos-delay={cIdx * 50}
                                                >
                                                    <div className={`absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                                        <FiArrowUpRight className="text-2xl text-orange-500" />
                                                    </div>

                                                    <div className="mb-8">
                                                        <span className="text-xs font-mono text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">
                                                            {course.code}
                                                        </span>
                                                    </div>

                                                    <h3 className={`${isFeature ? 'text-3xl' : 'text-xl'} font-bold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors`}>
                                                        {course.title}
                                                    </h3>

                                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                        {course.desc}
                                                    </p>

                                                    {/* Decorative Corner */}
                                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-700"></div>
                                                </div>
                                            );
                                        })}
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
                        href="/register"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg tracking-wide uppercase"
                    >
                        {t("courses.cta.button")} <FiArrowUpRight />
                    </Link>
                </div>
            </section>

            <CourseModal
                isOpen={isModalOpen}
                onClose={closeModal}
                course={selectedCourse}
            />
        </div>
    );
};

export default CoursesPage;
