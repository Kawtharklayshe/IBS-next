import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Header container class
  headerContainer: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    marginBottom: "8px !important",
  },
  // Logo image class
  logoImage: {
    objectFit: "scale-down",
    objectPosition: "center",
  },
  // Search input container class
  searchInputContainer: {
    flexGrow: 1,
    position: "relative",
    margin: "8px 0px",
  },
  // Account section container class
  accountSectionContainer: {
    padding: "8px 0px",
  },
  // Account title class
  accountTitle: {
    color: theme.palette.onBackground.dark,
  },
  // Login section container class
  loginSectionContainer: {
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "center",
    marginTop: "8px !important",
  },
  // Login Title class
  loginTitle: {
    color: theme.palette.onBackground.main,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  // login Icon class
  loginIcon: {
    color: theme.palette.onBackground.main,
    margin: "0px 8px",
  },
  // Divider class
  divider: {
    margin: "8px 0px !important",
  },
  // Social media container class
  socialMediaContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "16px 0px !important",
  },
}));

export default useStyles;
