import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import {VIEW_PORT} from "./const.tsx"
const theme = createTheme({
  breakpoints: {
    values: {    
      xs: VIEW_PORT.xs, // phone
      sm:  VIEW_PORT.sm, // tablets
      md:  VIEW_PORT.md, // small laptop
      lg:  VIEW_PORT.lg, // desktop
      xl:  VIEW_PORT.xl,// 
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
