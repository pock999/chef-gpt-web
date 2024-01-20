import { createTheme } from "@mui/material";
import { THEME_COLOR } from "../config";

export const sharedTheme = createTheme({
  palette: {
    primary: {
      main: THEME_COLOR.primary.main,
      // light
      // dark
      // contrastText
    },
    secondary: {
      main: THEME_COLOR.secondary.main,
      // light
      // dark
      // contrastText
    },
    // error
    // warning
    // info
    // success
  },
});