import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { Title } from "./Title";
import { MyAvatar } from "./MyAvatar";

export class Appbar extends React.Component {
  render() {
    let appBarStyle = {
      position: "sticky",
      paddingBottom: 10,
      backgroundColor: "transparent",
      WebkitBackdropFilter: "blur(10px)",
      backdropFilter: "blur(10px)",
      boxShadow: "none",
      WebkitUserSelect: "none",
    };

    return (
      <AppBar id="appBar" style={appBarStyle}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          m={1}
          alignItems="center"
        >
          <Title />
          <MyAvatar />
        </Box>
      </AppBar>
    );
  }
}
