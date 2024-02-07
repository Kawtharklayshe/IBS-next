import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Global nav class
  globalNav: {
    backgroundColor: theme.palette.background.main,
    color: "black",
    borderBottom: "1px solid #8080804a",
    boxShadow: "none !important",
    animation: "$HeaderSide",
    animationDuration: "0.6s",
    animationTimingFunction: "linear",
    boxShadow: "0px 1px 2px 2px #80808024 !important",
    position: "fixed !important",
    top: "0px",
    width: "100%",
    zIndex: "3",
  },
  // Fixed header when scrollTop is false
  fixedHeaderScrollOff: {
    position: "relative !important",
    backgroundColor: theme.palette.background.main,
    width: "100%",
    top: "0px",
    color: "black",
    zIndex: "2",
  },
  // Header container
  headerContainer: {
    position: "absolute !important",
    top: "0px",
    width: "100%",
    color: "white",
    zIndex: "2",
  },
  // Inner container class
  innerContainer: (props) => ({
    padding: `${props.scrollTop ? "0px" : "10px"} 24px 0px 24px`,
    marginRight: "auto",
    marginLeft: "auto",
  }),

  // First Row container class
  firstRowContainer: (props) => ({
    borderBottom: "1px solid #E6E6E6",
    display: props.scrollTop ? "none" : "block",
  }),
  // Logo image class
  logoImage: {
    objectFit: "scale-down",
    cursor: "pointer",
  },
  // Links, language container class
  linksAndLangContainer: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  // Language menu container class
  languageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: theme.direction == "rtl" ? "unset" : "24px",
    marginRight: theme.direction == "rtl" ? "24px" : "unset",
  },
  // Language icon class
  languageIcon: {
    padding: "0px !important",
  },
  // Language Title class
  languageTitle: (props) => ({
    color:
      props.headerType == props.headerTypes.colored
        ? theme.palette.primary.main
        : "black",
    margin: "0px 5px !important",
  }),
  // Language Menu class
  languageMenu: {
    marginTop: "30px",
  },

  // Second Row container class
  secondRowContainer: {
    marginTop: "8px",
    position: "relative",
    justifyContent: "space-between",
  },
  // Menu container class
  menuContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  // Social Media links container class
  socialMediaContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  // Menu Container on Mobile [small screens] class
  mobileMenuContainer: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // mobile Menu icon button class
  mobileMenuIcon: {
    color: `${theme.palette.primary.main} !important`,
    padding: "0px",
  },
  // Media links container class
  mediaLinksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  "@keyframes HeaderSide": {
    "0%": {
      transform: "translateY(-200px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));

export default useStyles;
