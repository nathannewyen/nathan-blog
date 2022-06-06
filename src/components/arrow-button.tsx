import * as React from "react";
import { ArrowIcon } from "./icons";

const ArrowButton = () => {
  return (
    <div>
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
    </div>
  );
};

export { ArrowButton };
