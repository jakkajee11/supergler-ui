import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "./themes/customTheme";
import routes from "./routes/routes";
import history from "./routes/history";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Router history={history}>{routes}</Router>
      </ThemeProvider>
    </>
  );
};

export default App;
