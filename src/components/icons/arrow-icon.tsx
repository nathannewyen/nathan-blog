import * as React from "react";

export interface ArrowIconProps {
  direction: "up" | "right" | "down" | "left" | "top-right";
  size?: number;
  className?: string;
}

export const rotationMap = {
  up: "rotate-180",
  right: "-rotate-90",
  down: "rotate-0",
  left: "rotate-90",
  "top-right": "-rotate-135",
};

function ArrowIcon({ size = 32 }: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 17l-4 4m0 0l-4-4m4 4V3"
      />
    </svg>
  );
}

export default ArrowIcon;
