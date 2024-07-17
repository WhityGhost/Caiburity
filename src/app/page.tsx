import { FaNodeJs } from "react-icons/fa";
import HomePage from "../pages/HomePage";
import data from "@/data.json";
import {
  about,
  allData,
  callToAction,
  education,
  experience,
  main,
  project,
  services,
  social,
} from "../types/main";
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

async function getData() {
  return ({
    main: data.main as main,
    about: data.about as about,
    services: data.services as services,
    projects: data.projects as [project],
    experiences: data.experiences.map((exp) => {
      return {
        company: exp.company,
        position: exp.position,
        startDate: exp.duration.split(" - ")[0],
        endDate: exp.duration.split(" - ")[1],
        desc: exp.desc,
      };
    }) as [experience],
    education: data.educations.map((edu) => {
      return {
        institute: edu.institute,
        degree: edu.degree,
        startDate: edu.duration.split(" - ")[0],
        endDate: edu.duration.split(" - ")[1],
      };
    }) as [education],
    socials: data.socials as [social],
    callToAction: data.callToAction as callToAction,
  } as unknown) as allData;
}

export default async function page() {
  const data = await getData();

  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-cyan- fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
