import React from "react";

import Grid from "@mui/material/Grid";

import { Project } from "./Projects/Project";
import { DarkModeSwitch } from "./Switch/DarkModeSwitch";

export class Tiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
          maxWidth="700px"
          margin="auto"
        >
          <Grid item>
            <Project name="Clouds" isLocal={true}></Project>
          </Grid>
          <Grid item>
            <Project name="Circles" isLocal={true}></Project>
          </Grid>
          <Grid item>
            <Project name="Apso" isLocal={false}></Project>
          </Grid>
          <Grid item>
            <Project name="Alien_landscape" isLocal={true}></Project>
          </Grid>
          <Grid item>
            <Project name="Rectangles" isLocal={true}></Project>
          </Grid>
          <Grid item>
            <DarkModeSwitch />
          </Grid>
        </Grid>
      </div>
    );
  }
}
