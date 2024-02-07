import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  // root classs
  root: {
    position: "relative",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "&:hover $categoryImage": {
      transform: "scale(1.2)",
      transition: "transform 0.4s ease",
    },
  },
  // category image class
  categoryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  // Overlay container class
  overlayContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    //paddingBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  // Category Title class
  categoryTitle: {
    color: theme.palette.background.main,
    textAlign: "center",
    fontWeight: "700 !important",
  },
}));

export default useStyles;
