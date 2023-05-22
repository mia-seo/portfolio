import { useQuery } from "@tanstack/react-query";
import React from "react";
import { usePortfolio } from "../context/ApiContext";

export default function Stack() {
  const { portfolio } = usePortfolio();
  const { data: stack } = useQuery(["stack"], () => portfolio.stack(), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-[450px] md:w-full max-w-[900px] flex flex-col gap-5">
        <h1 className="font-bold text-2xl py-5 text-amber-400">기술 스택</h1>
        {stack &&
          stack.map(({ id, title, list }) => (
            <div className="flex flex-col gap-3 md:flex-row" key={id}>
              <h2 className="w-[30%] text-xl font-bold">{title}</h2>
              <ul className="w-[70%] flex gap-4 text-base">
                {list.map((el, idx) => (
                  <li key={idx}>{el}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
