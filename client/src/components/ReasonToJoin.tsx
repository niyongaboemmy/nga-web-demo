"use client";

import Image from "next/image";
import R1 from "@/assets/r1.png";
import R2 from "@/assets/r2.png";
import R3 from "@/assets/r3.png";
import R4 from "@/assets/r4.png";
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
        <div className="grid grid-cols-12 gap-2 md:gap-6 lg:gap-12 w-full h-max">
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="mb-10 md:mb-12 flex flex-col items-center justify-center text-center">
              <div className="mb-2 flex flex-col items-center justify-center">
                <Image
                  src={R4}
                  alt=""
                  height={500}
                  width={500}
                  className="w-auto h-auto mb-4"
                />
                <div className="text-2xl font-bold">
                  {t("reasons.international.title")}
                </div>
              </div>
              <div className="opacity-60">
                {t("reasons.international.description")}
              </div>
            </div>
            <div className="mb-10 md:mb-12 flex flex-col items-center justify-center text-center">
              <div className="mb-2 flex flex-col items-center justify-center">
                <Image
                  src={R1}
                  alt=""
                  height={500}
                  width={500}
                  className="w-auto h-auto mb-4"
                />
                <div className="text-2xl font-bold">
                  {t("reasons.christian.title")}
                </div>
              </div>
              <div className="opacity-60">
                {t("reasons.christian.description")}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="mb-10 md:mb-12 flex flex-col items-center justify-center text-center">
              <div className="mb-2 flex flex-col items-center justify-center">
                <Image
                  src={R2}
                  alt=""
                  height={500}
                  width={500}
                  className="w-auto h-auto mb-4"
                />
                <div className="text-2xl font-bold">
                  {t("reasons.studentLife.title")}
                </div>
              </div>
              <div className="opacity-60">
                {t("reasons.studentLife.description")}
              </div>
            </div>
            <div className="mb-10 md:mb-12 flex flex-col items-center justify-center text-center">
              <div className="mb-2 flex flex-col items-center justify-center">
                <Image
                  src={R3}
                  alt=""
                  height={500}
                  width={500}
                  className="w-auto h-auto mb-4"
                />
                <div className="text-2xl font-bold">
                  {t("reasons.facilities.title")}
                </div>
              </div>
              <div className="opacity-60">
                {t("reasons.facilities.description")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-primary-900 text-white px-6 py-2 rounded-full hover:bg-primary-900/80 transition-all duration-300 text-center">
            {t("reasons.register")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReasonToJoin;
