import { Alert, AlertColor, Snackbar } from "@mui/material";

interface ISnackbarProps {
  openSnackbar: boolean;
  handleCloseSnackbar: () => void;
  severity: AlertColor;
  message: string;
}

export const SnackbarInfo = ({
  openSnackbar,
  handleCloseSnackbar,
  severity,
  message,
}: ISnackbarProps) => (
  <Snackbar
    open={openSnackbar}
    autoHideDuration={6000}
    onClose={handleCloseSnackbar}
  >
    <Alert
      onClose={handleCloseSnackbar}
      severity={severity}
      sx={{ width: "100%" }}
    >
      {message}
    </Alert>
  </Snackbar>
);
