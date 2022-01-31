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
      "-webkit-user-select": "none",
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <AppBar
            position="sticky"
            style={{
              color: "#000",
              boxShadow: "none",
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(180,180,250,1) 96%)",
              WebkitUserSelect: "none",
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
              <MyAvatar />
            </Box>
            <Divider />
          </AppBar>
        </div>
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
