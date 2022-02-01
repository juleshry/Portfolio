import React from "react";

import Grid from "@mui/material/Grid";

import { Project } from "./Project";

export class Projects extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item>
          <Project name="Clouds" isLocal={true}></Project>
        </Grid>
        <Grid item>
          <Project name="Circles" isLocal={true}></Project>
        </Grid>
        <Grid item>
          <Project name="Alien_landscape" isLocal={true}></Project>
        </Grid>
        <Grid item>
          <Project name="Apso" isLocal={false}></Project>
        </Grid>
        <Grid item>
          <Project name="Rectangles" isLocal={true}></Project>
        </Grid>
      </Grid>
    );
  }
}
