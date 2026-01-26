"use client";

import React, { useState } from "react";
import Image from "next/image";
import Hero1Image from "../../assets/hero1.png";
import { Mail, MapPin, Phone, Send, ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const handleMapClick = () => {
        window.open(
            "https://www.google.com/maps?sca_esv=09d8ef1d6f832fe0&rlz=1C1FKPE_enRW1186RW1186&sxsrf=ANbL-n5VmjmQoEsDU_smOjn39hZR8sJZsw:1769432924084&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiIE5ldyBHZW5lcmF0aW9uIEFjYWRlbXkgbG9jYXRpb25zMgoQIRigARjDBBgKSPA7UM4IWPk5cAJ4AZABAJgBjQOgAbo2qgEGMi0xNC45uAEDyAEA-AEBmAIHoALhDMICChAAGLADGNYEGEfCAggQABgHGAoYHsICBhAAGAcYHsICCBAAGAcYCBgemAMAiAYBkAYIkgcJMi4wLjMuMS4xoAe-dbIHBzItMy4xLjG4B8QMwgcHMC4xLjMuM8gHPYAIAA&um=1&ie=UTF-8&fb=1&gl=rw&sa=X&geocode=KRPEsEwIp9wZMXw5cXTXhtXn&daddr=KG+28+Ave,+Kigali",
            "_blank"
        );
    };

    const scrollToContent = () => {
        const contentSection = document.getElementById('contact-content');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={Hero1Image}
                        alt="Contact Us"
                        fill
                        className="object-cover opacity-50 dark:opacity-30 scale-105"
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

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Get in Touch
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            We're here to help you start your journey with NGA. Reach out to us for any inquiries or support.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute bottom-10 cursor-pointer"
                        onClick={scrollToContent}
                    >
                        <ChevronDown className="w-10 h-10 text-white/50 hover:text-white transition-colors" />
                    </motion.div>
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

            {/* Content Section */}
            <section id="contact-content" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Main Content - Form */}
                    <div className="space-y-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
                        >
                            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                                Have a question? Fill out the form below.
                            </p>

                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-40 resize-none placeholder:text-gray-400"
                                        placeholder="Tell us a bit more about your inquiry..."
                                    ></textarea>
                                </div>

                                <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-blue-500/20 flex items-center justify-center gap-2 group">
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Sidebar / Contact Info & Map */}
                    <div className="space-y-8 lg:sticky lg:top-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-900 dark:bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden text-white"
                        >
                            <h3 className="text-2xl font-bold mb-6 relative z-10">Contact Information</h3>

                            <div className="space-y-6 relative z-10">
                                {/* Location */}
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer" onClick={handleMapClick}>
                                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Visit Us</h4>
                                        <p className="text-gray-400 text-sm">KG 28 Ave, Kigali, Rwanda</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <a href="mailto:admissions@nga.ac.rw" className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 bg-green-500/20 text-green-400 rounded-xl">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Us</h4>
                                        <p className="text-gray-400 text-sm">admissions@nga.ac.rw</p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a href="tel:+250791823651" className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Call Us</h4>
                                        <p className="text-gray-400 text-sm">+250 791 823 651</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group border border-gray-200 dark:border-gray-800"
                            onClick={handleMapClick}
                        >
                            {/* Map iframe */}
                            <div className="absolute inset-0 z-0 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.513474328822!2d30.10321791475586!3d-1.9474779985799335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a40401b977%3A0xc07474404066060!2sKigali!5e0!3m2!1sen!2srw!4v1634567890123!5m2!1sen!2srw"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>

                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl flex items-center justify-between border border-white/20">
                                    <span className="font-bold text-sm">View on Google Maps</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
