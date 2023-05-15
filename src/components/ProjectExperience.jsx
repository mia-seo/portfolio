import { useQuery } from "@tanstack/react-query";
import React from "react";
import { usePortfolio } from "../context/ApiContext";
import ProjectCard from "./ProjectCard";

export default function ProjectExperience() {
  const { portfolio } = usePortfolio();
  const { data: projects } = useQuery(
    ["projects"],
    () => portfolio.projects(),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="w-full flex justify-center border-b-2 border-gray-200 py-10">
      <div className="w-[900px] p-2">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-2xl py-5 text-amber-400">프로젝트</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
