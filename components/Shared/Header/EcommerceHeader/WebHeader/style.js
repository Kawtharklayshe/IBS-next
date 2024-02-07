import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    position: "relative",
  },
  // First row container class
  firstRowContainer: {
    boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.09)",
  },
  // inner first row container class
  innerFirstRowContainer: (props) => ({
    display: props.scrollTop ? "none" : "block",
    paddingTop: "10px",
    paddingRight: "24px",
    paddingLeft: "24px",
    margin: "auto",
  }),
  // Logo container class
  logoContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 2px 0px",
  },
  // Logo image class
  logoImage: {
    width: "fit-content",
    height: "50px",
    objectFit: "scale-down",
    objectPosition: "center",
    cursor: "pointer",
  },
  // Second part container class
  secondPartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap !important",
  },
  // Menu container class
  menuContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  // language, search and cart container class
  cartAndLanguageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
  },
  // Search Button
  searchButton: {
    position: "relative",
    color: "white !important",
    padding: "10px 0px !important",
    boxShadow: "none !important",
    minWidth: "unset !important",
    "&:hover": { boxShadow: "none !important" },
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0px",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s cubic-bezier(0.57, -0.41, 0.69, 1.9)",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "&:hover:after": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  },
  // Search Icon class
  searchIcon: {
    color: theme.palette.onBackground.main,
    fontSize: "14px important",
  },
  // Cart badge class
  cartBadge: {
    "& .MuiBadge-badge": {
      left: theme.direction == "ltr" ? "unset" : "0%",
      right: theme.direction == "ltr" ? "-100%" : "unset",
      top: 20,
      background: "#E5704B",
      color: "white",
    },
  },
  // Cart Icon Class
  cartIcon: {
    stroke: theme.palette.onBackground.main,
  },
  // Currency, language container class
  currencyAndLangContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  // Language button class
  languageButton: {
    color: "black",
    padding: "10px 0px !important",
    "& span.MuiButton-endIcon svg": {
      color: "black",
    },
    ":hover": {
      background: "none",
    },
  },
  // Language Title class
  languageTitle: (props) => ({
    color:
      props.headerType == props.headerTypes.colored
        ? theme.palette.primary.main
        : "black",
    margin: "0px 5px !important",
  }),
  // Language menu class
  languageMenu: {
    marginTop: "35px",
  },
  // Currency button class
  currencyButton: {
    position: "relative",
    justifyContent: "flex-start !important",
    minWidth: "unset !important",
    color: theme.palette.onBackground.main,
    padding: "10px 0px !important",
    "& span.MuiButton-endIcon": {
      display: "contents",
      color: "#A1A8A8 !important",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0px",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s cubic-bezier(0.57, -0.41, 0.69, 1.9)",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "&:hover:after": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  },
  // Currency title class
  currencyTitle: {
    color: theme.palette.onBackground.dark,
    margin: "0px 2px !important",
  },
  // Currency menu class
  currencyMenu: {
    marginTop: "35px",
  },
}));

export default useStyles;
