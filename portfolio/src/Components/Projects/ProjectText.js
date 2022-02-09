import React from "react";

import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export class ProjectText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.componentWidth =
      Math.min(200, (window.innerWidth - 100) / 2) * (3 / 4);
    this.state.componentHeight =
      Math.min(200, (window.innerWidth - 100) / 2) * 0.55;
  }

  handleResize = () => {
    this.setState({
      componentWidth: Math.min(200, (window.innerWidth - 100) / 2) * (3 / 4),
      componentHeight: Math.min(200, (window.innerWidth - 100) / 2) * 0.55,
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        m={1}
        height="100%"
        alignItems="start"
      >
        <Typography variant="h4" style={{ top: 0 }}>
          {this.state.name}
        </Typography>
        <div>
          <Typography
            gutterBottom
            style={{
              alignItems: "end",
              paddingTop: 10,
              textAlign: "justify",
              textJustify: "auto",
              overflowX: "hidden",
              maxHeight: this.state.componentHeight,
              width: this.state.componentWidth,
            }}
          >
            {this.state.description}
          </Typography>
        </div>
      </Box>
    );
  }
}
