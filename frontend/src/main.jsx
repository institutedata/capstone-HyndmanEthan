import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PercsPrimaryTheme from "./styles/PercsPrimaryTheme.jsx";
import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={PercsPrimaryTheme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
);
