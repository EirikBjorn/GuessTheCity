import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Game } from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <br></br>
    <Game />
  </React.StrictMode>
);
