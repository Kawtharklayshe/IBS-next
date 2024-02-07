import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Inner Container class
  innerContainer: {
    background: theme.palette.mode == "light" ? "#f8f9fa" : "#2D2B2D",
    width: "40%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    outline: "none !important",
    borderRadius: "4px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  // Header container class
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Header title class
  headerTitle: {
    color: theme.palette.primary.main,
  },

  // Close Icon class
  closeIcon: {
    cursor: "pointer",
    color: theme.palette.mode == "light" ? "#2D2B2D" : "#f8f9fa",
  },
  // Content Container class
  contentContainer: {
    padding: "8px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));

export default useStyles;
