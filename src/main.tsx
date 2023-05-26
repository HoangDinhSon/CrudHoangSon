import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import { VIEW_PORT } from "./const.tsx";
import "./index.css";

declare module "@mui/material/styles"{
  interface BreakpointOverrides{ 
    xs:true;
    sm:true;
    md:false; 
    lg: true;
    xl : true;
    mobile :true;
    tablet:true;
    laptop: true;
    desktop:true;
  }
}
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
