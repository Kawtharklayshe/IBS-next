import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Accessible badge class
  badge: {
    // position: "fixed !important",
    // zIndex: "10",
    // right: theme.direction == "rtl" ? "1%" : "unset",
    // left: theme.direction == "rtl" ? "unset" : "1%",
    // bottom: "2%",
    "& .MuiBadge-badge": {
      top: 45,
      left: 5,
      color: theme.palette.primary.main,
    },
  },

  // Accessible Icon class
  accessibleIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.main,
    width: "30px !important",
    height: "30px !important",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.onPrimary.main,
    },
  },

  // Modal Root class
  modalRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // Inner Container class
  innerContainer: {
    // position: "fixed",
    // bottom: 0,
    // right: theme.direction == "rtl" ? 0 : "unset",
    // left: theme.direction == "rtl" ? "unset" : 0,
    // zIndex: "11",
    background: theme.palette.mode == "light" ? "#f8f9fa" : "#2D2B2D",
    width: "40%",
    height: "98%",
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
    "&.open": {
      animation: "$fadeUp 0.15s ease-out 1",
      animationFillMode: "forwards",
    },

    "&.close": {
      animation: "$fadeBottom 0.15s ease-out 1",
      animationFillMode: "forwards",
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
    flexGrow: "1",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  // Content section class
  contentSection: {
    backgroundColor: "#ededed",
    borderRadius: "4px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  // Color Picker class
  currentColorBox: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },

  // Font Actions Container class
  fontActionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  // Font Size Option class
  fontSizeOption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    border: "1px solid",
    borderColor: "transparent",
    cursor: "pointer",
    marginTop: "4px",
    borderRadius: "5px",
    backgroundColor: theme.palette.dividerColor,
    userSelect: "none",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },

  // Font Size Option Active Class
  fontOptionActive: {
    backgroundColor: theme.palette.primary.main,
  },

  // Increase Icon class
  increaseIcon: {
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "3px",
    padding: "4px",
    width: "35px !important",
    height: "35px !important",
  },

  // Decrease Icon class
  decreaseIcon: {
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "3px",
    padding: "4px",
    width: "35px !important",
    height: "35px !important",
  },

  // Nigth Mode Title class
  nightModeTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Filters Container class
  filtersContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "10px",
  },

  // Filter Option class
  filterOption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    border: "1px solid",
    borderColor: "transparent",
    cursor: "pointer",
    marginTop: "4px",
    borderRadius: "5px",
    backgroundColor: theme.palette.dividerColor,
    userSelect: "none",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },

  // Filter Option Active Class
  filterOptionActive: {
    backgroundColor: theme.palette.primary.main,
  },

  // Actions Container class
  actionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "@keyframes fadeUp": {
    "0%": {
      opacity: 1,
      transform: "translate(0, 100%)",
    },

    "100%": {
      opacity: 1,
      transform: "translate(0, 0%)",
    },
  },

  "@keyframes fadeBottom": {
    "0%": {
      opacity: 1,
      transform: "translate(0, 0%)",
    },

    "100%": {
      opacity: 1,
      transform: "translate(0, 100%)",
    },
  },
}));

export default useStyles;
