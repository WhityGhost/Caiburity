import React, { ElementType } from "react";

interface GradientTextProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  as: Tag = "h1",
  className = "",
}) => {
  return (
    <Tag
      className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-600 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default GradientText;
