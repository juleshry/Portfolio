import React from "react";

import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export class ProjectText extends React.Component {
  constructor(props) {
    super(props);

    this.name = props.name;
    this.projectUrl = props.projectUrl;
    this.description = props.description;
  }

  render() {
    //if (this.name.split(" ").length > 1)
    //this.name = this.name.split(" ")[0] + " ...";
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
        <div>
          <Typography
            gutterBottom
            style={{
              alignItems: "end",
              paddingTop: 10,
              textAlign: "justify",
              textJustify: "auto",
              overflowX: "hidden",
              maxHeight: 110,
              minWidth: 150,
            }}
          >
            {this.description}
          </Typography>
        </div>
      </Box>
    );
  }
}
