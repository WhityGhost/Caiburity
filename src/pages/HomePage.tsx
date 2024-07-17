"use client";
import dynamic from "next/dynamic";
import { data } from "@/src/types/main";
import Hero from "@/src/components/main/Hero";
import About from "@/src/components/main/About";
import Services from "@/src/components/services/Services";
import Projects from "@/src/components/projects/Projects";
import Socials from "@/src/components/main/Socials";
import Experiences from "@/src/components/experiences/Experiences";
import Contact from "@/src/components/main/Contact";
import CallToAction from "@/src/components/CallToAction";
import Footer from "../components/Footer";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

interface Props {
  data: data;
}

const HomePage = ({ data }: Props) => {
  return (
    <div className="page text-center">
      <Header logo={data.main.title} />
      <div className="max-w-[1920px] mx-auto">
        <Hero mainData={data.main} />
        <Socials socials={data.socials} />
        <About aboutData={data.about} name={data.main.title} />
        <Services serviceData={data.services} />
        {/* <Projects projectsData={data.projects} />
        <Experiences
          experienceData={data.experiences}
          educationData={data.educations}
        /> */}
        <Contact />
        <CallToAction callToActionData={data.callToAction} />
      </div>
      <Footer socials={data.socials} name={data.main.title} />
    </div>
  );
};

export default HomePage;
