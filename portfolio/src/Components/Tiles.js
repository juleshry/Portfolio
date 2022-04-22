import React from "react";

import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import { DarkModeSwitch } from "./Switch/DarkModeSwitch";
import { FolderTile } from "./FolderTile";
import { linkPefix } from "../App";

const TileStyle = {
  paddingRight: 12,
  paddingLeft: 12,
  paddingTop: 12,
  paddingBottom: 12,
};

export class Tiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.maxWidth =
      window.innerWidth < 600
        ? window.innerWidth - 30 + "px"
        : window.innerWidth < 820
        ? "550px"
        : "700px";
  }

  handleResize = () => {
    if (window.innerWidth < 600)
      this.setState({ maxWidth: window.innerWidth - 30 + "px" });
    else if (window.innerWidth < 820) this.setState({ maxWidth: "550px" });
    else this.setState({ maxWidth: "700px" });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        spacing={3}
        justifyContent="center"
        maxWidth={this.state.maxWidth}
        margin="auto"
        marginBottom={3}
      >
        <Grid item style={TileStyle}>
          <Link to={linkPefix + "/projects"} style={{ textDecoration: "none" }}>
            <FolderTile text="Projects" />
          </Link>
        </Grid>
        <Grid item style={TileStyle}>
          <DarkModeSwitch />
        </Grid>
      </Grid>
    );
  }
}
