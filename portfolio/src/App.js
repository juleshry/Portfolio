import "./App.css";

import React from "react";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Appbar } from "./Components/Appbar/Appbar";
import { Tiles } from "./Components/Tiles";
import { Background } from "./background";
import { Projects } from "./Components/Projects/Projects";
import { P5js } from "./Components/Projects/P5js/P5js";

export const linkPefix = "/Portfolio";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Sora", "Montserrat", "serif"].join(","),
    },
    overrides: {
      MuiCard: {
        root: {
          display: "flex",
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
          borderRadius: 25,
          height: 200,
          margin: 5,
          WebkitUserSelect: "none",
        },
      },
      MuiCardMedia: {
        root: {
          margin: "200px",
        },
      },
      MuiTypography: {
        body1: {
          fontSize: pxToRem(15),
        },
        body2: { fontSize: pxToRem(14) },
        h4: { fontSize: pxToRem(32) },
        h5: { fontSize: pxToRem(24) },
        h6: { fontSize: pxToRem(18) },
        subtitle2: { fontSize: pxToRem(18) },
      },
      MuiCardContent: {
        root: {
          paddingLeft: 0,
        },
      },
    },
    props: { MuiButtonBase: { disableRipple: true } },
  })
);

function App() {
  return (
    <>
      <Background />
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Appbar />
          <Router>
            <Routes>
              <Route exact path={linkPefix + "/"} element={<Tiles />} />
              <Route path={linkPefix + "/projects"} element={<Projects />} />
              <Route path={linkPefix + "/projects/P5js"} element={<P5js />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
