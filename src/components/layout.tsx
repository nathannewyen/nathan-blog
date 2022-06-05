import React from "react";
import { GlobalStyle } from "@styles";
import { Header, Hero } from "@components";

const Layout = () => {
  return (
    <div id="root">
      <GlobalStyle />
      <Header />
      <Hero />
    </div>
  );
};

export default Layout;
