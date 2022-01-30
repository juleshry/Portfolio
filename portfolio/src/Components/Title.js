import React from "react";
import Typography from "@material-ui/core/Typography";

export class Title extends React.Component {
  render() {
    return (
      <Typography variant="h1" component="div" gutterBottom>
        THIS IS MY <br />
        PORTFOLIO
      </Typography>
    );
  }
}
