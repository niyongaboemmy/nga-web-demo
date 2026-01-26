"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowRight, Code, Cpu, Zap, Sparkles } from "lucide-react";
import { useState } from "react";

function Programs() {
  const { t } = useTranslation("common");
  const [hoveredId, setHoveredId] = useState(null);

  const programs = [
    {
      id: 1,
      number: "01",
      icon: Code,
      colorClass: "from-primary-400 via-primary-400 to-blue-500",
      lightGradientFrom: "from-primary-50",
      lightGradientTo: "to-blue-100",
      darkGradientFrom: "dark:from-primary-950",
      darkGradientTo: "dark:to-blue-900",
      ringColor:
        "ring-blue-200/50 dark:ring-blue-800/50 hover:ring-blue-400/50 dark:hover:ring-blue-600/50",
      buttonGradient:
        "from-primary-900 via-primary-900 to-primary-900 dark:from-primary-700 dark:via-primary-700 dark:to-primary-700 hover:from-primary-950 hover:via-primary-950 hover:to-primary-950 dark:hover:from-primary-800 dark:hover:via-primary-800 dark:hover:to-primary-800",
      lightGlowColor: "bg-gradient-to-br from-primary-200/30 to-primary-200/30",
      darkGlowColor:
        "dark:bg-gradient-to-br dark:from-primary-600/20 dark:to-primary-600/20",
      accentColor: "from-primary-500 to-primary-500",
      ringAccent: "ring-blue-400/60 dark:ring-blue-600/60",
      imageUrl: "https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif",
      alt: "Software Development",
      titleKey: "programs.software.title",
      descKey: "programs.software.description",
      particleColor: "#00a8ff",
      darkBg:
        "bg-gradient-to-br from-primary-50 to-primary-50 dark:from-primary-950/50 dark:to-blue-900/50",
    },
    {
      id: 2,
      number: "02",
      icon: Cpu,
      colorClass: "from-orange-400 via-orange-300 to-yellow-400",
      lightGradientFrom: "from-orange-50",
      lightGradientTo: "to-orange-100",
      darkGradientFrom: "dark:from-orange-950",
      darkGradientTo: "dark:to-orange-900",
      ringColor:
        "ring-orange-200/50 dark:ring-orange-800/50 hover:ring-orange-400/50 dark:hover:ring-orange-600/50",
      buttonGradient:
        "from-orange-600 via-orange-600 to-yellow-600 dark:from-orange-700 dark:via-orange-700 dark:to-yellow-700 hover:from-orange-700 hover:via-orange-700 hover:to-yellow-700 dark:hover:from-orange-800 dark:hover:via-orange-800 dark:hover:to-yellow-800",
      lightGlowColor: "bg-gradient-to-br from-orange-200/30 to-yellow-200/30",
      darkGlowColor:
        "dark:bg-gradient-to-br dark:from-orange-600/20 dark:to-yellow-600/20",
      accentColor: "from-orange-500 to-yellow-500",
      ringAccent: "ring-orange-400/60 dark:ring-orange-600/60",
      imageUrl:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE0dTh3Y2w0cjZuY2R6NmZmd213N2dpbGVwN201aHUzaGhmb3oyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U1Bd0YJSjuxLzmBNQX/giphy.gif",
      alt: "Embedded Systems",
      titleKey: "programs.embedded.title",
      descKey: "programs.embedded.description",
      particleColor: "#f97316",
      darkBg:
        "bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/50 dark:to-orange-900/50",
    },
    {
      id: 3,
      number: "03",
      icon: Zap,
      colorClass: "from-primary-400 via-primary-300 to-primary-500",
      lightGradientFrom: "from-primary-50",
      lightGradientTo: "to-primary-100",
      darkGradientFrom: "dark:from-primary-950",
      darkGradientTo: "dark:to-primary-900",
      ringColor:
        "ring-primary-200/50 dark:ring-primary-800/50 hover:ring-primary-400/50 dark:hover:ring-primary-600/50",
      buttonGradient:
        "from-primary-600 via-primary-600 to-primary-700 dark:from-primary-700 dark:via-primary-700 dark:to-primary-800 hover:from-primary-700 hover:via-primary-700 hover:to-primary-800 dark:hover:from-primary-800 dark:hover:via-primary-800 dark:hover:to-primary-900",
      lightGlowColor: "bg-gradient-to-br from-primary-200/30 to-primary-200/30",
      darkGlowColor:
        "dark:bg-gradient-to-br dark:from-primary-600/20 dark:to-primary-600/20",
      accentColor: "from-primary-500 to-primary-600",
      ringAccent: "ring-primary-400/60 dark:ring-primary-600/60",
      imageUrl:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Y1dmo5Z3pvMHFvcTNqeWl5bWU5ajVhNXR6NXBpdzZ1aDZuc3Z5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ajOEvSqe0KfXE8UGTA/giphy.gif",
      alt: "Robotics",
      titleKey: "programs.robotics.title",
      descKey: "programs.robotics.description",
      particleColor: "#6366f1",
      darkBg:
        "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/50 dark:to-primary-900/50",
    },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-950 overflow-hidden">
      {/* Light Mode Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="w-full py-24 sm:py-32">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8 group">
              {/* <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> */}
              <span className="relative px-6 py-3 bg-white dark:bg-gray-900 text-transparent bg-clip-text flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-5 h-5 text-primary-600 dark:text-orange-400" />
                <span className="bg-gradient-to-r from-primary-600 to-primary-600 dark:from-primary-600 dark:to-primary-600 bg-clip-text text-transparent">
                  Excellence In Education
                </span>
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-8  bg-clip-text text-black dark:text-white leading-tight">
              {t("programs.title") || "Transform Your Future"}
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {t("programs.subtitle") ||
                "Master cutting-edge technologies through our immersive learning experiences designed for the future"}
            </p>

            {/* Decorative line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary-500 rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-primary-500 via-orange-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="space-y-16 sm:space-y-24">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isEven = index % 2 === 0;
              const isHovered = hoveredId === program.id;

              return (
                <div
                  key={program.id}
                  className="group"
                  onMouseEnter={() => setHoveredId(program.id as any)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Card Container */}
                  <div
                    className={`relative overflow-hidden rounded-3xl sm:rounded-[3rem] transition-all duration-500 p-8 sm:p-12 lg:p-16 backdrop-blur-md ${program.darkBg
                      } border-gray-200/50 dark:border-gray-800/50 ${isHovered
                        ? "border-gray-300/80 dark:border-gray-700/80"
                        : ""
                      }`}
                  >
                    {/* Enhanced floating background elements */}
                    <div
                      className={`absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 ${program.lightGlowColor
                        } ${program.darkGlowColor} rounded-full blur-3xl ${isHovered
                          ? "scale-125 opacity-100"
                          : "scale-100 opacity-60"
                        } transition-all duration-700`}
                    ></div>
                    <div
                      className={`absolute -bottom-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 ${program.lightGlowColor
                        } ${program.darkGlowColor
                        } rounded-full blur-3xl opacity-50 ${isHovered ? "scale-110" : "scale-90"
                        } transition-all duration-700`}
                    ></div>

                    {/* Animated border gradient */}
                    <div
                      className="absolute inset-0 rounded-3xl sm:rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, transparent, ${program.particleColor}15, transparent)`,
                        pointerEvents: "none",
                      }}
                    ></div>

                    {/* Premium Number Badge */}
                    <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-20">
                      <div
                        className={`relative w-16 h-16 sm:w-28 sm:h-28 rounded-3xl sm:rounded-[2rem] shadow-xl ${isHovered
                            ? "scale-100 rotate-12"
                            : "scale-100 rotate-3"
                          } transition-all duration-500 bg-primary-700`}
                      // style={{
                      //   background: `linear-gradient(135deg, ${program.particleColor}, ${program.particleColor}dd)`,
                      // }}
                      >
                        <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30 rounded-3xl sm:rounded-[2rem]"></div>
                        <div className="flex items-center justify-center h-full">
                          <span className="text-white font-bold text-xl sm:text-4xl drop-shadow-lg">
                            {program.number}
                          </span>
                        </div>
                        <div className="absolute inset-0 rounded-3xl sm:rounded-[2rem] ring-2 ring-white/50 dark:ring-white/70"></div>
                      </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      {/* Text Content */}
                      <div
                        className={`flex flex-col justify-center ${!isEven && "lg:order-2"
                          }`}
                      >
                        {/* Icon and Label */}
                        <div className="flex items-center gap-4 mb-8">
                          <div
                            className={`p-4 bg-gradient-to-br ${program.accentColor
                              } rounded-2xl shadow-lg ${isHovered
                                ? "scale-110 rotate-6"
                                : "scale-100 rotate-0"
                              } transition-all duration-500`}
                          >
                            <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                              Program
                            </p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                              0{program.id}
                            </p>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-primary-300 dark:to-primary-300 bg-clip-text text-transparent leading-tight">
                          {t(program.titleKey) || `Program ${program.id}`}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-12 leading-relaxed font-normal max-w-xl">
                          {t(program.descKey) ||
                            "Discover our comprehensive learning program"}
                        </p>

                        {/* Enhanced Button */}
                        <button
                          className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${program.buttonGradient
                            } text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform ${isHovered ? "scale-110 shadow-lg" : "scale-100"
                            } w-fit group/btn text-sm uppercase tracking-wider`}
                        >
                          {t("programs.readMore") || "Learn More"}
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </button>

                        {/* Progress indicator */}
                        <div className="mt-12 flex items-center gap-3">
                          <div className="h-1 bg-gradient-to-r from-primary-300/50 dark:from-primary-600/50 to-transparent rounded-full flex-1"></div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                            0{program.id}/03
                          </span>
                        </div>
                      </div>

                      {/* Premium Image Section */}
                      <div
                        className={`flex justify-center ${!isEven && "lg:order-1"
                          }`}
                      >
                        <div className="relative w-full max-w-md">
                          {/* Multiple glow layers */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${program.accentColor
                              } opacity-0 ${isHovered ? "opacity-30" : ""
                              } rounded-[2rem] blur-2xl scale-110 transition-opacity duration-500`}
                          ></div>
                          <div
                            className={`absolute inset-0 ${program.lightGlowColor
                              } ${program.darkGlowColor
                              } rounded-[2rem] blur-3xl scale-125 ${isHovered ? "scale-150" : ""
                              } transition-transform duration-700`}
                          ></div>

                          {/* Image Container */}
                          <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden transition-all duration-500 border-white dark:border-gray-700/50 hover:border-white/80 dark:hover:border-gray-600/80">
                            <div
                              className={`absolute inset-0 rounded-[2rem] ${isHovered ? "opacity-100" : "opacity-10"
                                } transition-opacity duration-500`}
                              style={{
                                background: `linear-gradient(135deg, ${program.particleColor}40, ${program.particleColor}10)`,
                              }}
                            ></div>

                            <Image
                              src={program.imageUrl}
                              alt={program.alt}
                              width={500}
                              height={500}
                              className={`w-full h-[400px] object-cover rounded-2xl sm:rounded-[2rem] ${isHovered
                                  ? "scale-125 brightness-110"
                                  : "scale-100 brightness-100"
                                } transition-all duration-700 filter`}
                              priority
                            />

                            {/* Overlay border */}
                            <div
                              className={`absolute inset-0 rounded-[2rem] ring-2 ${program.ringAccent} pointer-events-none`}
                            ></div>
                          </div>

                          {/* Floating accent ornaments */}
                          <div
                            className={`absolute -bottom-6 -right-6 w-28 h-28 rounded-full ${isHovered
                                ? "scale-125 opacity-100"
                                : "scale-90 opacity-40"
                              } transition-all duration-500 blur-2xl`}
                            style={{
                              background: `linear-gradient(135deg, ${program.particleColor}, ${program.particleColor}66)`,
                            }}
                          ></div>
                          <div
                            className={`absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-30 ${isHovered ? "scale-110" : "scale-90"
                              } transition-all duration-500 blur-xl`}
                            style={{
                              background: `linear-gradient(135deg, ${program.particleColor}88, transparent)`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-24 text-center">
            <div className="inline-block">
              <div className="h-1 w-32 bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 rounded-full mx-auto"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm uppercase tracking-widest font-semibold">
                Ready to begin your journey?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Programs;
