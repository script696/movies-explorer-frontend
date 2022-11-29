import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { MainApiProvider } from "./hooks/useMainApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainApiProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainApiProvider>
);
