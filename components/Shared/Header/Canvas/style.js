import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Drop shadow wrapper class
  dropShadowWrapper: (props) => ({
    position: "fixed",
    background: props.isOpen ? "#00000099" : "transparent",
    width: props.isOpen ? "100%" : "0%",
    height: "100vh",
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  // Inner container class
  innerContainer: (props) => ({
    position: "fixed",
    background: theme.palette.background.main,
    borderRight: `1px solid #bcbcbc`,
    width: props.isOpen ? "80%" : "0%",
    height: "100vh",
    zIndex: 1000,
    top: 0,
    right: props.isOpen && theme.direction == "rtl" ? 0 : "-50px",
    left: props.isOpen && theme.direction != "rtl" ? 0 : "-50px",
    transition: "all 0.2s linear",
    padding: "8px 16px !important",
    overflowY: "auto",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  }),
  // Close icon class
  closeIcon: {
    fontSize: "26px !important",
    color: theme.palette.onBackground.dark,
    cursor: "pointer",
    position: "absolute",
    top: "2%",
    right: theme.direction == "rtl" ? "unset" : "2%",
    left: theme.direction != "rtl" ? "unset" : "2%",
    "&:hover": {
      color: "#bcbcbc",
    },
  },
  // Content container class
  contentContainer: {
    flexGrow: "1",
    marginTop: "16px",
  },
  // Specific media query for inner container class [it's not working when writing it inside the class]
  [theme.breakpoints.up("sm")]: {
    innerContainer: (props) => ({
      width: props.isOpen ? "50%" : "0%",
    }),
  },
}));

export default useStyles;
