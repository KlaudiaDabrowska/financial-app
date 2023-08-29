"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { theme } from "@/styles/theme";

export interface IDashboardFinancialViewContext {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
}

export const DashboardFinancialViewContext =
  createContext<IDashboardFinancialViewContext>({
    view: "add",
    setView: () => {},
  });

function Providers({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  const [view, setView] = useState("add");

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DashboardFinancialViewContext.Provider value={{ view, setView }}>
          <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            {children}
          </ThemeProvider>
        </DashboardFinancialViewContext.Provider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default Providers;
