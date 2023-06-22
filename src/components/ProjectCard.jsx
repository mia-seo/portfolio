import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { id, title, thumbnail, projectInfo, stack } = project;
  const navigate = useNavigate();

  const goDetail = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      className="card w-96 bg-base-1000 shadow-xl rounded-xl px-5 pb-5 hover:scale-105 hover:shadow-zinc-500 transition-all duration-150"
      key={id}
      onClick={() => goDetail(id)}
    >
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex justify-center items-center">
          <h2 className="card-title text-2xl font-bold p-2">{title}</h2>
        </div>
        <ul>
          {projectInfo.map((el, index) => (
            <li
              className={`py-1 text-base ${
                index === 0 ? "font-semibold text-base" : ""
              }`}
              key={index}
            >
              {el}
            </li>
          ))}
        </ul>
        <ul className="flex justify-center flex-wrap text-sm">
          {stack.map((el, index) => (
            <li
              className="px-1 text-sm font-semibold text-amber-500"
              key={index}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
