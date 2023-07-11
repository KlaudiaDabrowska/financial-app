"use client";

import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}

export default Providers;
