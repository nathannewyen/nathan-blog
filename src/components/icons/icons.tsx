import React from "react";
import PropTypes from "prop-types";
import { IconGitHub, IconExternal } from "@components/icons";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
