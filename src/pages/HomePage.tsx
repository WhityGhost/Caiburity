"use client";
import dynamic from "next/dynamic";
import { allData } from "@/src/types/main";
import Hero from "@/src/components/PageComponents/Hero/Hero";
import About from "@/src/components/PageComponents/About";
import Services from "@/src/components/PageComponents/Services/Services";
import Socials from "@/src/components/PageComponents/Socials";
import Contact from "@/src/components/PageComponents/Contact";
import CallToAction from "@/src/components/PageComponents/CallToAction";
import Footer from "../components/PageComponents/Footer";
import Projects from "@/src/components/PageComponents/Projects/Projects";
import Experiences from "@/src/components/PageComponents/Experiences/Experiences";
import data from "../../data";

const Header = dynamic(() => import("../components/PageComponents/Header"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div className="page text-center">
      <Header logo={data.main.title} />
      <div className="max-w-[1920px] mx-auto">
        <Hero mainData={data.main} />
        <Socials socials={data.socials} />
        <About aboutData={data.about} />
        <Services serviceData={data.services} />
        {/* <Projects projectsData={data.projects} />
        <Experiences
          experienceData={data.experiences}
          educationData={data.educations}
        /> */}
        <Contact />
        <CallToAction callToActionData={data.callToAction} />
      </div>
      <Footer socials={data.socials} />
    </div>
  );
};

export default HomePage;
