"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero1Image from "../../assets/hero1.png";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ChevronDown, Award, Cpu } from "lucide-react";
import AdsToRegister from "@/components/AdsToRegister";

const AdmissionsPage = () => {
    const scrollToContent = () => {
        const contentSection = document.getElementById('admissions-content');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={Hero1Image}
                        alt="Admissions"
                        fill
                        className="object-cover opacity-40 dark:opacity-20 scale-105"
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

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold tracking-wide mb-4 backdrop-blur-md">
                            2026 INTAKE OPEN
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight max-w-5xl bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent"
                    >
                        Join the Future of Innovation
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light mb-10 leading-relaxed"
                    >
                        New Generation Academy searches for the brightest minds to shape the next generation of technology leaders.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button
                            onClick={scrollToContent}
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2"
                        >
                            Learn More
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute bottom-10 cursor-pointer left-auto"
                        onClick={scrollToContent}
                    >
                        <ChevronDown className="w-10 h-10 text-white/50 hover:text-white transition-colors" />
                    </motion.div>
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

            {/* Content Section */}
            <section id="admissions-content" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Main Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white relative inline-block">
                                Join the NGA Family
                                <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-blue-600 rounded-full"></div>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Welcome to <strong className="text-blue-600 dark:text-blue-400">New Generation Academy (NGA)</strong>! We are more than just a school; we are a vibrant community dedicated to nurturing the next wave of tech innovators. We are on the lookout for curious, passionate minds ready to dive deep into the world of software engineering and shape the future.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Each year, we open our doors to students who light up when solving complex problems in <span className="font-semibold text-gray-900 dark:text-white">Maths and Physics</span>. You don't need to be a coding wizard just yet—our selection process is designed to spot your potential, your logic, and your spark for learning.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800/50"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-xl">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold pt-1">Talent First</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We believe in opening doors for those with drive and aptitude. At NGA, your background matters less than your passion. If you have the analytical mindset and the hunger to create, we want to help you build the skills to change the world.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-3xl border border-purple-100 dark:border-purple-800/50"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-xl">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold pt-1">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We aim to build the next generation of innovators who will drive Rwanda's technological growth, fostering a community of problem-solvers and creative thinkers.
                            </p>
                        </motion.div>
                    </div>

                    {/* Sidebar / Secondary Content */}
                    <div className="space-y-8 lg:sticky lg:top-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <Cpu className="w-40 h-40" />
                            </div>

                            <h3 className="text-2xl font-bold mb-6 relative z-10">The 3-Year Journey</h3>
                            <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                                Upon admission, students embark on a three-year intensive program designed to equip them with cutting-edge programming skills.
                            </p>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                    <span className="font-medium">Software Engineering</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span className="font-medium">Cybersecurity</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    <span className="font-medium">Artificial Intelligence</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                    <span className="font-medium">Embedded Systems</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8"
                        >
                            <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                                If you meet the criteria and are ready for the challenge, contact us for more information on the next intake window.
                            </p>
                            <Link href="/contact" className="block w-full text-center py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                                Contact Admissions
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ads to Register Section */}
            <section>
                <AdsToRegister />
            </section>
        </div>
    );
};

export default AdmissionsPage;
