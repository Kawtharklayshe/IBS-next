import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Main title class
  mainTitle: {
    color: theme.palette.onBackground.dark,
    marginTop: "8px !important",
  },
  // Required span class
  requiredSpan: {
    color: "red",
  },
  // Addresses field class
  addressesField: (props) => ({
    border: `1px solid ${props.isError ? "#ff0000" : "#bcbcbc"}`,
    borderRadius: "4px",
    cursor: "pointer",
  }),
  // Error title class
  errorTitle: (props) => ({
    display: props.isError ? "block" : "none",
    color: "#d32f2f",
    padding: "4px 16px 0px 16px",
    textAlign: "end",
  }),
  // Place holder tilte class
  placeholderTitle: {
    padding: "8px",
  },
  // pin icon class
  pinIcon: {
    color: theme.palette.primary.main,
    fontSize: "16px !important",
  },
  // Addresses modal container class
  addressesModalContainer: {
    background: "#f8f9fa",
    width: "40%",
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
      width: "75%",
    },
  },
  // Loader container class
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Addresses modal header class
  addressesModalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignitems: "center",
  },
  // Modal header title class
  modalHeaderTitle: {
    color: theme.palette.onBackground.main,
  },
  // Modal header button class
  modalHeaderButton: {
    color: theme.palette.onPrimary.main,
  },
  // Modal header button class
  modalSubmitButton: {
    color: theme.palette.onPrimary.main,
    marginTop: "16px !important",
  },
}));

export default useStyles;
