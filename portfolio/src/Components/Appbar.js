import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { Title } from "./Title";
import { MyAvatar } from "./MyAvatar";

export class Appbar extends React.Component {
  render() {
    let appBarStyle = {
      position: "sticky",
      backgroundColor: "transparent",
      boxShadow: "none",
      WebkitUserSelect: "none",
      borderBottom: "solid",
      marginBottom: 10,
    };

    return (
      <AppBar id="appBar" style={appBarStyle}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          ml={1}
          mr={1}
          alignItems="center"
        >
          <Title />
          <MyAvatar />
        </Box>
      </AppBar>
    );
  }
}
