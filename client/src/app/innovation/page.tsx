"use client";

import React from "react";
import Image from "next/image";
import Hero1Image from "../../assets/hero1.png";

const InnovationPage = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100 font-sans">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={Hero1Image}
                        alt="Innovation at NGA"
                        fill
                        className="object-cover opacity-60 dark:opacity-40"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Innovation Hub
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light">
                        Where ideas become reality. Building the future of technology in Rwanda.
                    </p>
                </div>
            </div>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Student Projects</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                        Our innovation hub provides resources and mentorship for students to launch their own startups and build impactful solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl mb-6"></div>
                            <h3 className="text-xl font-bold mb-2">Innovation Project {i}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Using AI to solve local community challenges in agriculture and healthcare.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default InnovationPage;
