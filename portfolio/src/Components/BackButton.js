import React from "react";

import { Card } from "@mui/material";

export class BackButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth = Math.min(200, (window.innerWidth - 100) / 2);
    this.state.imageWidth = Math.min(200, (window.innerWidth - 100) / 2) * 0.7;
    this.state.imagePath =
      document.body.className == "light-theme"
        ? process.env.PUBLIC_URL + "/assets/blackArrow.png"
        : process.env.PUBLIC_URL + "/assets/whiteArrow.png";
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
      imageWidth: Math.min(200, (window.innerWidth - 100) / 2) * 0.7,
    });
  };

  back() {
    window.history.back();
  }

  render() {
    return (
      <Card
        onClick={this.back}
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
            textAlign: "center",
          }}
        >
          <img
            src={this.state.imagePath}
            alt="Folder"
            width={this.state.imageWidth}
            height={this.state.imageWidth}
            style={{}}
          />
        </div>
      </Card>
    );
  }
}
