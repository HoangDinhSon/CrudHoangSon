import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import {theme} from "./mui.config.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queyryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queyryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <ReactQueryDevtools initialIsOpen/>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
