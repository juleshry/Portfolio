import React from "react";

import { Card } from "@mui/material";

export class BackButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth = Math.min(200, (window.innerWidth - 100) / 2);
    this.state.imageWidth = Math.min(200, (window.innerWidth - 100) / 2) * 0.7;
    this.state.imageColor =
      document.body.className === "light-theme" ? "#000000" : "#ffffff";
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
            display: "table-cell",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/gwlkhzue.json"
            trigger="hover"
            colors={"primary:" + this.state.imageColor}
            state="hover-3"
            style={{ width: "100%", height: "100%", transform: "scaleX(-1)" }}
          ></lord-icon>
        </div>
      </Card>
    );
  }
}
