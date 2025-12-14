"use client";

import Image from "next/image";
import R1 from "@/assets/r-image1.png";
import R2 from "@/assets/r-image2.png";
import R3 from "@/assets/r-image3.png";
import R4 from "@/assets/r-image1.png";
import R5 from "@/assets/r-image2.png";
import {
  FiBookOpen,
  FiHome,
  FiTarget,
  FiUsers,
  FiCompass,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ReasonToJoin = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white dark:bg-gray-950 py-12 md:py-16 pb-8 lg:py-20 md:pb-8 lg:pb-8 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-max">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-center">
            {t("reasons.title")}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-max">
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 group border-4 border-primary-500"
            data-aos="fade-up"
          >
            <Image
              src={R1}
              alt=""
              height={400}
              width={600}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center text-white text-xl font-bold mb-2">
                <FiBookOpen className="w-6 h-6 mr-2" />
                {t("reasons.curriculum.title")}
              </div>
              <div className="text-white/90 text-sm">
                {t("reasons.curriculum.description")}
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 group border-4 border-primary-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src={R2}
              alt=""
              height={400}
              width={600}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center text-white text-xl font-bold mb-2">
                <FiHome className="w-6 h-6 mr-2" />
                {t("reasons.facilities.title")}
              </div>
              <div className="text-white/95 text-sm">
                {t("reasons.facilities.description")}
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 group border-4 border-primary-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={R3}
              alt=""
              height={400}
              width={600}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center text-white text-xl font-bold mb-2">
                <FiTarget className="w-6 h-6 mr-2" />
                {t("reasons.approach.title")}
              </div>
              <div className="text-white/90 text-sm">
                {t("reasons.approach.description")}
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 group border-4 border-primary-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src={R4}
              alt=""
              height={400}
              width={600}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center text-white text-xl font-bold mb-2">
                <FiUsers className="w-6 h-6 mr-2" />
                {t("reasons.partnerships.title")}
              </div>
              <div className="text-white/90 text-sm">
                {t("reasons.partnerships.description")}
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 group border-4 border-primary-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src={R5}
              alt=""
              height={400}
              width={600}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center text-white text-xl font-bold mb-2">
                <FiCompass className="w-6 h-6 mr-2" />
                {t("reasons.pathways.title")}
              </div>
              <div className="text-white/90 text-sm">
                {t("reasons.pathways.description")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <button className="bg-gradient-to-r from-primary-900 to-primary-900 text-white px-8 py-3 rounded-full hover:from-primary-950 hover:to-primary-950 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105">
          {t("reasons.register")}
        </button>
      </div>
    </div>
  );
};

export default ReasonToJoin;
