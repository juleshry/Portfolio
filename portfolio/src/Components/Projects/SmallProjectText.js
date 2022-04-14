import React from "react";

import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export class SmallProjectText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth =
      Math.min(200, (window.innerWidth - 100) / 2) * (3 / 4);
    this.state.title = window.innerWidth < 520 ? "h5" : "h4";
  }

  handleResize = () => {
    this.setState({
      componentWidth: Math.min(200, (window.innerWidth - 100) / 2) * (3 / 4),
    });
    if (window.innerWidth < 520) {
      this.setState({ title: "h5" });
    } else {
      this.setState({ title: "h4" });
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
        ml={2.5}
        height="100%"
        width="100%"
      >
        <Typography
          variant={this.state.title}
          noWrap
          style={{
            whiteSpace: "pre-line",
            maxWidth: this.state.componentWidth,
          }}
        >
          {this.state.name}
        </Typography>
      </Box>
    );
  }
}
