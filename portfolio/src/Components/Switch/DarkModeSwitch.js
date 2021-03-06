import React from "react";

import { Card, CardContent } from "@material-ui/core";

import Switch from "./Switch";

export class DarkModeSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.toggled = !(document.body.className === "light-theme");
    this.state.componentWidth = Math.min(200, (window.innerWidth - 100) / 2);
  }

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
          width: this.state.componentWidth,
          height: this.state.componentWidth,
          margin: 5,
          borderRadius: 25,
          WebkitUserSelect: "none",
        }}
      >
        <CardContent
          style={{
            margin: "auto",
            paddingTop: "0",
            paddingRight: "0",
            height: 0.4 * this.state.componentWidth + "px",
          }}
        >
          <Switch
            checked={this.state.toggled}
            handleToggle={() => {
              this.props.toggle();
              this.setState({ toggled: !this.state.toggled });
            }}
            dimensions={this.state.componentWidth}
            style={{ padding: "auto", cursor: "pointer" }}
          />
        </CardContent>
      </Card>
    );
  }
}
