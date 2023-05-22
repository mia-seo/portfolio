import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../context/ApiContext";

export default function Infomation() {
  const { portfolio } = usePortfolio();

  const {
    isLoading,
    error,
    data: profile,
  } = useQuery(["profile"], () => portfolio.profile(), {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <h1>Loading...💫</h1>;
  if (error) return <p>{error}</p>;
  return (
    <div className="w-full py-10 border-b-2 border-gray-200">
      <div className="w-[900px] flex flex-col items-center md:flex-row md:justify-center gap-20">
        <img
          className="w-[300px] h-[300px] rounded-full shadow-xl shadow-gray-700"
          src={profile.thumbnail}
          alt="profile"
        />
        <div className="flex flex-col justify-center gap-10">
          <h1 className="w-full text-3xl font-bold text-amber-500">
            서지연, 웹 프론트엔드 개발자
          </h1>
          <ul className="w-full flex flex-col gap-3 px-2">
            {profile.info.map(({ id, text }) => (
              <li className="flex items-center gap-3" key={id}>
                <label className="w-[30%] font-bold" htmlFor={id}>
                  {id}
                </label>
                {id === "email" || id === "phone" ? (
                  <input
                    className="w-[70%] focus:outline-none text-base"
                    type="text"
                    value={text}
                    readOnly
                  />
                ) : (
                  <Link className="text-base" to={text} target="_blank">
                    {text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
