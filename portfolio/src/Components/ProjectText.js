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
        alignItems="start"
      >
        <Typography variant="h4">{this.name}</Typography>
        <hr />

        <Typography gutterBottom style={{ alignItems: "flex-end", bottom: 0 }}>
          {this.description}
        </Typography>
      </Box>
    );
  }
}
