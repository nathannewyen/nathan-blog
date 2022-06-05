import * as React from "react";
import styled from "styled-components";

const MoonWrapper = styled.div`
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

function MoonIcon() {
  return (
    <MoonWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </MoonWrapper>
  );
}

export { MoonIcon };
