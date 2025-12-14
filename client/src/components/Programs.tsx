"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function Programs() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
        <section className="w-full py-16">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("programs.title")}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-500">
                {t("programs.subtitle")}
              </p>
            </div>
            <div className="w-full px-3 py-8 md:p-8 md:px-3 mt-8">
              <div className="relative">
                <div className="hidden sm:block absolute left-0 sm:-left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-500 via-primary-500 to-primary-500 rounded-full"></div>
                <div className="space-y-8 md:space-y-6 sm:pl-5">
                  <div className="flex items-start">
                    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 min-h-[400px] rounded-[2.5rem] hover:-translate-y-3 ring-primary-200/50 hover:ring-primary-400/50 transition-all duration-500 p-10 w-full backdrop-blur-sm">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-300/30 rounded-full blur-2xl"></div>
                      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
                        <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
                          <div className="inline-block px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-full mb-4">
                            01
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {t("programs.software.title")}
                          </h3>
                          <p className="text-gray-700/70 dark:text-gray-300/60 mb-8 leading-relaxed text-base">
                            {t("programs.software.description")}
                          </p>
                          <button className="px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full hover transition-all duration-300 transform hover:scale-105">
                            {t("programs.readMore")}
                          </button>
                        </div>
                        <div className="lg:ml-8">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary-400/20 rounded-3xl blur-lg scale-110"></div>
                            <Image
                              src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif"
                              alt="Software Development Animation"
                              width={320}
                              height={320}
                              className="relative w-80 h-80 rounded-3xl object-cover ring-4 ring-primary-500 dark:ring-primary-950"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 min-h-[400px] rounded-[2.5rem] hover:-translate-y-3 ring-green-200/50 hover:ring-green-400/50 transition-all duration-500 p-10 w-full backdrop-blur-sm">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-300/30 rounded-full blur-2xl"></div>
                      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
                        <div className="lg:mr-8">
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-400/20 rounded-3xl blur-lg scale-110"></div>
                            <Image
                              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE0dTh3Y2w0cjZuY2R6NmZmd213N2dpbGVwN201aHUzaGhmb3oyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U1Bd0YJSjuxLzmBNQX/giphy.gif"
                              alt="Embedded Systems Animation"
                              width={320}
                              height={320}
                              className="relative w-80 h-80 rounded-3xl object-cover ring-4 ring-green-500/80 dark:ring-green-700"
                            />
                          </div>
                        </div>
                        <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
                          <div className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full mb-4">
                            02
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {t("programs.embedded.title")}
                          </h3>
                          <p className="text-gray-700/70 dark:text-gray-300/60 mb-8 leading-relaxed text-base">
                            {t("programs.embedded.description")}
                          </p>
                          <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full hover transition-all duration-300 transform hover:scale-105">
                            {t("programs.readMore")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 min-h-[400px] rounded-[2.5rem] hover:-translate-y-3 ring-orange-200/50 hover:ring-orange-400/50 transition-all duration-500 p-10 w-full backdrop-blur-sm">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-300/30 rounded-full blur-2xl"></div>
                      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
                        <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
                          <div className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">
                            03
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {t("programs.robotics.title")}
                          </h3>
                          <p className="text-gray-700/70 dark:text-gray-300/60 mb-8 leading-relaxed text-base">
                            {t("programs.robotics.description")}
                          </p>
                          <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-full hover transition-all duration-300 transform hover:scale-105">
                            {t("programs.readMore")}
                          </button>
                        </div>
                        <div className="lg:ml-8">
                          <div className="relative">
                            <div className="absolute inset-0 bg-orange-400/20 rounded-3xl blur-lg scale-110"></div>
                            <Image
                              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Y1dmo5Z3pvMHFvcTNqeWl5bWU5ajVhNXR6NXBpdzZ1aDZuc3Z5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ajOEvSqe0KfXE8UGTA/giphy.gif"
                              alt="Robotics Animation"
                              width={320}
                              height={320}
                              className="relative w-80 h-80 object-cover rounded-3xl ring-4 ring-orange-300 dark:ring-orange-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Programs;
