import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
