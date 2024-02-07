import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // page container class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner container class
  innerContainer: {
    maxWidth: "95%",
    paddingBottom: "100px",
  },

  //The Grid Item That has a video card components
  videoCardContainer: {
    padding: "8px",
  },

  //The Grid item That has a loader
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  //The Grid Item That has a Pagination
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8px",
  },
}));

export default useStyles;
