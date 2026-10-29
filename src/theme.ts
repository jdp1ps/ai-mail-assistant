"use client";

import { createTheme } from "@mui/material/styles";
import { GeistSans } from "geist/font/sans";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: GeistSans.style.fontFamily,
  },
});

export default theme;
