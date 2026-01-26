"use client";

import React from "react";
import Image from "next/image";
import Hero1Image from "../../assets/hero1.png";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users, ArrowRight } from "lucide-react";

const InnovationPage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={Hero1Image}
                        alt="Innovation at NGA"
                        fill
                        className="object-cover opacity-40 dark:opacity-20 scale-105"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-900/60 to-gray-900/90"></div>

                {/* Floating Circles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-20 w-8 h-8 bg-purple-500/10 rounded-full animate-float"></div>
                    <div className="absolute top-1/2 right-16 w-5 h-5 bg-blue-500/10 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-orange-500/10 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-6"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold tracking-wide backdrop-blur-md">
                            NGA INNOVATION HUB
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight max-w-5xl bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent"
                    >
                        Where Ideas Take Flight
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10"
                    >
                        We provide the ecosystem, mentorship, and resources for students to turn ambitious concepts into reality.
                    </motion.p>
                </div>

                {/* Animated Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 z-20 h-16 md:h-24">
                    <svg
                        viewBox="0 0 1440 120"
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

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Student Projects</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Our innovation hub provides resources and mentorship for students to launch their own startups and build impactful solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "AgriTech AI", desc: "Using computer vision to detect crop diseases early.", icon: <Lightbulb className="w-6 h-6 text-yellow-500" /> },
                        { title: "Smart Health", desc: "Telemedicine platform for rural communities.", icon: <Users className="w-6 h-6 text-blue-500" /> },
                        { title: "EduConnect", desc: "Gamified learning for primary school students.", icon: <Rocket className="w-6 h-6 text-purple-500" /> }
                    ].map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300 shadow-lg group"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700"></div>
                                <div className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-950 rounded-full shadow-sm">
                                    {project.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                {project.desc}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 gap-2 cursor-pointer">
                                Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default InnovationPage;
