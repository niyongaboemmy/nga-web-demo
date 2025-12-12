"use client";

import AboutImage from "@/assets/about-image.png";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const AboutComponent = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-primary-100 dark:bg-gray-900 py-12 md:py-16 pb-8 lg:py-20 md:pb-8 lg:pb-8 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-max">
        <div className="grid grid-cols-12 gap-2 w-full h-max">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="mb-10 md:mb-12">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary-800 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold">{t("about.whoWeAre")}</div>
              </div>
              <div className="opacity-60">{t("about.whoWeAreDesc")}</div>
            </div>
            <div className="mb-10 md:mb-12">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary-800 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold">{t("about.vision")}</div>
              </div>
              <div className="opacity-60">{t("about.visionDesc")}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="mb-10 md:mb-12">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary-800 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7v6m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold">{t("about.mission")}</div>
              </div>
              <div className="opacity-60">{t("about.missionDesc")}</div>
            </div>
            <div className="mb-10 md:mb-12">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary-800 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold">
                  {t("about.coreValues")}
                </div>
              </div>
              <div className="opacity-60">
                {t("about.coreValuesDesc")}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full px-2 md:px-4 py-3">
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.godliness")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.steadfastness")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.innovation")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.patriotism")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.excellence")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.servanthood")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.unity")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Image
              src={AboutImage}
              alt=""
              height={500}
              width={500}
              className="w-full md:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
