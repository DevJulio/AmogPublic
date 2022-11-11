import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { FontsImport, theme } from "./theme/theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontsImport />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
