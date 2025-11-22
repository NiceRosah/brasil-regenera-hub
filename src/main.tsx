import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/brasil-regenera-hub">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
