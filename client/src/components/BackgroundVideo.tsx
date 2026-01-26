"use client";

import { useState, useEffect, useRef } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { usePathname } from "next/navigation";

const BackgroundVideo = () => {
    const pathname = usePathname();
    const slides = [
        { type: "video", src: "/videos/video1.mp4" },
        { type: "video", src: "/videos/video2.mp4" },
        { type: "video", src: "/videos/video3.mp4" },
    ];

    const [isMuted, setIsMuted] = useState(true);
    const [activePlayer, setActivePlayer] = useState<0 | 1>(0);
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
    const [sources, setSources] = useState<[string, string]>([slides[0].src, slides[1].src]);
    const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

    const isHome = pathname === "/";

    useEffect(() => {
        // Initial play
        const video = videoRefs[0].current;
        if (video) {
            video.play().catch(() => {
                // Autoplay policy might block unmuted, but we start muted
                console.log("Autoplay blocked or failed");
            });
        }
    }, []);

    const handleVideoEnded = () => {
        const nextPlayer = activePlayer === 0 ? 1 : 0;
        const nextSlideGlobalIdx = (currentSlideIdx + 1) % slides.length;
        const futureSlideGlobalIdx = (currentSlideIdx + 2) % slides.length;

        // Start the next video
        const nextVideo = videoRefs[nextPlayer].current;
        if (nextVideo) {
            nextVideo.currentTime = 0;
            nextVideo.play().catch(e => console.error("Play failed", e));
        }

        // Switch active player
        setActivePlayer(nextPlayer);
        setCurrentSlideIdx(nextSlideGlobalIdx);

        // Prepare the PREVIOUS player (now inactive) for the FUTURE video
        // We defer this slightly to ensure smooth transition prevents glitching
        setTimeout(() => {
            setSources(prev => {
                const newSources = [...prev] as [string, string];
                newSources[activePlayer] = slides[futureSlideGlobalIdx].src;
                return newSources;
            });
        }, 1000);
    };

    const handleError = (playerIdx: number) => {
        // If the active video fails, skip to next immediately
        if (playerIdx === activePlayer) {
            console.warn("Video error, skipping slide");
            handleVideoEnded();
        }
    };

    return (
        <div className={`fixed inset-0 w-full h-full -z-50 transition-opacity duration-500 ${isHome ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 w-full h-full bg-black">
                {[0, 1].map((idx) => (
                    <video
                        key={idx}
                        ref={videoRefs[idx]}
                        src={sources[idx]}
                        muted={isMuted}
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activePlayer === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        onEnded={handleVideoEnded}
                        onError={() => handleError(idx)}
                        onLoadedData={() => {
                            // If this is the active player and it just loaded (e.g. after recovery), ensure it plays
                            if (activePlayer === idx && videoRefs[idx].current?.paused) {
                                videoRefs[idx].current?.play().catch(() => { });
                            }
                        }}
                    />
                ))}

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
            </div>
            {/* Overlay Gradient for video readability - matches Home page original */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>
        </div>
    );
};

export default BackgroundVideo;
