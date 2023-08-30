import { useMediaQuery } from "@mui/material";

export const useScreenWidth = () => {
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const isTabletScreen = useMediaQuery("(max-width:800px)");

  return { isMobileScreen, isTabletScreen };
};
