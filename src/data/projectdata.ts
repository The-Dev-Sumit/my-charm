
export interface Project {
  projectId: string;
  buttonUrl: string;
  videoUrl: string;
  title: string;
  thumbnail: string;
  description: string;
  shortDescription?: string;
  link?: string;
  linkText?: string;
  date: string;
  lastUpdated?: string;
}

 export const projects: Project[] = [
   {
     projectId: "uivora-component-library",
     title: "UIVORA",
     buttonUrl:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749468770/Picsart_25-06-09_17-00-30-956_1_i291ko.png",
     videoUrl:
       "https://res.cloudinary.com/dmmzqpfgg/video/upload/v1750228307/Uivora_Promotional_Video_e3sasw.mp4",

     thumbnail:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1745854135/uivora_view_yibqds.png",
     description:
       "UIVORA is my first Next.js project — an open-source library where you can create and share custom UI elements for websites, and also contribute your own to help the community grow.",
     shortDescription: "UIVORA - an open-source library",
     link: "https://uivora.vercel.app/",
     linkText: "UIVORA",
     date: "Date: 27-04-2025",
   },
   {
     projectId: "codesnap-software",
     title: "CodeSnap App",
     buttonUrl:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749469283/arrow4_2_jzxece.png",
     videoUrl:
       "https://res.cloudinary.com/dmmzqpfgg/video/upload/v1744004985/CodeSnap_video_eoijyf.mp4",
     thumbnail:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1744008346/Screenshot_2025-04-07_121510_xem3rn.png",
     description:
       "This is my first ever offline Desktop App, using Javascript and the name is CodeSnap. A simple and easy to use code editor were you can write 4 languages like - c, c++, js, python. And this is an offline code editor.",
     shortDescription: "This is my first ever Desktop App",
     linkText: "Download",
     date: "Date: 13-02-2025",
     lastUpdated: "Last Updated: 11-05-2025",
   },
   {
     projectId: "snake-game",
     title: "A Snake Game",
     buttonUrl:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749469041/arrow3_1_pdswb4.png",
     videoUrl:
       "https://res.cloudinary.com/dmmzqpfgg/video/upload/v1744006812/20250114153652_epobb2.mp4",
     thumbnail:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1744008176/Screenshot_2025-04-07_121236_drh7bk.png",
     description:
       "This is my third project and first game using java language for the first time, this is a basic Snake Game, i wanted to try something new.",
     shortDescription: "This is my first game using java",
     link: undefined,
     linkText: undefined,
     date: "Date: 03-02-2024",
   },
   {
     projectId: "second-fullstake",
     title: "Fullstack Website",
     buttonUrl:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749468897/20250609_161426-removebg-preview_1_q3opj4.png",
     videoUrl:
       "https://res.cloudinary.com/dmmzqpfgg/video/upload/v1744007384/Welcome_TGS_-_Google_Chrome_2024-01-28_20-53-07_hjgscy.mov",
     thumbnail:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1744008031/Screenshot_2025-04-07_121010_ooc2tq.png",
     description:
       "This is my second fullstack website, using html, css and javascript with database and backend, this project i made before our exams, a basic test portal type project, which my friends used. I know it is childish but I fun with whatever i do.",
     shortDescription: "This is my first fullstack website",
     link: undefined,
     linkText: undefined,
     date: "Date: 28-01-2024",
   },
   {
     projectId: "first-frontend",
     title: "Frontend Website",
     buttonUrl:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1749469561/arrow6_1_p0qaw6.png",
     videoUrl:
       "https://res.cloudinary.com/dmmzqpfgg/video/upload/v1744006804/Web_practice_1_-_Google_Chrome_2023-10-12_19-39-39_fmptjb.mp4",
     thumbnail:
       "https://res.cloudinary.com/dmmzqpfgg/image/upload/v1744007663/Screenshot_2025-04-07_120346_t1fdsn.png",
     description:
       "This is my first frontend website, it is build in html and css and little bit of javascript. This is my first ever project to learn things, from here my journey started.",
     shortDescription: "This is my first frontend website",
     link: undefined,
     linkText: undefined,
     date: "Date: 12-10-2023",
   },
 ];

 