import React from "react";

import { Modal } from "@mui/material";
import styled from "@emotion/styled";
import { Backdrop } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Project } from "./Projects/Project";

const TileStyle = {
  paddingRight: 12,
  paddingLeft: 12,
  paddingTop: 12,
  paddingBottom: 12,
};

export class FolderModal extends React.Component {
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
      <Modal
        open={this.props.openModal}
        onClose={this.props.handleClose}
        BackdropComponent={styled(Backdrop, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: (props, styles) => {
            return styles.backdrop;
          },
        })({
          zIndex: -10,
          backgroundColor: "rgb(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
        })}
      >
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
            <Project name="Clouds" isLocal={true}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Circles" isLocal={true}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Apso" isLocal={false}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Alien_landscape" isLocal={true}></Project>
          </Grid>
          <Grid item style={TileStyle}>
            <Project name="Rectangles" isLocal={true}></Project>
          </Grid>
        </Grid>
      </Modal>
    );
  }
}
