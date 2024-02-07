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
  // cards container class
  cardsContainer: {
    marginTop: "-40px !important",
  },
  // pagination container class
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0px",
  },
}));

export default useStyles;
