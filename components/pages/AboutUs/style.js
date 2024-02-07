import { makeStyles } from "@mui/styles";

// About us classes
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner container
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
  // description class
  description: {
    padding: "6px 12px",
  },
}));

export default useStyles;
