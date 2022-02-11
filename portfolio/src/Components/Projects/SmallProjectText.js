import React from "react";

import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export class SmallProjectText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth =
      Math.min(200, (window.innerWidth - 100) / 2) * (3 / 4);
    this.state.componentHeight =
      Math.min(200, (window.innerWidth - 100) / 2) * 0.55;
    this.state.title = window.innerWidth < 520 ? "h6" : "h5";
    this.state.corps = window.innerWidth < 520 ? "body2" : "body1";
  }

  handleResize = () => {
    this.setState({
      componentWidth: Math.min(200, (window.innerWidth - 100) / 2) * (3 / 4),
      componentHeight: Math.min(200, (window.innerWidth - 100) / 2) * 0.55,
    });
    if (window.innerWidth < 520) {
      this.setState({ title: "h6", corps: "body2" });
    } else {
      this.setState({ title: "h5", corps: "body1" });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        m={1}
        height="100%"
      >
        <Typography variant={this.state.title}>{this.state.name}</Typography>
        <div>
          <Typography
            gutterBottom
            variant={this.state.corps}
            style={{
              alignItems: "end",
              textAlign: "justify",
              textJustify: "auto",
              maxHeight: this.state.componentHeight,
              width: 0.95 * this.state.componentWidth,
            }}
          >
            {this.state.description}
          </Typography>
        </div>
      </Box>
    );
  }
}
