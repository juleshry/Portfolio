import "./App.css";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import { Title } from "./Components/Title";
import { Tiles } from "./Components/Tiles";
import { MyAvatar } from "./Components/MyAvatar";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Sora", "Montserrat", "serif"].join(","),
    },
    overrides: {
      MuiTypography: {
        body1: {
          fontSize: pxToRem(15),
        },
        body2: { fontSize: pxToRem(14) },
        h4: { fontSize: pxToRem(32) },
        h5: { fontSize: pxToRem(24) },
        h6: { fontSize: pxToRem(18) },
      },
      MuiCardContent: {
        root: {
          paddingLeft: 0,
        },
      },
    },
  })
);

function App() {
  let appBarStyle = {
    position: "sticky",
    paddingBottom: 10,
    backgroundColor: "none",
    background: "none",
    boxShadow: "none",
    WebkitUserSelect: "none",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ overflowX: "hidden", overflowY: "hidden" }}>
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

        <Tiles />
      </div>
    </ThemeProvider>
  );
}

export default App;
