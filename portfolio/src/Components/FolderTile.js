import React from "react";

import { Card, Typography } from "@mui/material";
import { FolderModal } from "./FolderModal";

export class FolderTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth = Math.min(200, (window.innerWidth - 100) / 2);
    this.state.imageWidth = Math.min(200, (window.innerWidth - 100) / 2) * 0.5;
    this.state.title = window.innerWidth < 520 ? "h6" : "h5";
    this.state.openModal = false;
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      componentWidth: Math.min(200, (window.innerWidth - 100) / 2),
      title: window.innerWidth < 520 ? "h6" : "h5",
      imageWidth: Math.min(200, (window.innerWidth - 100) / 2) - 50,
    });
  };

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  render() {
    let folderImagePath = process.env.PUBLIC_URL + "/assets/folder.png";
    return (
      <>
        <Card
          onClick={this.handleOpen}
          style={{
            position: "relative",
            display: "flex",
            backgroundColor: "rgba(230,230,230,0.1)",
            backgroundImage:
              "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
            WebkitBackdropFilter: "blur(10px)",
            backdropFilter: "blur(10px)",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
            borderLeft: "solid 1px rgba(255,255,255,0.3)",
            borderTop: "solid 1px rgba(255,255,255,0.8)",
            maxWidth: this.state.componentWidth,
            height: this.state.componentWidth,
            margin: 5,
            borderRadius: 25,
            WebkitUserSelect: "none",
            cursor: "pointer",
          }}
        >
          <div style={{ width: this.state.componentWidth, margin: "auto" }}>
            <img
              src={folderImagePath}
              alt="Folder"
              width={this.state.imageWidth}
              height={this.state.imageWidth}
              style={{
                display: "block",
                margin: "auto",
              }}
            />
            <Typography
              className="tileText"
              variant={this.state.title}
              style={{
                display: "flex",
                margin: "10px",
                justifyContent: "center",
              }}
            >
              {this.state.text}
            </Typography>
          </div>
        </Card>
        <FolderModal
          openModal={this.state.openModal}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}
