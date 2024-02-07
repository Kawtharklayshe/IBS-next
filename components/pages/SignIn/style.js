import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.main,
  },
  // SignIn Background 1 Icon class
  signInBackground1: {
    width: "40vw",
    position: "absolute",
    top: "0px",
    height: "fit-content",
    right: "0px",
  },
  // SignIn Background 2 Icon class
  signInBackground2: {
    width: "20vw",
    position: "absolute",
    bottom: "0px",
    height: "fit-content",
    left: "0px",
  },
  // Form container class
  formContainer: {
    backgroundColor: theme.palette.card.main,
    boxShadow: `0px 4px 39px ${theme.palette.onBackground.main}`,
    borderRadius: "10px",
    width: "90%",
    margin: "auto",
    zIndex: "1",
    padding: "80px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  // Main Title class
  mainTitle: {
    color: theme.palette.onCard.main,
    lineHeight: "19px",
    borderBottom: "2px solid",
    borderBottomColor: theme.palette.primary.main,
    paddingBottom: "20px",
    width: "fit-content",
  },
  // Form Inner Container class
  formInnerContainer: {
    width: "90%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
  },
  // Submit Button class
  submitButton: {
    marginTop: "16px !important",
    minHeight: "50px",
  },
  // Links Container class
  linksContainer: {
    padding: "8px 0px",
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    gap: "4px",
  },
  // Link First Title class
  linkFirstTitle: {
    color: theme.palette.onCard.main,
  },
  // Link Second Title class
  linkSecondTitle: {
    color: theme.palette.onCard.main,
    cursor: "pointer",
  },
  // Loader class
  loader: {
    color: `${theme.palette.onBackground.main} !important`,
    margin: "2px",
    width: "1rem !important",
    height: "1rem !important",
  },
  // Inner modal container class
  innerModalContainer: {
    background: theme.palette.card.main,
    width: "95%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "20px 30px",
    boxShadow: `0px 0px 4px ${theme.palette.onCard.main}`,
    outline: "none !important",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  // Modal title class
  innerModalTitle: {
    color: theme.palette.onCard.main,
  },
  // Modal Button class
  innerModalButton: {
    color: theme.palette.onPrimary.main,
    minHeight: "50px",
    width: "fit-content",
  },
}));

export default useStyles;
