import "./App.css";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { Title } from "./Components/Title";
import { Projects } from "./Components/Projects";
import { MyAvatar } from "./Components/MyAvatar";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Sora", "Montserrat", "serif"].join(","),
    },
  })
);

function App() {
  let appBarStyle = {
    position: "static",
    color: "#000",
    backgroundColor: "rgba(230,230,230,0)",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
    WebkitUserSelect: "none",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ overflowX: "hidden" }}>
        <AppBar style={appBarStyle}>
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
          <Divider />
        </AppBar>

        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
