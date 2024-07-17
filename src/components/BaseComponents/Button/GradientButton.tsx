import { cn } from "@/src/utils/cn";
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  as?: any;
  props?: Object;
  onClick?: Function;
  secondary?: boolean;
}

const GradientButton = ({
  children,
  as: Tag = "button",
  href: link = "",
  onClick,
  props,
  className,
  secondary = false,
}: GradientButtonProps) => {
  return secondary ? (
    <Tag
      onClick={onClick}
      href={link}
      className={cn(
        "relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 group \
            transition duration-300 ease-out rounded-full shadow-xl group ring-cyan-500 ring-1 hover:ring-1 hover:ring-blue-500 w-fit text-sm cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-600/5 via-cyan-600/20 to-green-700/5"></span>
      <span
        className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left
                  transform rotate-45 translate-x-24 bg-white group-hover:bg-cyan-700 dark:group-hover:bg-cyan-400 group-hover:opacity-80 rounded-full opacity-10 group-hover:rotate-90 ease"
      ></span>
      <span className="relative flex items-center text-white">{children}</span>
    </Tag>
  ) : (
    <Tag
      onClick={onClick}
      href={link}
      className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600
              transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-blue-500 w-fit text-sm cursor-pointer"
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-cyan-600 to-green-700"></span>
      <span
        className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left
                    transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"
      ></span>
      <span className="relative flex items-center text-white">{children}</span>
    </Tag>
  );
};

interface GradientLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  as?: any;
  props?: Object;
  onClick?: Function;
  secondary?: boolean;
}

const GradientLink = ({
  children,
  as: Tag = "a",
  href: link = "",
  onClick,
  props,
  className,
  secondary = false,
}: GradientLinkProps) => {
  return secondary ? (
    <Tag
      onClick={onClick}
      href={link}
      className={cn(
        "relative inline-flex items-center justify-center p-3 overflow-hidden font-medium text-cyan-600 group \
            transition duration-300 ease-out rounded-full shadow-xl group ring-cyan-500 ring-1 hover:ring-1 hover:ring-blue-500 w-fit text-sm cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-600/5 via-cyan-600/20 to-green-700/5"></span>
      <span
        className="absolute bottom-0 right-0 block w-12 h-12 mb-32 mr-4 transition duration-500 origin-bottom-left
                  transform rotate-45 translate-x-24 bg-white group-hover:bg-cyan-700 dark:group-hover:bg-cyan-400 group-hover:opacity-80 rounded-full opacity-10 group-hover:rotate-90 ease"
      ></span>
      <span className="relative flex items-center text-white">{children}</span>
    </Tag>
  ) : (
    <Tag
      onClick={onClick}
      href={link}
      className="relative inline-flex items-center justify-center p-3 overflow-hidden font-medium text-cyan-600
              transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-blue-500 w-fit text-sm cursor-pointer"
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-cyan-600 to-green-700"></span>
      <span
        className="absolute bottom-0 right-0 block w-12 h-12 -translate-y-5 transition duration-500 origin-bottom-left
                    transform translate-x-[0.3rem] bg-pink-500 rounded-full opacity-30 group-hover:translate-y-0 ease"
      ></span>
      <span className="relative flex items-center text-white">{children}</span>
    </Tag>
  );
};

export { GradientLink };
export default GradientButton;
