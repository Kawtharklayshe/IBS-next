import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // First section container class
  firstSectionContainer: (props) => ({
    padding: "0px 8px !important",
    height: "50px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: props.scrollTop ? "none" : "flex",
  }),
  // Contact list container class
  contactListContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Social media container class
  socialMediaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  // Second section container class
  secondSectionContainer: (props) => ({
    padding: "0px 16px !important",
    display: props.scrollTop ? "none" : "flex",
  }),
  // Currency and language container class
  currencyAndLangContainer: {
    display: "flex",
    alignItems: "center",
  },
  // language button class
  languageButton: {
    color: theme.palette.onBackground.main,
    padding: "0px !important",
  },
  // Icon button class
  iconButton: {
    padding: "0px !important",
  },
  // Language title class
  languageTitle: {
    color: theme.palette.onBackground.dark,
    margin: "0px 2px !important",
  },
  // Currency button class
  currencyButton: {
    color: theme.palette.onBackground.main,
    padding: "0px !important",
  },
  settingIcon: {
    color: "black",
  },
  // Currency title class
  currencyTitle: {
    color: theme.palette.onBackground.dark,
    margin: "0px 2px !important",
  },
  // Search input container class
  searchInputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  },
  // Last section container class
  lastSectionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 16px !important",
    boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
  },
  // Menu Button class
  menuButton: {
    color: "black",
    padding: "0px !important",
  },
  // Menu Icon class
  menuIcon: {
    color: theme.palette.onBackground.main,
    width: "25px",
    height: "25px",
  },
  // Logo image class
  logoImage: {
    padding: "4px !important",
    objectFit: "scale-down",
    objectPosition: "center",
  },
  // Cart badge class
  cartBadge: {
    cursor: "pointer",
    "& .MuiBadge-badge": {
      left: theme.direction == "rtl" ? "0px" : "unset",
      right: theme.direction == "rtl" ? "unset" : "-12px",
      top: 28,
      background: "#E5704B",
      color: "white",
    },
  },
  // Cart Icon Class
  cartIcon: {
    stroke: theme.palette.onBackground.main,
    width: "31px",
    height: "31px",
  },
}));

export default useStyles;
