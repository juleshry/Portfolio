import React from "react";

import { Card, Typography } from "@mui/material";

import { Link } from "react-router-dom";

export class FolderTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth = Math.min(200, (window.innerWidth - 100) / 2);
    this.state.imageWidth = Math.min(200, (window.innerWidth - 100) / 2) * 0.5;
    this.state.title = window.innerWidth < 520 ? "h6" : "h5";
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
      imageWidth: Math.min(200, (window.innerWidth - 100) / 2) * 0.5,
    });
  };

  render() {
    let folderImagePath = process.env.PUBLIC_URL + "/assets/folder.png";

    return (
      <Card
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(230,230,230,0.1)",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
          maxWidth: this.state.componentWidth,
          height: this.state.componentWidth,
          margin: 5,
          borderRadius: 25,
          WebkitUserSelect: "none",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: this.state.componentWidth,
            margin: "auto",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          <img
            src={folderImagePath}
            alt="Folder"
            width={this.state.imageWidth}
            height={this.state.imageWidth}
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
    );
  }
}