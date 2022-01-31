import React from "react";
import Typography from "@material-ui/core/Typography";

export class Title extends React.Component {
  render() {
    return (
      <div style={{ "-webkit-user-select": "none" }}>
        <Typography variant="h2" component="div" gutterBottom>
          THIS IS MY
        </Typography>
        <Typography variant="h2" component="div" gutterBottom>
          PORTFOLIO
        </Typography>
      </div>
    );
  }
}
