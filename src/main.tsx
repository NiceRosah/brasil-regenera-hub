import React from "react";
import { createRoot } from "react-dom/client"; // <- CORRETO
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/brasil-regenera-hub">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
