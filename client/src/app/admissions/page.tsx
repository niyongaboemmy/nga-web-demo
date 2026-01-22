"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero1Image from "../../assets/hero1.png";

const AdmissionsPage = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={Hero1Image}
                        alt="Admissions"
                        fill
                        className="object-cover opacity-60 dark:opacity-40"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Admissions
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light">
                        Join the next cohort of changemakers. Your journey starts here.
                    </p>
                </div>
            </div>

            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 border border-gray-200 dark:border-gray-800 shadow-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">How to Apply</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Online Application</h3>
                                <p className="text-gray-600 dark:text-gray-400">Fill out our comprehensive online application form telling us about your background and motivation.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                                <p className="text-gray-600 dark:text-gray-400">Take a cognitive and logic test. No prior coding experience is required.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Interview</h3>
                                <p className="text-gray-600 dark:text-gray-400">Meet with our admissions team for a culture-fit interview.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-lg shadow-orange-500/30">
                            Apply Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPage;
