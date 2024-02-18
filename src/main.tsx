import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { InjectAxiosInterceptors } from "./shared";

import { SnackbarUtilsConfigurator } from "./shared";

import { SnackbarProvider } from "notistack";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={1000}
    >
      <SnackbarUtilsConfigurator />
      <div className="bg-background text-foreground flex h-screen flex-col items-center">
        <BrowserRouter>
          <InjectAxiosInterceptors />
          <App />
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
