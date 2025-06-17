"use client"

import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import { useParams } from "next/navigation";
import { projects } from "@/data/projectdata";

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
  lastUpdated?: string;
}

const MyWorks = () => {
    const params = useParams();
    const projectId = params.projectId as string;
    const project = projects.find((p) => p.projectId === projectId);

    if (!project) return <div>Project not found</div>;
    

    // Type assertion to match Project interface
    const typedProject = project as Project;
    return <ProjectDetails project={typedProject} />
};

export default MyWorks;
