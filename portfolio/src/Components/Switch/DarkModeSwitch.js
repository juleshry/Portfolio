import React from "react";

import { Card, CardContent } from "@material-ui/core";

import Switch from "./Switch";

export class DarkModeSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.toggled = false;
    this.state.componentWidth = Math.min(200, (window.innerWidth - 100) / 2);
  }

  handleShow = () => {
    this.setState({ isShown: true });
  };

  handleHide = () => {
    this.setState({ isShown: false });
  };

  handleResize = () => {
    this.setState({
      componentWidth: Math.min(200, (window.innerWidth - 100) / 2),
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <Card
        style={{
          display: "flex",
          backgroundColor: "rgba(230,230,230,0.1)",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
          borderLeft: "solid 1px rgba(255,255,255,0.3)",
          borderTop: "solid 1px rgba(255,255,255,0.8)",
          width: this.state.componentWidth,
          height: this.state.componentWidth,
          margin: 5,
          borderRadius: 15,
          WebkitUserSelect: "none",
        }}
      >
        <CardContent style={{ margin: "auto", marginTop: "18%" }}>
          <Switch
            checked={this.state.toggled}
            onChange={(e) => {
              this.setState({ toggled: e.target.checked });
            }}
          />
        </CardContent>
      </Card>
    );
  }
}