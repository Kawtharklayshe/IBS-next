import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
    paddingBottom: "75px",
  },
  // Inner container class
  innerContainer: {
    maxWidth: "95%",
  },
  // Header container
  headerContainer: {
    borderBottom: "1px solid !important",
    borderBottomColor: "#bcbcbc !important",
  },
  // Tabs container class
  tabsContainer: {
    margin: "8px 0px !important",
  },
  // Tab class
  tab: {
    fontSize: "20px !important",
    color: `${theme.palette.onBackground.main} !important`,
  },
}));

export default useStyles;
