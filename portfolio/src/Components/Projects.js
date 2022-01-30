import React from "react";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

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
          <Project name="Rectangles"></Project>
        </Grid>
        <Grid item>
          <Project name="Circles"></Project>
        </Grid>
      </Grid>
    );
  }
}
