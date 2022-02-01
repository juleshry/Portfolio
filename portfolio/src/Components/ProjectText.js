import React from "react";

import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";

export class ProjectText extends React.Component {
  constructor(props) {
    super(props);

    this.name = props.name;
    this.projectUrl = props.projectUrl;
    this.description = props.description;
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
          {this.name}
        </Typography>
        <div style={{ bottom: 0 }}>
          <Typography
            gutterBottom
            style={{
              alignItems: "end",
              bottom: 0,
              textAlign: "justify",
              textJustify: "auto",
            }}
          >
            {this.description}
          </Typography>
        </div>
      </Box>
    );
  }
}
