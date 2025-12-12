"use client";

import React from "react";
import { useTranslation } from "react-i18next";

function Programs() {
  const { t } = useTranslation("common");
  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("programs.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("programs.subtitle")}
            </p>
          </div>
          <div className="w-full px-3 py-8 md:p-8 mt-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="space-y-8 md:space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg absolute top-4 left-4 sm:relative sm:top-auto sm:left-auto z-10 shadow-lg">
                    01
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-white dark:bg-gray-800 h-full rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 ring-0 hover:ring-4 hover:ring-blue-500/20 transition-all duration-300 p-6 text-center w-full sm:max-w-sm sm:mx-auto">
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-300/30 rounded-full"></div>
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      {t("programs.nursery.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {t("programs.nursery.description")}
                    </p>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary-900 to-primary-900 hover:from-primary-900 hover:to-primary-900 text-white rounded-full shadow-sm hover:shadow-md transition">
                      {t("programs.readMore")}
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg absolute top-4 left-4 sm:relative sm:top-auto sm:left-auto z-10 shadow-lg">
                    02
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-white dark:bg-gray-800 h-full rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 ring-0 hover:ring-4 hover:ring-green-500/20 transition-all duration-300 p-6 text-center w-full sm:max-w-sm sm:mx-auto">
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-300/30 rounded-full"></div>
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      Primary Program
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our primary section follows the Cambridge international
                      program, emphasizing math, languages, coding, and
                      robotics.
                    </p>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary-900 to-primary-900 hover:from-primary-900 hover:to-primary-900 text-white rounded-full shadow-sm hover:shadow-md transition">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg absolute top-4 left-4 sm:relative sm:top-auto sm:left-auto z-10 shadow-lg">
                    03
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-white dark:bg-gray-800 h-full rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 ring-0 hover:ring-4 hover:ring-purple-500/20 transition-all duration-300 p-6 text-center w-full sm:max-w-sm sm:mx-auto">
                    <div className="absolute -top-8 -left-8 w-28 h-28 bg-purple-300/30 rounded-full"></div>
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-500 hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="10"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="12" cy="16" r="1"></circle>
                        <path d="m9 11 3-3 3 3"></path>
                        <path d="M12 2v3"></path>
                        <path d="m6 11 3-3"></path>
                        <path d="m18 11-3-3"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      Coding and Robotics
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our students learn coding and robotics from grade 1,
                      preparing them for digital transformation and global
                      technology.
                    </p>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary-900 to-primary-900 hover:from-primary-900 hover:to-primary-900 text-white rounded-full shadow-sm hover:shadow-md transition">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 sm:space-x-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg absolute top-4 left-4 sm:relative sm:top-auto sm:left-auto z-10 shadow-lg">
                      04
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-white dark:bg-gray-800 h-full rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 ring-0 hover:ring-4 hover:ring-red-500/20 transition-all duration-300 p-6 text-center w-full sm:max-w-sm sm:mx-auto">
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-red-300/30 rounded-full"></div>
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-12 h-12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                        Secondary Program
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        At the secondary level, students learn core subjects and
                        electives like coding and robotics, preparing them for
                        further studies or vocational training.
                      </p>
                      <button className="px-6 py-2 bg-gradient-to-r from-primary-900 to-primary-900 hover:from-primary-900 hover:to-primary-900 text-white rounded-full shadow-sm hover:shadow-md transition">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="relative overflow-hidden bg-white dark:bg-gray-800 h-full rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 ring-0 hover:ring-4 hover:ring-yellow-500/20 transition-all duration-300 p-6 text-center w-full sm:max-w-sm sm:mx-auto">
                    <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg z-10 shadow-lg">
                      05
                    </div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300/30 rounded-full"></div>
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-500 rounded-full flex items-center justify-center text-yellow-500 hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      Software Programming and Embedded Systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our students learn software programming and embedded
                      systems, preparing them for digital transformation and
                      global technology.
                    </p>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary-900 to-primary-900 hover:from-primary-900 hover:to-primary-900 text-white rounded-full shadow-sm hover:shadow-md transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;
