import { makeStyles } from "@mui/styles";

// Contact us classes
const useStyles = makeStyles((theme) => ({
  // main container class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // inner conatiner class
  innerConatiner: {
    borderRadius: "3px",
    maxWidth: "95%",
    paddingBottom: "100px",
  },
  // second section [form, image] classes
  secondSectionContainer: {
    width: "100%",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.12)",
    background: theme.palette.background.main,
  },
  // form container class
  formContainer: {
    minWidth: "50%",
    padding: theme.spacing(3),
    boxShadow: "none",
  },
  // form title class
  formTitle: {
    color: theme.palette.onBackground.dark,
    marginBottom: "20px !important",
  },
  // inputs container class
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "35px",
    justifyContent: "space-evenly",
  },
  // input class
  inputField: {
    width: "100%",
    borderRadius: "10px",
    background: theme.palette.background.main,
  },
  // area text class
  inputAreaField: {
    width: "100%",
    fontFamily: "inherit",
    fontSize: "16px",
    padding: "10px",
    outline: "none",
    border: "1px solid transparent",
    borderColor: "#80808070",
    borderRadius: "4px",
    "&:focus": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
    "&:hover": {
      borderColor: "black",
    },
  },
  // submit button class
  submitButton: {
    borderRadius: "0px !important",
    color: theme.palette.onPrimary.main,
    fontSize: "18px",
    padding: "3px 28px",
  },
  // right section [image] container class
  imageContainer: {
    width: "100%",
    backgroundImage: "url('/images/default-cover.png')",
    marginRight: "0px !important",
    padding: "4px",
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
}));

export default useStyles;
