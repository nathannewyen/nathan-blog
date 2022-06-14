import * as React from "react";
import { ArrowIcon } from "./icons";
import { motion } from "framer-motion";

const variants = {
  down: { x: 17, y: 16 },
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
      <ArrowIcon isHovered={isHovered} variants={variants} direction="down" />
    </svg>
  );
};

export default ArrowButton;
