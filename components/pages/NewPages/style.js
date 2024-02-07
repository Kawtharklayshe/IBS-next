import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner container
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
  // content class
  content: {
    padding: "6px 12px",
  },
}));

export default useStyles;
