import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles";
import { Header, Hero } from "@components";

const Layout = () => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
