"use client";

import React from "react";
import { useMobileHook } from "../useMobileView/useMobileHook";
import { useTabletHook } from "../useTabView/useTabHook";
import Local from "next/font/local";

const heroes = Local({
  src: [
    {
      path: "../../../public/fonts/Heroes Legend.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heroes",
  display: "swap",
});

const superMarker = Local({
  src: [
    {
      path: "../../../public/fonts/SuperBlackMarker.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-superMarker",
  display: "swap",
});

const HeadBody = () => {
  const isMobile = useMobileHook();
  const isTab = useTabletHook();
  return (
    <>
      {isMobile ? (
        <div className="mt-24 w-full gap-2 py-2 px-1 flex flex-col items-center justify-center">
          <div>
            <h1
              className={`text-[5vw] tracking-wide text-amber-300 space-x-3 ${heroes.className}`}>
              <span>A</span>
              <span>developer</span>
              <span>who</span>
              <span>loves</span>
            </h1>
          </div>
          <div
            className={`dropping-texts text-[5.8vw] ${superMarker.className} font-bold flex justify-center w-full tracking-wide text-[#baf606]`}>
            <div>Web Development</div>
            <div>Software Development</div>
            <div>Game Development</div>
            <div>Problem Solving</div>
          </div>
        </div>
      ) : isTab ? (
        <div className="container-md mt-20 w-full flex flex-row items-center justify-center">
          <p className={`text-[1.2rem] px-1 text-amber-300 ${heroes.className}`}>
            A Developer Who Loves
          </p>
          <div
            className={`animation-md text-[1.2rem] px-1 text-[#baf606] ${heroes.className}`}>
            <div className="first">
              <div>Web Development</div>
            </div>
            <div className="second">
              <div>Software Development</div>
            </div>
            <div className="third">
              <div>Game Development</div>
            </div>
            <div className="fourth">
              <div>Problem Solving</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-lg mt-20 w-full">
          <p className={`text-[1.7rem] text-amber-300 ${heroes.className}`}>
            A Developer Who Loves
          </p>
          <div
            className={`animation-lg text-[1.6rem] text-[#baf606] ${heroes.className}`}>
            <div className="first">
              <div>Web Development</div>
            </div>
            <div className="second">
              <div>Software Development</div>
            </div>
            <div className="third">
              <div>Game Development</div>
            </div>
            <div className="fourth">
              <div>Problem Solving</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeadBody;
