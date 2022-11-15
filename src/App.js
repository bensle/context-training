import FunctionContextComponent from "./FunctionContextComponent";
import React from "react";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

export default App;
