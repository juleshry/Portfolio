import React from "react";

import Grid from "@mui/material/Grid";

import { Project } from "./Project";

export class Projects extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item>
          <Project name="Clouds"></Project>
        </Grid>
        <Grid item>
          <Project name="Alien_landscape"></Project>
        </Grid>
        <Grid item>
          <Project name="Circles"></Project>
        </Grid>
        <Grid item>
          <Project name="Rectangles"></Project>
        </Grid>
        <Grid item>
          <Project
            name="Apso"
            link="https://my.spline.design/apso2copy-01a016f685dbedeb6a5090d2535b4e39/"
          ></Project>
        </Grid>
      </Grid>
    );
  }
}
