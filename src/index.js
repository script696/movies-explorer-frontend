import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { UserProvider } from "./hooks/useUserContext";
import { MoviesProvider } from "./hooks/useMoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <MoviesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoviesProvider>
  </UserProvider>
);
