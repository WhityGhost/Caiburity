import { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = ({
  children,
  id,
  className,
  duration = 0.6,
  delay = 0,
  as = "section",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeInOut", duration, delay },
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const tagMap = {
    section: motion.section,
    div: motion.div,
  };

  const Tag = tagMap[as as keyof typeof tagMap];

  return (
    <Tag
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id={id}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default SectionWrapper;
