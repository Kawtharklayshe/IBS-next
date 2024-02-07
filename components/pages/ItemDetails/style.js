import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner container class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "75px",
  },
  // second section container class
  secondContainer: {
    margin: "24px 0px !important",
  },
}));

export default useStyles;
