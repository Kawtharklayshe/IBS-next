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
  // SignUp Background 1 Icon class
  signUpBackground1: {
    width: "40vw",
    position: "absolute",
    top: "0px",
    height: "fit-content",
    right: "0px",
  },
  // Signup Background 2 Icon class
  signUpBackground2: {
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
    paddingBottom: "4px",
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
  // Avatar icon class
  avatarIcon: {
    position: "absolute",
    right: "-2%",
    bottom: "-2%",
  },
  // Upload icon class
  uploadIconSection: {
    marginTop: "4px",
    position: "relative",
    width: "fit-content",
    margin: "auto",
    cursor: "pointer",
  },
  // Submit Button class
  submitButton: {
    margin: "16px",
    marginTop: "24px !important",
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
  // Loader class
  loader: {
    color: `${theme.palette.onBackground.main} !important`,
    margin: "2px",
    width: "1rem !important",
    height: "1rem !important",
  },
  // Confirm container class
  confirmContainer: {
    background: theme.palette.card.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    padding: "20px 30px",
    borderRadius: "10px",
  },
  // Modal title class
  confirmTitle: {
    color: theme.palette.onCard.main,
  },
  // Buttons Container class
  buttonsContainer: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "14px",
  },
}));

export default useStyles;
