import Image from "next/image";
import { about } from "@/src/types/main";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";
import { BsShieldFillCheck } from "react-icons/bs";
import GradientButton from "../button/GradientButton";
import GradientText from "../text/GradientText";
import aboutImage from "@/src/assets/img/about.jpg";

interface Props {
  aboutData: about;
  name: string;
}

const About = ({ aboutData, name }: Props) => {
  const { titles, about, features } = aboutData;

  return (
    <SectionWrapper id="about" className="pt-12">
      <h2 className="text-4xl text-center font-semibold">About Our Company</h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="items-center mx-auto lg:mx-16">
          <Image
            alt="profile"
            loading={"lazy"}
            height={1400}
            width={1400}
            className="w-full h-60 md:h-80 object-cover grayscale hover:grayscale-0 transition-all bg-cyan-100 duration-500"
            src={aboutImage}
          />
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-sm md:text-2xl my-2 text-gray-600 dark:text-gray-300">
              {about}
            </p>
            <p>
              {titles.map((title, i) => (
                <span
                  key={i}
                  className="font-semibold text-cyan-500 w-fit py-1 px-2 text-sm dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-900/10"
                >
                  {title}
                </span>
              ))}
            </p>
            <ul className="flex flex-col mt-6">
              {features.map((feature, i) => (
                <li key={i} className="my-4">
                  <h5 className="flex items-center gap-4">
                    <BsShieldFillCheck className="dark:text-cyan-300 text-cyan-500 text-3xl" />
                    <GradientText as="span" className="text-xl">
                      {feature.title}
                    </GradientText>
                  </h5>
                  <p className="pl-12 py-4">{feature.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
