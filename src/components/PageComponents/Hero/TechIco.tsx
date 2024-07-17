import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

const TechIco = ({
  image,
  className,
}: {
  image: StaticImageData;
  className: string;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const techIcoVariants = {
    hidden: { opacity: 0, y: 12 + 60 * Math.random() },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={techIcoVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      <Image
        loading={"lazy"}
        alt="tech-stack"
        className="h-8 w-8 md:h-10 md:w-10 object-cover"
        src={image}
        width={100}
        height={100}
      />
    </motion.div>
  );
};

export default TechIco;
