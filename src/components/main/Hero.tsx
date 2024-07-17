"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import lottie from "lottie-web";

import lt_tfa from "@/src/assets/lottie/TFA.json";
import { main } from "@/src/types/main";
import WavyText from "../text/WavyText";
import Count from "../count/Count";
import GradientText from "../text/GradientText";
import GradientButton from "../button/GradientButton";
import HeroBg from "@/src/assets/img/herobg.jpg";
import authenticationIco from "@/src/assets/img/icon/authentication.png";
import firewallIco from "@/src/assets/img/icon/firewall.png";
import hackingIco from "@/src/assets/img/icon/hacking.png";
import passwordIco from "@/src/assets/img/icon/password.png";
import phishingIco from "@/src/assets/img/icon/phishing.png";
import virusIco from "@/src/assets/img/icon/virus.png";

interface HeroProps {
  mainData: main;
}

const Hero = ({ mainData }: HeroProps) => {
  const lt_tfa_container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lt_tfa_container.current) {
      lottie.loadAnimation({
        container: lt_tfa_container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lt_tfa,
      });
    }
  }, []);
  const { title, bio, shortDesc } = mainData;

  return (
    <section
      id="home"
      className="bg-white/70 dark:bg-grey-900/80 relative w-full mx-auto overflow-hidden mb-24"
    >
      <div className="absolute w-full h-full -z-10">
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-80% to-white dark:to-gray-900 -z-10"></div>
        <Image
          alt="profile"
          loading={"lazy"}
          className="object-cover -z-20"
          src={HeroBg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="py-16 lg:pt-48 lg:pb-24 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0">
          <GradientText
            className="text-4xl md:text-6xl font-bold relative mb-20"
            as="h1"
          >
            {title}
          </GradientText>
          <div className="flex flex-row items-start md:items-center gap-1.5 mb-2">
            <div className="text-xl font-semibold">
              <WavyText text={bio} replay={true} />
            </div>
          </div>
          <GradientText className="text-base" as="p">
            {shortDesc}
          </GradientText>
          <GradientButton
            as={ScrollLink}
            props={{
              to: "about",
              offset: -60,
              smooth: true,
              duration: 500,
              isDynamic: true,
            }}
          >
            Discover More
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform ml-2" />
          </GradientButton>
        </div>

        <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
          <div
            className="w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16"
            ref={lt_tfa_container}
          ></div>
          <div className="absolute grid -top-6 -left-12 lg:-top-14 lg:-left-32 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-grey-800 rounded-full place-items-center shadow-sm hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src={authenticationIco}
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid top-12 md:top-16 md:-left-20 -left-16 lg:top-10 lg:-left-40 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center shadow-sm hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src={firewallIco}
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid top-36 md:top-56 md:-left-12 -left-10 lg:top-56 lg:-left-32 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center shadow-sm hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src={passwordIco}
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid top-0 -right-12 lg:-right-4 w-14 h-14 bg-white dark:bg-grey-800 rounded-full place-items-center shadow-sm hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src={virusIco}
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid bottom-[4rem] md:bottom-24 -right-20 lg:bottom-[8.5rem] lg:-right-12 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-grey-800 rounded-full place-items-center shadow-sm hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-10 w-10 md:h-12 md:w-12 object-cover"
              src={hackingIco}
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid -bottom-10 -right-8 lg:-bottom-0 lg:right-6 w-14 md:w-16 h-14 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center shadow-sm hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-10 w-10 object-cover"
              src={phishingIco}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <svg
        className="absolute hidden md:block right-0 lg:bottom-40 bottom-[800px] translate-x-6 translate-y-4 opacity-25"
        width="186"
        height="186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M153.722 91.11c-1.137 0-2.085.948-2.085 2.148 0 1.138.948 2.085 2.149 2.085 1.2 0 2.084-.947 2.084-2.148 0-1.137-.947-2.085-2.148-2.085Zm0 30.455c-1.137 0-2.085.947-2.085 2.148 0 1.137.948 2.085 2.149 2.085 1.2 0 2.084-.948 2.084-2.149 0-1.137-.947-2.084-2.148-2.084Zm0 30.391c-1.137 0-2.085.947-2.085 2.148 0 1.137.948 2.085 2.149 2.085 1.2 0 2.084-.948 2.084-2.149 0-1.137-.947-2.084-2.148-2.084Zm0 30.706c-1.011 0-1.769.822-1.769 1.833 0 1.011.822 1.769 1.833 1.769 1.011 0 1.768-.821 1.768-1.833 0-1.011-.821-1.769-1.832-1.769Zm0-121.943a2.103 2.103 0 0 0-2.085 2.085c0 1.137.948 2.085 2.085 2.085a2.104 2.104 0 0 0 2.085-2.085c.063-1.138-.948-2.085-2.085-2.085Zm0-60.466c-1.011 0-1.769.82-1.769 1.832 0 1.011.822 1.77 1.833 1.77 1.011 0 1.768-.822 1.768-1.833 0-1.011-.821-1.769-1.832-1.769ZM93.198 90.226c-1.516 0-2.78 1.264-2.78 2.78 0 1.516 1.264 2.78 2.78 2.78 1.516 0 2.78-1.264 2.78-2.78 0-1.516-1.264-2.78-2.78-2.78Zm0 30.833c-1.326 0-2.464 1.137-2.464 2.401 0 1.327 1.138 2.338 2.464 2.338 1.327 0 2.464-1.138 2.464-2.338 0-1.39-1.137-2.401-2.464-2.401 0-.127 0-.127 0 0Zm0 30.581c-1.2 0-2.148 1.011-2.148 2.148 0 1.2 1.011 2.148 2.148 2.148 1.137 0 2.148-1.011 2.148-2.148a2.13 2.13 0 0 0-2.148-2.148Zm0 30.769a1.834 1.834 0 0 0 0 3.665 1.833 1.833 0 0 0 0-3.665Zm0-122.196c-1.326 0-2.4 1.138-2.4 2.465s1.136 2.4 2.463 2.4c1.327 0 2.401-1.137 2.401-2.4a2.468 2.468 0 0 0-2.464-2.465c0-.063 0-.063 0 0Zm0-60.213a1.833 1.833 0 0 0 0 3.664 1.832 1.832 0 0 0 0-3.664ZM62.936 91.11c-1.327 0-2.463 1.075-2.463 2.401 0 1.327 1.073 2.464 2.4 2.464s2.464-1.074 2.464-2.4c0-1.328-1.075-2.465-2.401-2.465Zm0 30.391c-1.327 0-2.463 1.075-2.463 2.401 0 1.327 1.073 2.464 2.4 2.464s2.464-1.073 2.464-2.401c0-1.327-1.075-2.464-2.401-2.464Zm0 30.708c-1.137 0-2.148.947-2.148 2.084 0 1.138.948 2.148 2.085 2.148s2.148-.948 2.148-2.084c0-1.201-.948-2.148-2.085-2.148Zm0 30.706c-1.011 0-1.832.758-1.832 1.769s.758 1.833 1.769 1.833c1.01 0 1.833-.758 1.833-1.769s-.76-1.833-1.77-1.833Zm0-122.196a2.4 2.4 0 0 0-2.4 2.401 2.4 2.4 0 1 0 4.801 0c0-1.264-1.075-2.4-2.401-2.4ZM32.674 91.426c-1.137 0-2.148.948-2.148 2.085 0 1.138.948 2.149 2.085 2.149s2.148-.948 2.148-2.086c.063-1.2-.948-2.211-2.085-2.148 0-.063 0-.063 0 0Zm0 30.391c-1.137 0-2.148.948-2.148 2.085 0 1.138.948 2.149 2.085 2.149s2.148-.949 2.148-2.086c.063-1.2-.948-2.211-2.085-2.148 0-.063 0-.063 0 0Zm0 30.392c-1.137 0-2.148.947-2.148 2.084 0 1.138.948 2.148 2.085 2.148s2.148-.948 2.148-2.084c.063-1.201-.948-2.212-2.085-2.148 0-.064 0-.064 0 0Zm0 30.706c-1.011 0-1.832.758-1.832 1.769s.758 1.833 1.77 1.833c1.01 0 1.83-.758 1.83-1.769.065-1.075-.757-1.896-1.768-1.833 0-.063 0-.063 0 0Zm90.849-152.271c-1.137 0-2.147.948-2.147 2.084 0 1.138.947 2.149 2.084 2.149 1.138 0 2.148-.947 2.148-2.085.063-1.2-.948-2.212-2.085-2.148 0-.064 0-.064 0 0ZM62.936.569c-1.011 0-1.832.758-1.832 1.769 0 1.01.758 1.832 1.769 1.832 1.01 0 1.833-.758 1.833-1.769.062-1.074-.76-1.895-1.77-1.832 0-.063 0-.063 0 0ZM2.412 91.679c-1.01 0-1.832.758-1.832 1.769 0 1.01.758 1.832 1.768 1.832 1.011 0 1.833-.758 1.833-1.769 0-1.01-.758-1.832-1.769-1.832Zm0 30.391c-1.01 0-1.832.758-1.832 1.769s.758 1.832 1.768 1.832c1.011 0 1.833-.758 1.833-1.769s-.758-1.832-1.769-1.832Zm0 30.391c-1.01 0-1.832.758-1.832 1.769s.758 1.832 1.768 1.832c1.011 0 1.833-.758 1.833-1.769s-.758-1.832-1.769-1.832Zm0 30.391c-1.01 0-1.832.758-1.832 1.769s.758 1.833 1.768 1.833c1.011 0 1.833-.759 1.833-1.77 0-1.011-.758-1.832-1.769-1.832Zm0-151.892c-1.01 0-1.832.821-1.832 1.768 0 .949.821 1.77 1.832 1.77 1.011 0 1.832-.821 1.832-1.77-.127-1.01-.82-1.768-1.832-1.768Zm0 30.39c-1.01 0-1.832.822-1.832 1.77 0 .948.821 1.77 1.832 1.77 1.011 0 1.832-.822 1.832-1.77-.127-1.01-.82-1.77-1.832-1.77Zm0-60.844C1.402.506.58 1.264.58 2.275c0 1.01.758 1.832 1.768 1.832 1.011 0 1.833-.759 1.833-1.77 0-1.01-.758-1.831-1.769-1.831ZM123.46 90.794a2.467 2.467 0 0 0-2.464 2.464 2.427 2.427 0 0 0 2.464 2.464 2.427 2.427 0 0 0 2.464-2.464 2.467 2.467 0 0 0-2.464-2.464Zm0 30.391c-1.327 0-2.464 1.138-2.464 2.464 0 1.327 1.137 2.464 2.464 2.464s2.464-1.137 2.464-2.464c0-1.326-1.137-2.464-2.464-2.464Zm0 30.707c-1.2 0-2.148 1.011-2.148 2.148 0 1.201 1.011 2.149 2.148 2.149 1.138 0 2.148-1.011 2.148-2.149 0-1.137-.948-2.148-2.148-2.148Zm0 30.77a1.833 1.833 0 1 0 1.833 1.833c0-1.075-.822-1.833-1.833-1.833Zm30.262-152.271c-1.137 0-2.147.948-2.147 2.085 0 1.138.947 2.085 2.147 2.085 1.201 0 2.148-.947 2.148-2.085 0-1.2-1.011-2.085-2.148-2.085ZM123.46 60.403c-1.327 0-2.4 1.138-2.4 2.464 0 1.327 1.136 2.402 2.463 2.402 1.327 0 2.401-1.138 2.401-2.465s-1.137-2.4-2.464-2.4Zm0-60.214c-1.011 0-1.832.822-1.832 1.77a1.833 1.833 0 0 0 3.665 0c0-.948-.822-1.77-1.833-1.77Zm60.525 91.3c-1.011 0-1.769.821-1.769 1.832 0 1.011.82 1.77 1.831 1.77 1.011 0 1.769-.822 1.769-1.833 0-1.01-.82-1.768-1.831-1.768Zm0 30.391c-1.011 0-1.769.822-1.769 1.833 0 1.011.82 1.769 1.831 1.769 1.011 0 1.769-.822 1.769-1.833 0-1.011-.82-1.769-1.831-1.769Zm0 30.391c-1.011 0-1.769.822-1.769 1.833 0 1.011.82 1.769 1.831 1.769 1.011 0 1.769-.822 1.769-1.833 0-1.011-.82-1.769-1.831-1.769Zm0 30.391c-1.011 0-1.769.822-1.769 1.833 0 1.011.82 1.769 1.831 1.769 1.011 0 1.769-.821 1.769-1.833 0-1.011-.82-1.769-1.831-1.769Zm0-151.955c-.949 0-1.769.821-1.769 1.77 0 .947.82 1.768 1.769 1.768.947 0 1.768-.821 1.768-1.769.063-1.01-.821-1.77-1.768-1.77Zm0-30.454c-1.011 0-1.769.82-1.769 1.832 0 1.011.82 1.77 1.831 1.77 1.011 0 1.769-.822 1.769-1.833 0-1.011-.82-1.769-1.831-1.769ZM32.674 61.035c-1.2 0-2.085.948-2.085 2.085s.948 2.085 2.085 2.085a2.103 2.103 0 0 0 2.084-2.085c.064-1.2-.947-2.085-2.084-2.085Zm0-60.466c-1.011 0-1.832.758-1.832 1.769 0 1.01.758 1.832 1.77 1.832 1.01 0 1.83-.758 1.83-1.769.065-1.074-.757-1.895-1.768-1.832 0-.063 0-.063 0 0ZM93.26 30.644c-1.137 0-2.148.948-2.148 2.084 0 1.138.948 2.149 2.085 2.149 1.138 0 2.148-.947 2.148-2.085.063-1.2-.948-2.212-2.085-2.148 0-.064 0-.064 0 0Zm-30.325 0a2.063 2.063 0 0 0-2.085 2.084c0 1.138.885 2.086 2.085 2.086s2.085-.884 2.085-2.086c.063-1.136-.884-2.084-2.085-2.084Zm-30.262 0c-1.2 0-2.085.948-2.085 2.084 0 1.138.948 2.086 2.085 2.086a2.103 2.103 0 0 0 2.084-2.086c.064-1.2-.884-2.084-2.084-2.084Zm151.311 30.455c-.949 0-1.769.82-1.769 1.768 0 .948.82 1.77 1.769 1.77.947 0 1.768-.822 1.768-1.77.063-1.01-.821-1.768-1.768-1.768Z"
          fill="url(#a)"
        ></path>
        <defs>
          <linearGradient
            id="a"
            x1="56.392"
            y1="0"
            x2="189.028"
            y2="2.312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D88E2"></stop>
            <stop offset="1" stopColor="#36EC74"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 mx-auto lg:pl-48">
        {mainData.statistic.map((item, i) => (
          <div key={i} className="rounded-lg text-center">
            <div className="mb-24">
              <h2 className="counter-num h-20">
                <Count
                  number={item.number}
                  className="text-center text-6xl font-semibold"
                />
              </h2>
              <GradientText as="h4" className="text-lg font-medium">
                {item.title}
              </GradientText>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
