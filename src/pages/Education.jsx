import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { usePortfolio } from "../context/ApiContext";

export default function Education() {
  const location = useLocation().state;
  const { title, duration, description, imgUrl, url, videoId } = location;
  const { portfolio } = usePortfolio();

  const { data: project } = useQuery(
    ["project"],
    () => portfolio.projects().then((data) => data.slice(1)),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <div className="w-[780px] my-10 py-10">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-8">
          <Link to={url} target="_blank" className="flex items-end gap-5 py-8">
            <img className="w-[300px]" src={imgUrl} alt={title} />
            <h1 className="text-3xl font-bold">{title}</h1>
          </Link>
          <iframe
            className="rounded-2xl"
            id="player"
            title={title}
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
          />
        </header>
        <main>
          <div>
            <h2 className="font-semibold text-2xl text-amber-400">학습</h2>
            <ul className="text-base list-disc p-5">
              {description.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-amber-400">프로젝트</h2>
            <div className="flex flex-wrap gap-3">
              {project &&
                project.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
