import React from "react";
import Link from "next/link";
import * as Fa from "react-icons/fa";
import { social } from "@/src/types/main";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GradientLink } from "../BaseComponents/Button/GradientButton";

const Socials = ({ socials }: { socials: social[] }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="socials"
      className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20"
    >
      {socials.map((s: social, i) => {
        return (
          <motion.div
            key={i}
            ref={ref}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                },
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 0.8,
                  delay: 0.2 * i,
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <GradientLink
              props={{
                href: s.link,
                target: "_blank",
                rel: "noreferrer",
              }}
              as={Link}
              className="grid place-items-center p-3 transition-all rounded-3xl text-white"
            >
              {
                //@ts-ignore
                React.createElement(Fa[`${s.icon}`])
              }
            </GradientLink>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Socials;
