import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { usePortfolio } from "../context/ApiContext";

export default function Education() {
  const location = useLocation().state;
  const { title, description, imgUrl, url, whatILearn } = location;
  const { portfolio } = usePortfolio();

  const { data: project } = useQuery(
    ["project"],
    () => portfolio.projects().then((data) => data.slice(1)),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <div className="w-[450px] md:w-full max-w-[780px] my-10 py-10">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-8">
          <Link
            to={url}
            target="_blank"
            className="flex flex-col items-center md:flex-row md:items-end gap-5 pt-8"
          >
            <img className="w-[300px]" src={imgUrl} alt={title} />
            <h1 className="text-3xl font-bold">{title}</h1>
          </Link>
          <p className="text-sm text-end">
            👆👆 더 자세한 커리큘럼을 알고싶으시면 제목을 클릭해주세요.
          </p>
          <img
            src="https://github.com/mia-seo/portfolio/assets/117281717/7c1735bd-57b2-4ab1-9991-f90d6b6526a4"
            alt="위코드"
          />
        </header>
        <main className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-2xl text-amber-400">Learning</h2>
            <ul className="text-base list-disc p-5">
              {description.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-amber-400">
              What I Learn
            </h2>
            <ul className="text-base list-disc p-5">
              {whatILearn.map(({ header, body }) => (
                <li>
                  <p className="font-semibold py-2">{header}</p>
                  <pre className="whitespace-pre-wrap">{body}</pre>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-amber-400">Project</h2>
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
