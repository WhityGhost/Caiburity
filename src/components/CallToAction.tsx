import { useTheme } from "next-themes";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import GradientText from "./text/GradientText";
import GradientButton from "./button/GradientButton";
import CallImg from "@/src/assets/img/secured-access-accessibility-analysising-browsing-concept.jpg";
import { callToAction } from "../types/main";
import Count from "./count/Count";

interface Props {
  callToActionData: callToAction;
}

const CallToAction = ({ callToActionData }: Props) => {
  const { theme } = useTheme();

  return (
    <SectionWrapper
      id="cta"
      className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col-reverse md:flex-row gap-3 md:gap-0 items-center \
      bg-gradient-to-br from-cyan-100 dark:from-cyan-900 via-gray-100 dark:via-gray-900 to-violet-100 dark:to-violet-900 \
      text-gray-900 dark:text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:pt-16 z-10"
    >
      <div className="flex flex-col md:w-1/2 lg:w-3/5">
        <h2 className="text-2xl lg:text-4xl font-extrabold">
          Why choose <GradientText as="span">Caiburity?</GradientText>{" "}
        </h2>
        <h3 className="text-base md:text-xl lg:text-2xl my-6 text-gray-600 dark:text-gray-300 text-left">
          {callToActionData.shortDesc}
        </h3>
        <p className="text-base text-left px-2">{callToActionData.desc}</p>
        <div className="flex items-center gap-4 my-6">
          <GradientButton>Get your services</GradientButton>
          <GradientButton secondary>Contact Us</GradientButton>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-96 mb-4 md:mb-0 mx-auto rounded-lg">
        <Image
          alt="Fork this template on Github"
          quality={100}
          width={1000}
          height={1000}
          className="w-full h-full mt-2 object-cover object-top rounded-lg"
          src={CallImg}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full mt-6">
          {callToActionData.statistic.map((item, i) => (
            <div key={i} className="rounded-lg text-center">
              <h2 className="counter-num h-14">
                <Count
                  number={item.number}
                  className="text-center text-5xl font-semibold"
                />
              </h2>
              <GradientText as="h4" className="text-base font-medium">
                {item.title}
              </GradientText>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute -bottom-10 -right-6 h-72 w-96 rounded-lg bg-white"></div> */}
    </SectionWrapper>
  );
};

export default CallToAction;
