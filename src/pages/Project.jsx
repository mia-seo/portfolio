import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { usePortfolio } from "../context/ApiContext";

export default function Project() {
  const { projectId } = useParams();
  const { portfolio } = usePortfolio();
  const {
    isLoading,
    error,
    data: project,
  } = useQuery(["project", projectId], () => portfolio.project(projectId), {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <h1>Loading...💫</h1>;
  if (error) return <p>{error}</p>;
  return (
    <div className="flex flex-col gap-8 p-3 mt-24">
      <div>
        <img className="w-100px" src={project.thumbnail} alt={project.title} />
      </div>
      <div className="flex justify-between px-3">
        <h2 className="w-[30%] flex flex-col gap-5 text-xl font-bold">
          Project
        </h2>
        <ul className="w-[70%] flex flex-col gap-2 text-base list-disc mx-5">
          {project && <li className="font-bold text-xl">{project.title}</li>}
          {project &&
            project.projectInfo.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
      </div>
      <div className="flex justify-between px-3">
        <h2 className="w-[30%] flex flex-col gap-5 text-xl font-bold">Stack</h2>
        <div className="w-[70%] flex flex-wrap gap-2 text-base">
          {project &&
            project.stack.map((el, idx) => (
              <span className="before:content-['@']" key={idx}>
                {el}
              </span>
            ))}
        </div>
      </div>
      <div className="flex justify-between px-3">
        <h2 className="w-[30%] flex flex-col gap-5 text-xl font-bold">Pages</h2>
        <ul className="w-[70%] flex flex-col gap-2 text-base list-disc mx-5">
          {project &&
            project.pages.map(({ title, url }) => (
              <li className="flex flex-wrap" key={title}>
                <p className="font-semibold">{title} : </p>
                <Link
                  to={url}
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  {url}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex justify-between px-3">
        <h2 className="w-[30%] flex flex-col gap-5 text-xl font-bold">
          Contribute
        </h2>
        <ol className="w-[70%] flex flex-col gap-2 text-base list-decimal mx-5">
          {project &&
            project.contribute.map(({ header, body }) => (
              <li className="mx-3" key={header}>
                {header}
                <ul className="list-disc mx-5">
                  {body.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ol>
      </div>
      {project.effort && (
        <div className="flex justify-between p-3">
          <h2 className="w-[30%] flex flex-col gap-5 text-xl font-bold">
            Effort
          </h2>
          <ol className="w-[70%] flex flex-col gap-2 text-base list-decimal mx-5">
            {project &&
              project.effort.map(({ header, body }) => (
                <li className="mx-3" key={header}>
                  {header}
                  <ul className="list-disc mx-5">
                    {body.map((el) => (
                      <li key={el}>{el}</li>
                    ))}
                  </ul>
                </li>
              ))}
          </ol>
        </div>
      )}
    </div>
  );
}
