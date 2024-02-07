import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // Title class
  title: {
    color: theme.palette.onBackground.main,
    cursor: "pointer",
    position: "relative",
    width: "fit-content",
    fontWeight: "bold !important",
    "&:before": {
      content: '""',
      width: "32px",
      position: "absolute",
      right: theme.direction == "rtl" ? 0 : "unset",
      left: theme.direction == "rtl" ? "unset" : 0,
      bottom: 0,
      borderBottom: "2px solid",
      borderColor: theme.palette.onBackground.main,
    },
  },
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
    width: props.isOpen ? "75%" : "0%",
    height: "100vh",
    zIndex: 1000,
    top: 0,
    right: props.isOpen && theme.direction == "rtl" ? 0 : "-50px",
    left: props.isOpen && theme.direction != "rtl" ? 0 : "-50px",
    transition: "all 0.2s linear",
    padding: "8px 16px !important",
    overflowY: "scroll",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  }),
}));

export default useStyles;
