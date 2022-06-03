import React from 'react';
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from "@styles";
import Header from "./header";

const Layout = () => {
    return (
        <>
          <div id="root">
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Header />
            </ThemeProvider>
          </div>
        </>
      );
};
    
export default Layout;