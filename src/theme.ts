"use client";

import { createTheme } from "@mui/material/styles";

/**
 * `--font-geist-sans` is provided by `next/font` (GeistSans.variable) in the
 * Next.js app and by `kit.css` in the standalone kit bundle.
 */
export const fontFamily = 'var(--font-geist-sans), "Geist", system-ui, sans-serif';

const theme = createTheme({
  cssVariables: true,
  typography: { fontFamily },
});

export default theme;
