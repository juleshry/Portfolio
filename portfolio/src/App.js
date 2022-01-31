import "./App.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import { Title } from "./Components/Title";
import { Projects } from "./Components/Projects";
import { Typography } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Sora", "Montserrat", "serif"].join(","),
    "-webkit-user-select": "none",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar
          position="sticky"
          style={{
            color: "#000",
            boxShadow: "none",
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(180,180,250,1) 96%)",
            "-webkit-user-select": "none",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            m={1}
            alignItems="center"
          >
            <Title />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mr={1}
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                mr={1}
                alignItems="center"
              >
                <Typography style={{ marginRight: 10 }}>
                  <h3>Jules Hery</h3>
                </Typography>
                <Typography>Developer</Typography>
              </Box>
              <Avatar
                alt="Jules Hery"
                src="./Apple_Avatar.png"
                sx={{ width: 100, height: 100, marginRight: 3 }}
              ></Avatar>
            </Box>
          </Box>
          <Divider />
        </AppBar>
        <Toolbar />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
