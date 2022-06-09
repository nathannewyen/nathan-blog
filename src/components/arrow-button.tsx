import * as React from "react";
import { ArrowIcon } from "./icons";

const variants = {
  initial: { x: 0 },
  hover: { x: 8 },
  focus: { x: 12 },
  tap: { x: 24 },
};

const ArrowButton = () => {
  return (
    <svg width="60" height="60">
      <circle
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
        r="28"
        cx="30"
        cy="30"
      />
      <ArrowIcon direction="down" />
    </svg>
  );
};

export { ArrowButton };
