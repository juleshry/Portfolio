import "./App.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";

import { Title } from "./Components/Title";
import { Projects } from "./Components/Projects";

const theme = createTheme({
  typography: {
    fontFamily: ["Sora", "Montserrat", "serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Title />
        <Divider />
        <Projects name="Clouds" />
      </div>
    </ThemeProvider>
  );
}

export default App;
