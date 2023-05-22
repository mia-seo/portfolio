import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolio } from "../context/ApiContext";

export default function EduExperience() {
  const { portfolio } = usePortfolio();
  const { data: educate } = useQuery(["educate"], () => portfolio.educate(), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="w-full flex justify-center border-b-2 border-gray-200 py-10">
      <div className="w-[450px] md:w-full max-w-[900px] p-2">
        <h1 className="font-bold text-2xl py-5 text-amber-400">교육 이력</h1>
        {educate &&
          educate.map((el) => <Edu key={el.id} id={el.id} data={el} />)}
      </div>
    </div>
  );
}

function Edu({ id, data }) {
  const { title, duration, description, detailPage } = data;
  const navigate = useNavigate();

  const navigateEduDetail = () => {
    if (detailPage) {
      navigate(`/education/${id}`, { state: data });
    }
  };

  return (
    <div className="flex flex-col gap-3 md:flex-row justify-between p-3">
      <div className="w-full md:w-[30%] flex flex-col">
        <h1
          className={`text-xl font-bold ${
            detailPage
              ? "underline underline-offset-4 hover:text-amber-600 transition-all duration-300 cursor-pointer"
              : ""
          }`}
          onClick={navigateEduDetail}
        >
          {title}
        </h1>
        <p className="text-sm">{duration}</p>
      </div>
      <ul className="w-[70%] flex flex-col gap-2 text-base list-disc mx-5">
        {description.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
