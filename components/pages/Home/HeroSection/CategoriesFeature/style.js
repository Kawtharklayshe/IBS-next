import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.01)",
    boxShadow:
      "inset 59.0333px -59.0333px 59.0333px rgba(14, 62, 94, 0.1), inset -59.0333px 59.0333px 59.0333px rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    position: "absolute",
    bottom: "0",
    zIndex: "1",
  },
  // Large screens container class
  largeScreensContainer: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  // Category item class
  categoryItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
    cursor: "pointer",
    padding: "4px !important",
    "&:hover": {
      "& $categoryImage": {
        transform: "scale(1.2)",
      },
      background: theme.palette.primary.main,
    },
  },
  categoryImage: {
    filter: "brightness(100)",
    width: "50px",
    height: "50px",
    objectFit: "scale-down",
  },
  // Small screens container class
  smallScreensContainer: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
