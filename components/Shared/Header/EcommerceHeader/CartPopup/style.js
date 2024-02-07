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
    width: props.isOpen ? "100%" : "0%",
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
    display: "flex !important",
    flexDirection: "column !important",
  }),
  // Header container class
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Header Title class
  headerTitle: {
    color: theme.palette.onBackground.main,
  },
  // Close icon class
  closeIcon: {
    fontSize: "26px !important",
    color: theme.palette.onBackground.dark,
    cursor: "pointer",
    "&:hover": {
      color: "#bcbcbc",
    },
  },
  // Main divider class
  mainDivider: {
    margin: "8px 0px !important",
  },
  // Seconf divider class
  secondDivider: {
    marginTop: "8px !important",
  },

  // Content container class
  contentContainer: {
    flexGrow: "1",
    maxHeight: "75%",
    overflowX: "hidden",
    overflowY: "auto",
    scrollBehavior: "smooth",
  },
  // Total container class
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0px",
  },
  // Total Title class
  totalTitle: {
    color: theme.palette.onBackground.main,
  },
  // Total value class
  totalValue: {
    color: theme.palette.primary.main,
  },
  // Buttons container class
  buttonsContainer: {
    marginTop: "8px !important",
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "center",
  },
  // First button class
  firstButton: {
    borderRadius: "0px !important",
  },
  // Second button class
  secondButton: {
    color: theme.palette.onPrimary.main,
    borderRadius: "0px !important",
    marginTop: "8px !important",
  },

  // Specific media query for inner container class [it's not working when writing it inside the class]
  [theme.breakpoints.up("md")]: {
    innerContainer: (props) => ({
      width: props.isOpen ? "40%" : "0%",
    }),
  },
  [theme.breakpoints.up("lg")]: {
    innerContainer: (props) => ({
      width: props.isOpen ? "30%" : "0%",
    }),
  },
}));

export default useStyles;
