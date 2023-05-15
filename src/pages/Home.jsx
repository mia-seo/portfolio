import React from "react";
import EduExperience from "../components/EduExperience";
import Infomation from "../components/Infomation";
import Introduction from "../components/Introduction";
import ProjectExperience from "../components/ProjectExperience";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-10 items-center mt-[150px] my-10">
      <Infomation />
      <Introduction />
      <EduExperience />
      <ProjectExperience />
      <Stack />
    </main>
  );
}
