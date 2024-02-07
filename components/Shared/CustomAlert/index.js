import { Snackbar, Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const AlertToast = ({
  isAlertOpen,
  setIsAlertOpen,
  message,
  type = "success",
  autoHideDuration,
  position = { vertical: "top", horizontal: "center" },
}) => {
  const handleCloseAlertMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsAlertOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseAlertMessage}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  return (
    <Snackbar
      anchorOrigin={position}
      open={isAlertOpen}
      autoHideDuration={autoHideDuration || 6000}
      onClose={handleCloseAlertMessage}
      action={action}
    >
      <Alert
        onClose={handleCloseAlertMessage}
        severity={type}
        color={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertToast;
