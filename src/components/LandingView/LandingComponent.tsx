"use client";

import Image from "next/image";
import React from "react";
import Local from "next/font/local";
import { useMobileHook } from "@/components/useMobileView/useMobileHook";

const Potato_sans = Local({
  src: [
    {
      path: "../../../public/fonts/Potato_sans-Black.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-potato_sans",
  display: "swap",
});

const ComicHeading =
  "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749314829/Picsart_25-06-07_18-51-05-546_ktohmh.png";

const LandingComponent = () => {
    const isMobile = useMobileHook();
    return (
      <>
        {isMobile ? (
          <div className="relative third-content py-3 w-full mt-12">
            <div className="relative third-image h-52 w-full flex items-center justify-center">
              <h1
                className={`absolute third-h1 text-[3.2rem] text-red-700 mt-2 -rotate-6 text-shadow-yellow-300 text-shadow-sm z-20 ${Potato_sans.className}`}>
                About Me{" "}
              </h1>
              <Image
                src={ComicHeading}
                alt="comic type heading"
                fill
                className="relative"
              />
            </div>
          </div>
        ) : (
          <div className="relative py-3 w-full md:mt-12 lg:mt-10 flex justify-center">
            <div className="relative md:h-52 lg:h-60 md:w-[32rem] lg:w-[40rem] flex items-center justify-center">
              <h1
                className={`absolute md:text-[3.7rem] lg:text-[4.6rem] lg:text-shadow-black lg:text-shadow-sm text-red-700 mt-2 -rotate-2 text-shadow-black md:text-shadow-xs z-20 ${Potato_sans.className}`}>
                About Me{" "}
              </h1>
              <Image
                src={ComicHeading}
                alt="comic type heading"
                fill
                className="relative"
              />
            </div>
          </div>
        )}
      </>
    );
};

export default LandingComponent;
