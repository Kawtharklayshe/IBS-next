import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    margin: "16px auto !important",
  },
  // Collapse Header container class
  collapseHeaderContainer: (props) => ({
    color: props.isOpen
      ? theme.palette.onPrimary.main
      : theme.palette.primary.main,
    padding: "8px",
    backgroundColor: props.isOpen
      ? theme.palette.primary.main
      : theme.palette.card.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
  }),
  // Header title class
  headerTitle: (props) => ({
    color: props.isOpen
      ? theme.palette.onPrimary.main
      : theme.palette.primary.main,
  }),
  // Collapse Content container class
  collapseContentContainer: {
    backgroundColor: theme.palette.background.main,
    boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.24)",
    padding: "8px !important",
  },
  // Collapse Cards container class
  collapseCardsContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 8px !important",
  },
  // Pagination container class
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  // Form container class
  formContainer: {
    background: theme.palette.background.main,
    boxShadow: "0px 4px 21px rgba(0, 0, 0, 0.08)",
    margin: "8px !important",
    padding: "16px",
  },
  // Form title class
  formTitle: {
    color: theme.palette.onBackground.dark,
    margin: "8px 0px !important",
  },
  // Inputs container class
  inputsConatiner: {
    display: "flex",
    flexDirection: "column",
    gap: "35px",
    justifyContent: "space-evenly",
  },
  // Label class
  label: {
    color: theme.palette.onBackground.dark,
  },
  // Input class
  inputClass: {
    width: "100%",
    borderRadius: "10px",
    background: theme.palette.background.main,
  },
  // Submit button class
  submitButton: {
    borderRadius: "0px",
    color: theme.palette.onPrimary.main,
    padding: "3px 28px",
    width: "fit-content",
  },
}));

export default useStyles;
