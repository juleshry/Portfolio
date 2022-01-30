import React from "react";
import "./Title.css";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Sora", "serif"].join(","),
  },
});

export class Title extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ fontWeight: "bold" }}>
          <Typography variant="h1" component="div" gutterBottom>
            THIS IS MY <br />
            PORTFOLIO
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }
}
