import * as React from "react";
import { ArrowIcon } from "./icons";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  initial: { x: 0 },
  hover: { x: 8 },
  focus: { x: 12 },
  tap: { x: 24 },
};

const ArrowButton = (props) => {
  const { isHovered, loading } = props;

  return (
    <svg width="60" height="60">
      <circle
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
        r="28"
        cx="30"
        cy="30"
        opacity={0.1}
      />
      <motion.circle
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
        r="28"
        cx="30"
        cy="30"
        variants={loading}
      />
      <ArrowIcon isHovered={isHovered} direction="down" />
    </svg>
  );
};

export { ArrowButton };
