import { React, useState } from "react";
import "./index.css";
import "./App.css";
import { Navigation } from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Game } from "./components/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const dark = {
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    card: {
      default: "#301042",
    },
    text: {
      primary: "#ffffff",
    },
    accentColor: {
      main: "#7928A4",
      contrastText: "#fff",
    },
    btnColor: {
      main: "#7928A4",
      contrastText: "#fff",
    },
  },
};

const light = {
  palette: {
    background: {
      default: "#ffffff",
    },
    card: {
      default: "#ACAFAF",
    },
    mode: "light",
    btnColor: {
      main: "#474747",
      contrastText: "#fff",
    },
    accentColor: {
      main: "#474747",
      contrastText: "#fff",
    },
  },
};

export const App = () => {
  const [currTheme, setTheme] = useState(false);
  const appliedTheme = createTheme(currTheme ? light : dark);
  const setThemeFunc = () => {
    setTheme(!currTheme);
  };

  return (
    <div className="content-container">
      <ThemeProvider theme={appliedTheme}>
        <Navigation onClick={setThemeFunc} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
