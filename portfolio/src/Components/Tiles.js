import React from "react";

import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import { DarkModeSwitch } from "./Switch/DarkModeSwitch";
import { FolderTile } from "./FolderTile";
import { linkPefix } from "../App";
import { MeCard } from "./Me/MeCard";

const TileStyle = {
  padding: 12,
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
    this.state.toggled = false;

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleResize = () => {
    if (window.innerWidth < 600)
      this.setState({ maxWidth: window.innerWidth - 30 + "px" });
    else if (window.innerWidth < 820) this.setState({ maxWidth: "550px" });
    else this.setState({ maxWidth: "700px" });
  };

  handleSwitch() {
    this.setState({ toggled: !this.state.toggled });
    if (!this.state.toggled) {
      document.body.classList.toggle("dark-theme", true);
      document.body.classList.toggle("light-theme", false);
    } else {
      document.body.classList.toggle("dark-theme", false);
      document.body.classList.toggle("light-theme", true);
    }
  }

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
          <MeCard />
        </Grid>
        <Grid item style={TileStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Link
              to={linkPefix + "/projects"}
              style={{ textDecoration: "none" }}
            >
              <FolderTile
                text="Projects"
                color={
                  document.body.className !== "light-theme"
                    ? "#ffffff"
                    : "#000000"
                }
              />
            </Link>
            <DarkModeSwitch toggle={this.handleSwitch} />
          </div>
        </Grid>
      </Grid>
    );
  }
}
