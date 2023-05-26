import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import { VIEW_PORT } from "./const.tsx";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: VIEW_PORT.xs,
      sm: VIEW_PORT.sm,
      md: VIEW_PORT.md,
      lg: VIEW_PORT.lg,
      xl: VIEW_PORT.xl,
    },
  },
});

const queyryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queyryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
