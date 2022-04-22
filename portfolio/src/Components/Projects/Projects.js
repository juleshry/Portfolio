import React from "react";

import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import { Project } from "./Project";
import { FolderTile } from "../FolderTile";
import { BackButton } from "../BackButton";

const TileStyle = {
  paddingRight: 12,
  paddingLeft: 12,
  paddingTop: 12,
  paddingBottom: 12,
};

export class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.maxWidth =
      window.innerWidth < 600
        ? window.innerWidth - 30 + "px"
        : window.innerWidth < 820
        ? "550px"
        : "750px";
  }

  handleResize = () => {
    if (window.innerWidth < 600)
      this.setState({ maxWidth: window.innerWidth - 30 + "px" });
    else if (window.innerWidth < 820) this.setState({ maxWidth: "550px" });
    else this.setState({ maxWidth: "750px" });
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
          <Link to="/projects/P5js" style={{ textDecoration: "none" }}>
            <FolderTile text="P5js" />
          </Link>
        </Grid>
      </Grid>
    );
  }
}
