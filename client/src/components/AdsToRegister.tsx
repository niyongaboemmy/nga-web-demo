"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AdsImage from "@/assets/AdsToRegisterLight.png";
import AdsImage1 from "@/assets/AdsToRegisterLight1.png";
import AdsImage2 from "@/assets/AdsToRegisterLight2.png";
import AdsImage3 from "@/assets/AdsToRegisterLight3.png";

const AdsToRegister = () => {
  const images = [AdsImage, AdsImage1, AdsImage2, AdsImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hidden lg:inline-block w-full min-h-[160px]">
      <div className="relative w-full h-auto">
        {images.map((img, index) => (
          <Image
            key={index + 1}
            src={img}
            alt={`Ads ${index + 1}`}
            height={10}
            width={10}
            className={`w-full cursor-pointer absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdsToRegister;
