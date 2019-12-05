import React from "react";
import { ThemeProvider, CSSReset, Button } from "@chakra-ui/core";
import customTheme from "./theme/customTheme";
import Main from "./layout/Main";

const App: React.FC = props => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Main />
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default App;
