import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import { service } from "@/src/types/main";
import { useTheme } from "next-themes";
import lottie from "lottie-web";
import { MovingBorderButton } from "../button/MovingBorderButton";
import GradientText from "../text/GradientText";

interface Props {
  service: service;
}

const Service = ({ service }: Props) => {
  const lt_container = useRef<HTMLDivElement | null>(null);
  if (service.lottieImg) {
    let animLoaded = false;

    useEffect(() => {
      if (lt_container.current && !animLoaded) {
        lottie.loadAnimation({
          container: lt_container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require(`@/src/assets/lottie/${service.lottieImg}.json`),
        });
        animLoaded = true;
      }
    }, []);
  }
  const { theme } = useTheme();

  return (
    <MovingBorderButton
      as="div"
      className={
        "flex flex-col w-full justify-between items-center gap-2 group p-4"
      }
      containerClassName={
        (service.rowSpan && service.rowSpan > 1
          ? " row-span-" + service.rowSpan
          : "") +
        (service.colSpan && service.colSpan > 1
          ? " col-span-" + service.colSpan
          : "")
      }
      borderRadius="1.75rem"
      duration={Math.floor(Math.random() * 10000 + 10000)}
      borderStyle={{
        background:
          "radial-gradient(#06B6D4 10%, #12855BD0 20%, #5933CEA0 40%, transparent 60%)",
      }}
    >
      {lottie ? (
        <div
          className="flex-1 w-full max-w-[20rem] flex-col mb-4"
          ref={lt_container}
        ></div>
      ) : (
        <></>
      )}
      <div className="h-24">
        <GradientText className="text-sm md:text-xl" as="h3">
          {service.name}
        </GradientText>
        <p className="block mb-4 font-sans text-base antialiased font-semibold leading-snug tracking-normal text-gray-400">
          {service.desc}
        </p>
      </div>
    </MovingBorderButton>
  );
};

export default Service;
