/** CUSTOM COMPONENTS */
import App from "./App.tsx";

/** LIBRARIES */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider as SCThemeProvider } from "styled-components";

/** OTHER */
import store from "@shared/store/index.ts";

/** STYLES */
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4056a1",
      light: "#c5cbe3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d7992a",
      light: "#efe2ba",
      dark: "#966b1d",
    },
    background: {
      default: "#f1f0eb",
    },
    warning: {
      main: "#f13c20",
      dark: "#a82a16",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SCThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SCThemeProvider>
    </Provider>
  </StrictMode>
);
