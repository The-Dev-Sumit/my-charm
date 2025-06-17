"use client";

import React from "react";
import Local from "next/font/local";
import ReactPlayer from "react-player";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Image from "next/image";
import SparkleButton from "../ButtonForMobileView/SparkleButton";
import { useEffect, useState } from "react";
import { IoArrowUndo } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useMobileHook } from "../useMobileView/useMobileHook";
import CursorParticles from "../Cursor/CursorParticles";
import { useTabletHook } from "../useTabView/useTabHook";

const heroes = Local({
  src: [
    {
      path: "../../../public/fonts/Heroes Legend.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heroes-legend",
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

const wingly = Local({
  src: [
    {
      path: "../../../public/fonts/Wigglye.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-wigglye",
  display: "swap",
});

interface Project {
  projectId: string;
  buttonUrl?: string;
  videoUrl?: string;
  title: string;
  thumbnail: string;
  description: string;
  shortDescription?: string;
  link?: string;
  linkText?: string;
  date: string;
  lastUpdated?: undefined;
}

interface ProjectLinks {
  [key: string]: string;
}

const DescriptionBg =
  "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749833128/orange-comic-background_692379-312_xvpzbm.jpg";

const ProjectDetails = ({ project }: { project: Project }) => {
  const [codesnapLink, setCodesnapLink] = useState<ProjectLinks | null>(null);
  const router = useRouter();
  const isMobile = useMobileHook();
  const isTab = useTabletHook();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/67ed76908561e97a50f7853a",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$8lN9jglX2MyremXQgBZ1AuSxtjqHrxfbmSJcfa4eLCdNfhgEdXSt.",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setCodesnapLink(data.record.CodeSnapAppLinks);
      } catch (error) {
        console.error("Failed to fetch links:", error);
        setCodesnapLink({
          download:
            "https://github.com/The-Dev-Sumit/CodeSnapApp/releases/download/MyApp/CodeSnap-1-v-win-x64.7z",
        });
      }
    };

    fetchLinks();
  }, []);

  const EndInfo =
    "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1750007402/comic-book-cartoon-speech-bubble-text-puff-cloud-green-background-template-pop-art-dialog-conversation-funny-smoke-steam-187352782_yfjti7.jpg";

  return (
    <>
      {isMobile ? (
        <div className="w-full min-h-screen">
          <button
            onClick={() => router.back()}
            title="Back"
            className="px-2 py-1">
            <IoArrowUndo size={30} color="yellow" />
          </button>
          <div className="w-full h-[23rem] flex flex-col space-y-3">
            <div className="py-2 w-full mt-6">
              <h1
                className={`text-xl tracking-wide text-shadow-2xs leading-9 text-shadow-black text-amber-300 font-bold w-full text-center ${heroes.className}`}
              >
                {project.title}
              </h1>
            </div>
            <div className="w-full px-3 flex flex-row justify-between font-semibold text-amber-300 text-shadow-2xs text-shadow-black">
              <p>{project.lastUpdated}</p>
              <p>{project.date}</p>
            </div>
            <div className="w-full flex items-start justify-center space-x-1 font-semibold tracking-wider text-white opacity-90 px-5 mt-3">
              <AiOutlineExclamationCircle size={15} />
              <p className="text-sm px-2 leading-4">
                Note: These videos were made just for fun with my batchmates.
              </p>
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="w-[400px] h-[200px] rounded-2xl">
                <ReactPlayer
                  url={project.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing={false}
                  light={project.thumbnail}
                />
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg relative flex flex-col items-center justify-center mt-5">
            <p
              className={`absolute z-20 px-4 ${superMarker.className} text-red-700 text-shadow-xs text-shadow-black tracking-wider`}
            >
              {project.description}
            </p>
            <div className="h-[11.3rem] w-full relative border-2 border-t-red-800 border-b-transparent ">
              <Image src={DescriptionBg} alt="comic style bg" fill />
            </div>
          </div>
          {project.linkText && (
            <div className="w-full flex items-center justify-center mt-5 py-5">
              <SparkleButton
                href={
                  project.link
                    ? project.link
                    : project.projectId === "codesnap-software"
                    ? codesnapLink?.download
                    : undefined
                }
                text={project.linkText || ""}
              />
            </div>
          )}

          {project.projectId === "codesnap-software" && (
            <div className="mt-10 flex flex-col items-center justify-center relative">
              <p
                className={`absolute text-blue-700 z-20 px-16 text-center tracking-wider text-xl leading-5 ${wingly.className}`}
              >
                This is for Windows, and the software you download from the
                download button will be the latest version, for Windows 10 and
                above
              </p>
              <div className="h-[11.3rem] w-full relative border-2 border-t-red-800 border-b-transparent ">
                <Image src={EndInfo} alt="comic style bg" fill />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full min-h-screen">
          {!isMobile && !isTab && <CursorParticles />}
          <div className="absolute md:top-5 md:left-3 xl:left-12 z-50 flex items-center justify-end">
            <button
              onClick={() => router.back()}
              title="Back"
              className="px-2 py-1 cursor-pointer"
            >
              <IoArrowUndo size={40} color="yellow" />
            </button>
          </div>
          <div className="w-full h-[26rem] flex flex-col space-y-3">
            <div className="py-2 w-full mt-6">
              <h1
                className={`md:text-xl lg:text-2xl tracking-wider text-shadow-2xs leading-9 text-shadow-black text-amber-300 font-bold w-full text-center ${heroes.className}`}
              >
                {project.title}
              </h1>
            </div>
            <div className="w-full md:px-3 lg:px-12 xl:px-32 flex flex-row justify-between font-semibold text-amber-300 text-shadow-2xs text-shadow-black">
              <p>{project.lastUpdated}</p>
              <p>{project.date}</p>
            </div>
            <div className="w-full md:flex md:items-center md:justify-center space-x-1 font-semibold tracking-wider text-white opacity-90 px-5 mt-3">
              <AiOutlineExclamationCircle size={15} />
              <p className="text-sm px-2 leading-4">
                Note: These videos were made just for fun with my batchmates.
              </p>
            </div>
            <div className="w-full flex items-center justify-center px-2">
              <div className="md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[300px] rounded-2xl">
                <ReactPlayer
                  url={project.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing={false}
                  light={project.thumbnail}
                />
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg relative flex flex-col items-center justify-center md:mt-12 lg:mt-20">
            <p
              className={`absolute z-20 md:px-20 lg:px-32 xl:px-48 md:text-xl text-center lg:text-[1.3rem] ${superMarker.className} text-red-700 text-shadow-xs text-shadow-black tracking-wider`}
            >
              {project.description}
            </p>
            <div className="md:h-[14rem] lg:h-[16rem] xl:h-[19rem] w-full relative border-2 border-t-red-800 border-b-transparent ">
              <Image src={DescriptionBg} alt="comic style bg" fill />
            </div>
          </div>
          {project.linkText && (
            <div className="w-full flex items-center justify-center md:mt-5 lg:mt-12">
              <SparkleButton
                href={
                  project.link
                    ? project.link
                    : project.projectId === "codesnap-software"
                    ? codesnapLink?.download
                    : undefined
                }
                text={project.linkText || ""}
              />
            </div>
          )}

          {project.projectId === "codesnap-software" && (
            <div className="md:mt-10 lg:mt-20 flex flex-col items-center justify-center relative">
              <p
                className={`absolute text-blue-700 z-20 md:px-32 lg:px-48 xl:px-80 text-center tracking-wider md:text-2xl lg:text-3xl md:leading-6 lg:leading-8 ${wingly.className}`}
              >
                This is for Windows, and the software you download from the
                download button will be the latest version, for Windows 10 and
                above
              </p>
              <div className="md:h-[13rem] lg:h-[20rem] xl:h-[25rem] w-full relative border-2 border-t-red-800 border-b-transparent ">
                <Image src={EndInfo} alt="comic style bg" fill />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
