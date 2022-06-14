import * as React from "react";
import { motion } from "framer-motion";

export interface ArrowIconProps {
  direction: "up" | "right" | "down" | "left" | "top-right";
  size?: number;
  isHovered?: boolean;
  variants: any;
  [key: string]: any;
}

export const rotationMap = {
  up: "rotate-180",
  right: "-rotate-90",
  down: "rotate-0",
  left: "rotate-90",
  "top-right": "-rotate-135",
};

const ArrowIcon = ({ size = 25, isHovered, variants }: ArrowIconProps) => {
  return (
    <svg
      width={size}
      height={isHovered ? 32 : size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      x={variants.down.x}
      y={variants.down.y}
    >
      <motion.path
        initial={false}
        animate={{ y: isHovered ? 2 : 0 }}
        fillRule="evenodd"
        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowIcon;
