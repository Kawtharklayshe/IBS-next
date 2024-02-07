import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {},
  // Payment status chip class
  paymentStatus: {
    width: "50%",
  },
  // Actions container class
  actionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Option icon class
  optionIcon: {
    cursor: "pointer",
  },
  // Action title class
  actionTitle: {
    padding: "10px 20px !important",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#8080802b",
    },
  },
}));

export default useStyles;
