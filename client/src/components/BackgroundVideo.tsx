"use client";

import { useState, useEffect } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { usePathname } from "next/navigation";

const BackgroundVideo = () => {
    const pathname = usePathname();
    const slides = [
        { type: "video", src: "/videos/video1.mp4" },
        { type: "video", src: "/videos/video2.mp4" },
        { type: "video", src: "/videos/video3.mp4" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState(slides[0].src);
    const [nextVideoSrc, setNextVideoSrc] = useState<string | null>(null);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 20000); // Change video every 20 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        setNextVideoSrc(slides[currentSlide].src);
    }, [currentSlide, slides]);

    const isHome = pathname === "/";

    return (
        <div className={`fixed inset-0 w-full h-full -z-50 transition-opacity duration-500 ${isHome ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 w-full h-full bg-black">
                {!videoError && (
                    <>
                        <video
                            src={currentVideoSrc}
                            autoPlay
                            muted={isMuted}
                            loop
                            preload="auto"
                            onLoadedData={() => setVideoLoaded(true)}
                            onError={() => setVideoError(true)}
                            className="w-full h-full object-cover transition-opacity duration-1000"
                        />
                        {nextVideoSrc && (
                            <video
                                src={nextVideoSrc}
                                autoPlay
                                muted={isMuted}
                                loop
                                preload="auto"
                                onLoadedData={() => {
                                    setVideoLoaded(true);
                                    setCurrentVideoSrc(nextVideoSrc);
                                    setNextVideoSrc(null);
                                }}
                                onError={() => setVideoError(true)}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        )}

                        {/* Audio Control - Only visible on Home */}
                        {isHome && (
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="absolute top-24 right-8 z-50 p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-white hover:bg-white/20 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                                aria-label="Toggle mute"
                            >
                                {isMuted ? (
                                    <MdVolumeOff
                                        size={24}
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                ) : (
                                    <MdVolumeUp
                                        size={24}
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                )}
                            </button>
                        )}
                    </>
                )}
            </div>
            {/* Overlay Gradient for video readability - matches Home page original */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>
        </div>
    );
};

export default BackgroundVideo;
