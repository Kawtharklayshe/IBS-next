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
  // pagination container
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
