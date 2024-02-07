import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },

  // Inner container class
  innerContainer: {
    maxWidth: "95%",
    padding: "55px",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url("/images/supportSectionBackground.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },

  // The Box That has the form
  boxForForms: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "23px",
    paddingLeft: "10px",
    paddingRight: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow:
      "inset 38.5667px -38.5667px 38.5667px rgba(194, 194, 194, 0.1) inset -38.5667px 38.5667px 38.5667px rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(50px)",
    webkitBackdropFilter: "blur(40px)",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "28px",
      paddingRight: "28px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },

  //Leave Message Text
  leaveMessageText: {
    color: theme.palette.onCard.dark,
    marginBottom: "20px",
  },

  //Box That have the all Inputs
  boxForAllInputs: {
    display: "flex",
    flexDirection: "column",
    gap: "35px",
    justifyContent: "space-evenly",
  },

  //All Input Area must has these styling (just input area)
  inputArea: {
    width: "100%",
    fontfamily: theme.typography.fontFamily,
    fontSize: "16px",
    background: "#ffffff",
  },

  // Box That has a submit button
  boxForSubmit: {
    display: "flex",
    justifyContent: "center",
  },

  //Button Submit
  btnSubmit: {
    width: "198px",
    color: theme.palette.onPrimary.main,
    fontSize: "18px",
    padding: "3px 28px",
  },

  //Styling Inputs
  inputAll: {
    width: "100%",
    "& input": {
      background: "#ffffff",
    },
    "&  p.Mui-error": {
      backgroundColor: "none",
    },
  },
}));

export default useStyles;
