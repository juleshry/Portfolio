import React from "react";

import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export class LargeProjectText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        m={1}
        height="100%"
        width="100%"
        alignItems="start"
      >
        <Typography variant="h4" className="largeProject">
          {this.state.name}
        </Typography>
        <div>
          <Typography
            gutterBottom
            className="largeProject"
            style={{
              alignItems: "end",
              paddingTop: 10,
              textAlign: "justify",
              textJustify: "auto",
              overflowX: "hidden",
              maxHeight: 200,
              width: "100%",
            }}
          >
            {this.state.description}
          </Typography>
        </div>
      </Box>
    );
  }
}
