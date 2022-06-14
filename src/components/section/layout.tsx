import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles";
import { Header, Hero, About } from "@/components/section";

const Layout = () => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <About />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
