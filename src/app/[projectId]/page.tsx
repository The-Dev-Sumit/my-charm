"use client"

import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import { useParams } from "next/navigation";
import { projects } from "@/data/projectdata";
import type { Project } from "@/data/projectdata";



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
