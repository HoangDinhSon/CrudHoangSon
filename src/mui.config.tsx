import { createTheme } from "@mui/material";
import { VIEW_PORT } from "./const";
// to add more break point for MUI. 
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
const theme = createTheme({
  typography:{
    fontFamily:"Exo",
  },
  breakpoints: {
    values: {
      xs: VIEW_PORT.xs,
      sm: VIEW_PORT.sm,
      md: VIEW_PORT.md,
      lg: VIEW_PORT.lg,
      xl: VIEW_PORT.xl,
      mobile: VIEW_PORT.mobile,
      tablet: VIEW_PORT.tablet,
      laptop: VIEW_PORT.laptop,
      desktop: VIEW_PORT.desktop,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "26px",
          lineHeight: "26px",
          fontSize: "12px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        inputProps: { sx: { padding: "5px", } },
      },
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    MuiSelect:{
        defaultProps: {
            fullWidth: true,
            inputProps: { sx: { padding: "5px" } },
          },
        styleOverrides:{
            select:{
            }
        }
    },
    MuiMenuItem:{
        styleOverrides:{
          root:{
            height:"23px",
            "&.Mui-focusVisible":{
                backgroundColor:"red"
              }
          },
          
        }
    }

  },
});
export { theme };
