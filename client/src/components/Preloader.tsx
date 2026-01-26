"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Hero1Image from "../assets/hero1.png";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Initial load
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // 2.5s delay for better branding visibility

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Route change simulation - shorter duration
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900 overflow-hidden"
                >
                    {/* Background Hero Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={Hero1Image}
                            alt="Background"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/80 to-gray-950"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="relative w-32 h-32 mb-6"
                        >
                            <Image
                                src="/apple-touch-icon.png"
                                alt="NGA Logo"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </motion.div>

                        {/* Text Animation */}
                        <div className="text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2"
                            >
                                New Generation Academy
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="h-1 bg-blue-600 rounded-full mx-auto mb-6"
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-sm text-blue-400 font-medium tracking-[0.2em] uppercase animate-pulse"
                            >
                                Loading...
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
