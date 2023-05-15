import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <nav className="w-full fixed bg-slate-200 py-5 px-14 text-gray-600">
      <ul className="flex justify-between font-bold">
        <li>
          <button
            className="text-3xl text-amber-600 transition-all duration-300"
            onClick={home}
          >
            Mia 🌱
          </button>
        </li>
        <div className="flex items-center gap-10">
          <li>
            <button>
              <a
                className="hover:text-amber-600 transition-all duration-300"
                href="https://github.com/mia-seo"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </button>
          </li>
          <li>
            <button>
              <a
                className="hover:text-amber-600 transition-all duration-300"
                href="https://velog.io/@mia"
                target="_blank"
                rel="noreferrer"
              >
                Velog
              </a>
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
