import { useState } from "react";
import { services } from "@/src/types/main";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../SectionWrapper";
import GradientButton from "../../BaseComponents/Button/GradientButton";

interface Props {
  serviceData: services;
}

const Services = ({ serviceData }: Props) => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <SectionWrapper id="services" className="my-24 mx-4 md:mx-0">
      <h2 className="text-4xl text-center font-semibold">Our service</h2>
      <div className="flex items-center justify-center gap-12 p-12">
        <p className="text-sm md:text-2xl my-2 text-gray-600 dark:text-gray-300">
          {serviceData.shortDesc}
        </p>
        <GradientButton
          onClick={() => {
            setViewAll(!viewAll);
          }}
        >
          View all services
        </GradientButton>
      </div>
      <div className="grid gap-4 items-stretch justify-center px-6 sm:px-12 lg:px-48 mb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.main.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
