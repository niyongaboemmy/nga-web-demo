"use client";

import AboutImage from "@/assets/about-image.png";
import Image from "next/image";
import { FiCheck, FiUsers, FiEye, FiTarget, FiHeart } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const AboutComponent = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-primary-100 dark:bg-gray-900 py-12 md:py-16 pb-8 lg:py-20 md:pb-8 lg:pb-8 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-max">
        <div className="grid grid-cols-12 gap-4 w-full h-max">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="mb-10 md:mb-12">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary-800 to-primary-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <FiUsers className="w-8 h-8" strokeWidth={1} />
                </div>
                <div className="text-2xl font-bold">{t("about.whoWeAre")}</div>
              </div>
              <div className="opacity-60">{t("about.whoWeAreDesc")}</div>
            </div>
            <div className="mb-12 md:mb-16">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary-800 to-primary-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <FiEye className="w-8 h-8" strokeWidth={1} />
                </div>
                <div className="text-2xl font-bold">{t("about.vision")}</div>
              </div>
              <div className="opacity-60">{t("about.visionDesc")}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="mb-12 md:mb-16">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary-800 to-primary-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <FiTarget className="w-8 h-8" strokeWidth={1} />
                </div>
                <div className="text-2xl font-bold">{t("about.mission")}</div>
              </div>
              <div className="opacity-60">{t("about.missionDesc")}</div>
            </div>
            <div className="mb-12 md:mb-16">
              <div className="flex flex-row items-center gap-3 mb-2">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary-800 to-primary-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <FiHeart className="w-8 h-8" strokeWidth={1} />
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
                    <div>{t("about.values.specialized")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.modern")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.partnerships")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.community")}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FiCheck className="text-primary-800" />
                    </div>
                    <div>{t("about.values.evidence")}</div>
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
