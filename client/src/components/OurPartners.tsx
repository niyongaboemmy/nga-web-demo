"use client";

import Image from "next/image";
import Partner1 from "@/assets/partner1.png";
import Partner2 from "@/assets/partner2.png";
import Partner3 from "@/assets/partner3.png";
import Partner4 from "@/assets/partner4.png";
import Partner5 from "@/assets/partner5.png";
import Partner6 from "@/assets/partner6.png";
import Partner7 from "@/assets/partner7.png";
import Partner8 from "@/assets/partner8.png";
import Partner9 from "@/assets/partner9.png";
import { useTranslation } from "react-i18next";

const OurPartners = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white dark:bg-gray-950 py-12 md:py-16 lg:py-20 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-max">
        <div className="mb-12">
          <h1 className="text-xl md:text-2xl font-bold text-center">
            {t("partners.title")}
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center lg:grid-cols-5 gap-3 md:gap-6 lg:gap-14 w-full h-max">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner1}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner2}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner3}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner4}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner5}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner6}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner7}
              alt=""
              height={10}
              width={10}
              className="h-24 w-24 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner8}
              alt=""
              height={10}
              width={10}
              className="h-16 w-auto sm:h-20 sm:w-auto md:h-24 md:w-auto lg:h-28 lg:w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={Partner9}
              alt=""
              height={10}
              width={10}
              className="h-24 w-auto sm:h-24 sm:w-auto md:h-24 md:w-auto lg:h-28 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
