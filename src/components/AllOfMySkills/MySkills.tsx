import Image from "next/image";
import React from "react";
import Local from "next/font/local";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileCSharpBold } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { IoLogoElectron } from "react-icons/io5";
import { FaUnity } from "react-icons/fa";
import { SiDavinciresolve } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import Link from "next/link";
import { useMobileHook } from "../useMobileView/useMobileHook";

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

const wiggly = Local({
  src: [
    {
      path: "../../../public/fonts/Wigglye.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-wiggly",
  display: "swap",
});

const SkillsHeading =
  "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749314829/Picsart_25-06-07_18-51-05-546_ktohmh.png";

const SkillsDescription =
  "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749367137/skills-croped_feipdy.png";

const MySkills = () => {
    const isMobile = useMobileHook();
    return (
      <>
        {isMobile ? (
          <div className="relative py-3 w-full flex flex-col justify-center items-center mt-10">
            <div className="relative third-image h-52 w-full flex items-center justify-center">
              <h1
                className={`absolute third-h1 text-[3.2rem] text-red-700 mt-2 -rotate-3 text-shadow-yellow-300 text-shadow-sm z-20 ${Potato_sans.className}`}>
                My Skills{" "}
              </h1>
              <Image
                src={SkillsHeading}
                alt="comic type heading"
                fill
                className="relative"
              />
            </div>
            <div className="relative h-60 w-full flex items-center justify-center">
              <p
                className={`h-28 -rotate-2 ml-5 -mt-5 w-[94%] px-2 text-[#ECE852] text-shadow-sm text-shadow-black tracking-wider flex flex-wrap gap-3 z-20 ${wiggly.className}`}>
                <Link
                  href="https://html.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <TiHtml5
                    size={35}
                    color="red"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaCss3Alt
                    size={35}
                    color="blue"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaJsSquare
                    size={35}
                    color="orange"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaReact
                    size={35}
                    color="blue"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <BiLogoTypescript
                    size={35}
                    color="blue"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <RiNextjsFill
                    size={35}
                    color="black"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <RiTailwindCssFill
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://nodejs.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaNodeJs
                    size={35}
                    color="green"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://dotnet.microsoft.com/en-us/languages/csharp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <PiFileCSharpBold
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.java.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaJava
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://motion.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FiFramer
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://gsap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <Image
                    src="/images/gsap-hero.png"
                    alt="gsap icon"
                    height={40}
                    width={30}
                  />
                </Link>
                <Link
                  href="https://www.electronjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <IoLogoElectron
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://unity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaUnity
                    size={35}
                    color="black"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.blackmagicdesign.com/in/products/davinciresolve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <SiDavinciresolve
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaDocker
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
              </p>
              <Image
                src={SkillsDescription}
                alt="Skills"
                fill
                className="relative"
              />
            </div>
          </div>
        ) : (
          <div className="relative py-2 w-full flex  xl:px-4 justify-between md:mt-26 xl:mt-32">
            <div className="relative third-image h-52 md:w-[26rem] xl:w-[36rem] flex items-center justify-center lg:ml-5">
              <h1
                className={`absolute third-h1 md:text-[3.2rem] xl:text-[3.8rem] text-red-700 mt-2 -rotate-3 text-shadow-yellow-300 text-shadow-sm z-20 ${Potato_sans.className}`}>
                My Skills{" "}
              </h1>
              <Image
                src={SkillsHeading}
                alt="comic type heading"
                fill
                className="relative"
              />
            </div>
            <div className="relative h-56 w-1/2 flex items-center justify-center">
              <p
                className={`xl:h-28 md:h-[8.2rem] md:ml-3 -rotate-2 lg:ml-6 xl:ml-8 text-[1.1rem] w-[94%] px-2 text-[#ECE852] text-shadow-sm text-shadow-black tracking-wider flex flex-wrap gap-3 z-20 ${wiggly.className}`}>
                <Link
                  href="https://html.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <TiHtml5
                    size={35}
                    color="red"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaCss3Alt
                    size={35}
                    color="blue"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaJsSquare
                    size={35}
                    color="orange"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaReact
                    size={35}
                    color="blue"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <BiLogoTypescript
                    size={35}
                    color="blue"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <RiNextjsFill
                    size={35}
                    color="black"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <RiTailwindCssFill
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://nodejs.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaNodeJs
                    size={35}
                    color="green"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://dotnet.microsoft.com/en-us/languages/csharp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <PiFileCSharpBold
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.java.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaJava
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://motion.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FiFramer
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://gsap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <Image
                    src="/images/gsap-hero.png"
                    alt="gsap icon"
                    height={40}
                    width={30}
                  />
                </Link>
                <Link
                  href="https://www.electronjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <IoLogoElectron
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://unity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaUnity
                    size={35}
                    color="black"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.blackmagicdesign.com/in/products/davinciresolve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <SiDavinciresolve
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
                <Link
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center">
                  <FaDocker
                    size={35}
                    color="#0065F8"
                    className="bg-white rounded-md"
                  />
                </Link>
              </p>
              <Image
                src={SkillsDescription}
                alt="Skills"
                fill
                className="relative"
              />
            </div>
          </div>
        )}
      </>
    );
};

export default MySkills;
