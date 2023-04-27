import React from "react";
import ReactDOM from "react-dom/client";
import App from "@app/components/App";
import "@fontsource/red-hat-text";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
