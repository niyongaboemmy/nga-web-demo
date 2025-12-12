"use client";

import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdArrowForward } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-[#00273b] text-white pt-6 md:pt-8">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Have a Questions? */}
          <div>
            <h3 className="mb-8">{t("footer.questions")}</h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MdLocationOn className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-[#44C0FF]" />
                <p className="text-[13px]">KG 28 AV, Kigali, Rwanda</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <MdPhone className="w-[18px] h-[18px] flex-shrink-0 text-[#44C0FF]" />
                <p className="text-[13px]">+250 789 552 671</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <MdEmail className="w-[16px] h-[16px] flex-shrink-0 text-[#44C0FF]" />
                <p className="text-[13px]">info@nga.ac.rw</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-8">{t("footer.quickLinks")}</h3>

            <ul className="space-y-3">
              {[
                t("footer.links.home"),
                t("footer.links.programs"),
                t("footer.links.projects"),
                t("footer.links.teachers"),
                t("footer.links.news"),
                t("footer.links.events"),
                t("footer.links.news"),
                t("footer.links.registration"),
              ].map((link, index) => (
                <li key={index} className="flex items-center gap-3">
                  <MdArrowForward className="w-[13px] h-[13px] flex-shrink-0 text-[#006BA2]" />
                  {link === t("footer.links.events") ? (
                    <a
                      href="https://nga.ac.rw/events"
                      className="text-[13px] hover:text-[#44C0FF] transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  ) : (
                    <span className="text-[13px]">{link}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="mb-8">{t("footer.connect")}</h3>

            <div className="flex gap-3">
              {/* Facebook */}
              <button className="w-[39px] h-[39px] rounded-full bg-[#004467] flex items-center justify-center hover:bg-[#005079] transition-colors">
                <FaFacebookF className="w-5 h-5 text-white" />
              </button>

              {/* Instagram */}
              <button className="w-[39px] h-[39px] rounded-full bg-[#004467] flex items-center justify-center hover:bg-[#005079] transition-colors">
                <FaInstagram className="w-5 h-5 text-white" />
              </button>

              {/* X/Twitter */}
              <button className="w-[39px] h-[39px] rounded-full bg-[#004467] flex items-center justify-center hover:bg-[#005079] transition-colors">
                <FaTwitter className="w-5 h-5 text-white" />
              </button>

              {/* YouTube */}
              <button className="w-[39px] h-[39px] rounded-full bg-[#004467] flex items-center justify-center hover:bg-[#005079] transition-colors">
                <FaYoutube className="w-5 h-5 text-white" />
              </button>

              {/* LinkedIn */}
              <button className="w-[39px] h-[39px] rounded-full bg-[#004467] flex items-center justify-center hover:bg-[#005079] transition-colors">
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-8">{t("footer.important")}</h3>

            <div className="space-y-4">
              <button className="w-max px-6 h-[45px] bg-[#005079] rounded-full text-[16px] hover:bg-[#006BA2] transition-colors">
                {t("footer.staffLogin")}
              </button>

              <button className="w-max px-6 h-[45px] bg-[#00273b] border-2 border-[#005079] rounded-full text-[16px] hover:border-[#006BA2] transition-colors">
                {t("footer.mailPortal")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#001723] py-8">
        <div className="container mx-auto px-8">
          <p className="text-center text-[13px] text-gray-400">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
