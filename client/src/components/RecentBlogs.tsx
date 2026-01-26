"use client";

import Image from "next/image";
import IMAGE1 from "@/assets/r-image1.png";
import IMAGE2 from "@/assets/r-image2.png";
import IMAGE3 from "@/assets/r-image3.png";
import { useTranslation } from "react-i18next";

const RecentBlogs = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-primary-100 dark:bg-gray-900 py-12 md:py-16 lg:py-20 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-max">
        <div className="mb-12">
          <h1 className="text-xl font-bold text-center">{t("blogs.title")}</h1>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-16 w-full h-max mb-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="rounded-3xl bg-white dark:bg-gray-800/60 cursor-pointer h-full group hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-all duration-500 ease-out">
              <div>
                <Image
                  src={IMAGE3}
                  alt=""
                  height={500}
                  width={500}
                  className="w-full h-auto rounded-t-3xl object-cover"
                />
              </div>
              <div className="p-4 md:p-8">
                <div className="flex flex-row items-center gap-3 mb-2">
                  <div className="text-sm font-semibold group-hover:underline">
                    {t("blogs.blog1.title")}
                  </div>
                </div>
                <div className="opacity-60 text-xs">
                  {t("blogs.blog1.description")}
                </div>
                <button className="mt-4 bg-primary-900 text-white px-6 py-2 rounded-full hover:bg-primary-900/80 transition-all duration-300 text-center text-sm">
                  {t("blogs.moreDetails")}
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="rounded-3xl bg-white dark:bg-gray-800/60 cursor-pointer h-full group hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-all duration-500 ease-out">
              <div>
                <Image
                  src={IMAGE1}
                  alt=""
                  height={500}
                  width={500}
                  className="w-full h-auto rounded-t-3xl object-cover"
                />
              </div>
              <div className="p-4 md:p-8">
                <div className="flex flex-row items-center gap-3 mb-2">
                  <div className="text-sm font-semibold group-hover:underline">
                    {t("blogs.blog2.title")}
                  </div>
                </div>
                <div className="opacity-60 text-xs">
                  {t("blogs.blog2.description")}
                </div>
                <button className="mt-4 bg-primary-900 text-white px-6 py-2 rounded-full hover:bg-primary-900/80 transition-all duration-300 text-center text-sm">
                  {t("blogs.moreDetails")}
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="rounded-3xl bg-white dark:bg-gray-800/60 cursor-pointer h-full group hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-all duration-500 ease-out">
              <div>
                <Image
                  src={IMAGE2}
                  alt=""
                  height={500}
                  width={500}
                  className="w-full h-auto rounded-t-3xl object-cover"
                />
              </div>
              <div className="p-4 md:p-8">
                <div className="flex flex-row items-center gap-3 mb-2">
                  <div className="text-sm font-semibold group-hover:underline">
                    {t("blogs.blog3.title")}
                  </div>
                </div>
                <div className="opacity-60 text-xs">
                  {t("blogs.blog3.description")}
                </div>
                <button className="mt-4 bg-primary-900 text-white px-6 py-2 rounded-full hover:bg-primary-900/80 transition-all duration-300 text-center text-sm">
                  {t("blogs.moreDetails")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border-2 border-primary-900 dark:text-white bg-transparent text-primary-900 hover:bg-primary-900 hover:text-white font-semibold px-6 py-2 rounded-full hover:border-primary-900/80 transition-all duration-300 text-center">
            {t("blogs.viewMore")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
