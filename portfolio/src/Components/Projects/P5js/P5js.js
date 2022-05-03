import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import { Project } from "../Project";
import { BackButton } from "../../BackButton";

let P5Projects = require("./P5.json");

const TileStyle = {
  paddingRight: 12,
  paddingLeft: 12,
  paddingTop: 12,
  paddingBottom: 12,
};

export class P5js extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.maxWidth =
      window.innerWidth < 600
        ? window.innerWidth - 30 + "px"
        : window.innerWidth < 820
        ? "550px"
        : "750px";
    this.state.textColor =
      document.body.className === "light-theme" ? "#000000" : "#ffffff";
    this.state.textMaxWidth =
      window.innerWidth < 600
        ? "100%"
        : window.innerWidth < 820
        ? "80%"
        : "60%";
    this.state.textSize =
      window.innerWidth < 600 ? "h6" : window.innerWidth < 820 ? "h5" : "h4";
  }

  handleResize = () => {
    if (window.innerWidth < 600)
      this.setState({
        maxWidth: window.innerWidth - 30 + "px",
        textMaxWidth: "100%",
        textSize: "h6",
      });
    else if (window.innerWidth < 820)
      this.setState({ maxWidth: "550px", textMaxWidth: "80%", textSize: "h5" });
    else
      this.setState({ maxWidth: "750px", textMaxWidth: "60%", textSize: "h4" });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <>
        <Typography
          variant={this.state.textSize}
          style={{
            margin: "auto",
            maxWidth: this.state.textMaxWidth,
            textAlign: "center",
            color: this.state.textColor,
          }}
        >
          {P5Projects.Description}
        </Typography>
        <Grid
          className="overFlowY"
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          width={this.state.maxWidth}
          margin="auto"
          style={{
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            outline: "none",
          }}
        >
          <Grid item style={TileStyle}>
            <BackButton />
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Clouds" isLocal={true}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Alien_landscape" isLocal={true}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Circles" isLocal={true}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Rectangles" isLocal={true}></Project>
          </Grid>
        </Grid>
      </>
    );
  }
}
