"use client";

import React from "react";
import Image from "next/image";
import Hero1Image from "../../assets/hero1.png";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={Hero1Image}
                        alt="Contact Us"
                        fill
                        className="object-cover opacity-60 dark:opacity-40"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light">
                        We'd love to hear from you. Get in touch with our team.
                    </p>
                </div>
            </div>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Visit Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Kigali, Rwanda<br />KG 549 St</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400">admissions@nga.ac.rw</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Call Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+250 788 000 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
