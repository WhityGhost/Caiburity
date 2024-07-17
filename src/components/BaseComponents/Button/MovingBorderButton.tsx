"use client";

import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { cn } from "@/src/utils/cn";

type ButtonProps = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  borderStyle?: Object;
  onClick?: Function;
  [key: string]: any;
};

export const MovingBorderButton = ({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  borderStyle,
  onClick,
  ...otherProps
}: ButtonProps) => {
  return (
    <Component
      onClick={onClick}
      className={cn(
        "relative overflow-hidden text-xl p-[1.5px] shadow-sm group cursor-pointer\
        bg-gradient-to-br from-cyan-100 dark:from-cyan-900 via-gray-100 dark:via-gray-900 to-violet-100 dark:to-violet-900",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="10%" ry="10%">
          <div
            className={cn(
              "h-40 w-40 opacity-[0.8] group-hover:h-96 group-hover:w-96",
              borderClassName
            )}
            style={borderStyle}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "w-full h-full relative flex items-center justify-centerborder border-none dark:border-slate-800 text-sm text-white antialiased \
          backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 group-hover:bg-white/40 dark:group-hover:bg-slate-900/40 \
          transition-all duration-300",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

type MovingBorderProps = {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
};

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
