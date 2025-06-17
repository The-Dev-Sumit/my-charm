"use client";

import Local from "next/font/local";
import React from "react";
import { useMobileHook } from "@/components/useMobileView/useMobileHook";
import { useTabletHook } from "@/components/useTabView/useTabHook";
import HeadBody from "@/components/HeadBody/HeadBody";
import CursorParticles from "@/components/Cursor/CursorParticles";
import LandingComponent from "@/components/LandingView/LandingComponent";
import AboutMe from "@/components/AboutMe/AboutMe";
import MySkills from "@/components/AllOfMySkills/MySkills";
import { projects } from "@/data/projectdata";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import type { Project } from "@/data/projectdata";

const adventureFont = Local({
  src: [
    {
      path: "../../public/fonts/Adventure.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-adventure",
  display: "swap",
});

const Potato_sans = Local({
  src: [
    {
      path: "../../public/fonts/Potato_sans-Black.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-potato_sans",
  display: "swap",
});

const MyWorksHeading =
  "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749314829/Picsart_25-06-07_18-51-05-546_ktohmh.png";

export default function Home() {
  const AuthorName = "Sumit Sonar";

  const isMobile = useMobileHook();
  const isTab = useTabletHook();

  return (
    <div className="glowing-container min-h-screen w-full">
      {!isMobile && !isTab && <CursorParticles />}
      {isMobile ? (
        <div className="w-full first-content -rotate-15 text-container flex flex-col gap-2">
          <hr className="h-[2px] -ml-3 w-full -rotate-2 bg-yellow-500 border-none rounded-xl opacity-85" />
          <h1
            className={`text-4xl -rotate-2 text-amber-300 tracking-wider ${adventureFont.className}`}
          >
            {AuthorName.split("").map((char, index) => (
              <span
                key={index}
                className="animated-letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}{" "}
              </span>
            ))}
          </h1>
          <hr className="h-[2px] -ml-6 w-full border-none bg-yellow-500 rounded-xl -rotate-4 opacity-85 " />
          ;
        </div>
      ) : (
        <div className="w-full text-container items-center flex flex-col gap-2">
          <hr className="h-[2px] w-1/2 mt-3 bg-yellow-500 border-none rounded-xl opacity-85" />
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl text-amber-400 tracking-wider ${adventureFont.className}`}
          >
            {AuthorName.split("").map((char, index) => (
              <span
                key={index}
                className="animated-letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}{" "}
              </span>
            ))}
          </h1>
          <hr className="h-[1.8px] w-[38rem] border-none bg-yellow-500 rounded-xl opacity-85 " />
        </div>
      )}

      <div className="w-full">
        <HeadBody />
      </div>

      <LandingComponent />

      <AboutMe />

      <MySkills />

      {isMobile ? (
        <div className="w-full mt-10 space-y-12">
          <div className="relative third-image h-52 w-full flex items-center justify-center">
            <h1
              className={`absolute third-h1 text-[3.2rem] text-red-700 mt-2 -rotate-3 text-shadow-yellow-300 text-shadow-sm z-20 ${Potato_sans.className}`}
            >
              My Works{" "}
            </h1>
            <Image
              src={MyWorksHeading}
              alt="comic type heading"
              fill
              className="relative"
            />
          </div>
          <div>
            {projects.map((project: Project, index) => (
              <div key={index} className="-rotate-3 py-4">
                <h2
                  className={`text-[1.3rem] text-shadow-sm text-shadow-green-800 tracking-wider text-amber-300 font-bold px-3 ${Potato_sans.className}`}
                >
                  {project.title}
                </h2>
                <div className="flex justify-between items-end w-full">
                  <p
                    className={`text-md tracking-wide text-amber-400  font-semibold px-2 w-80`}
                  >
                    {project.shortDescription}
                  </p>
                  <Link href={`/${project.projectId}`} className=" w-28 px-1">
                    <Image
                      src={project.buttonUrl}
                      alt="arrow buttons"
                      height={100}
                      width={100}
                    />
                  </Link>
                </div>

                <hr className="h-1.5 min-w-full -ml-1 bg-amber-400 border-none rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full mt-10 space-y-12">
          <div className="relative py-3 w-full md:mt-12 lg:mt-10 flex justify-center">
            <div className="relative md:h-52 lg:h-60 md:w-[32rem] lg:w-[40rem] flex items-center justify-center">
              <h1
                className={`absolute md:text-[3.7rem] lg:text-[4.6rem] lg:text-shadow-black lg:text-shadow-sm text-red-700 mt-2 -rotate-2 text-shadow-black md:text-shadow-xs z-20 ${Potato_sans.className}`}
              >
                My Works{" "}
              </h1>
              <Image
                src={MyWorksHeading}
                alt="comic type heading"
                fill
                className="relative"
              />
            </div>
          </div>

          <div>
            {projects.map((project: Project, index) => (
              <div key={index} className="-rotate-3 md:py-4 xl:py-12">
                <h2
                  className={`md:text-[2.1rem] xl:text-[2.7rem] text-shadow-sm text-shadow-green-800 tracking-wider text-amber-300 font-bold md:px-8 xl:px-12 ${Potato_sans.className}`}
                >
                  {project.title}
                </h2>
                <div className="flex justify-between items-end w-full md:px-10 xl:px-28">
                  <p
                    className={`md:text-lg xl:text-xl tracking-wide text-amber-400  font-semibold md:px-4 md:w-[28rem] xl:w-[34rem]`}
                  >
                    {project.shortDescription}
                  </p>
                  <Link href={`/${project.projectId}`} className="md:w-32">
                    <div className="lg:h-[6rem] lg:w-[7rem] xl:h-[7rem] xl:w-[9rem] active:scale-95">
                      <Image
                        src={project.buttonUrl}
                        alt="arrow buttons"
                        height={150}
                        width={150}
                      />
                    </div>
                  </Link>
                </div>
                <hr className="h-1.5 min-w-full -ml-1 bg-amber-400 border-none rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
