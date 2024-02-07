import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    background: "#f8f9fa",
    width: "60%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    outline: "none !important",
    borderRadius: "4px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  // Loader container class
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // Pay now container
  payNowContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  // Pay now button class
  payNowButton: {
    marginTop: "16px !important",
  },
}));

export default useStyles;
