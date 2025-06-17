"use client";

import Image from "next/image";
import React from "react";
import { useMobileHook } from "@/components/useMobileView/useMobileHook";

const AboutDescription =
  "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749323310/4845746_sk1qte.jpg";

const AboutMe = () => {
  const isMobile = useMobileHook();
  return (
    <>
      {isMobile ? (
        <div className="relative py-3 w-full mt-3">
          <div className="relative h-60 w-full flex justify-center items-center fourth-content">
            <h3 className="absolute text-lg mt-4 z-20 w-[17rem] leading-5 -rotate-14 fourth-h3 font-semibold text-amber-400 text-shadow-sm text-shadow-black">
              Hi👋, I &apos m Sumit Sonar! a passionate learner. So far, I have
              built some projects but big projects and logic oriented projects,
              I aspire to create games in the future.
            </h3>
            <Image
              src={AboutDescription}
              alt="Description"
              fill
              className="relative"
            />
          </div>
        </div>
      ) : (
        <div className="relative py-3 w-full mt-3 flex justify-center">
          <div className="relative md:h-90 lg:h-[26rem] xl:h-[30rem]  md:w-full flex justify-center items-center fourth-content">
            <h3
              className="absolute md:text-xl lg:text-[1.4rem] xl:text-[1.7rem] z-20 md:w-[27rem] lg:-ml-4 lg:w-[32rem] xl:w-[44rem] leading-7 xl:leading-8 -rotate-12 xl:-rotate-8 fourth-h3 font-semibold text-amber-400 text-shadow-sm text-shadow-black"
              style={{ wordSpacing: ".3rem" }}
            >
              Hi👋, I &apos m Sumit Sonar! a passionate learner. So far, I have
              built some projects but big projects and logic oriented projects,
              I aspire to create games in the future.
            </h3>
            <Image
              src={AboutDescription}
              alt="Description"
              fill
              className="relative"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
