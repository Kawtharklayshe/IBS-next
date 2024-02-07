import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // InnerContainer class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "100px",
  },
}));

export default useStyles;
