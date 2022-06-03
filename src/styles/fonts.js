import { css } from "styled-components";

import MatterRegularWoff from "../fonts/Matter/Matter-Regular.woff";
import MatterMediumWoff from "../fonts/Matter/Matter-Medium.woff";
import MatterSemiBoldWoff from "../fonts/Matter/Matter-SemiBold.woff";

const matterNormalWeights = {
  400: MatterRegularWoff,
  500: MatterMediumWoff,
  600: MatterSemiBoldWoff,
};

const matter = {
  name: "Matter",
  normal: matterNormalWeights,
};

const createFontFaces = (family, style = "normal") => {
  let styles = "";

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];

    styles += `
        @font-face {
          font-family: '${family.name}';
          src: url(${woff}) format('woff');
          font-weight: ${weight};
          font-style: ${style};
          font-display: auto;
        }
      `;
  }

  return styles;
};

const matterNormal = createFontFaces(matter);

const Fonts = css`
  ${matterNormal}
`;

export default Fonts;
