import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    background: theme.palette.background.main,
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "8px !important",
    marginBottom: "24px !important",
  },
  // Order icon class
  orderIcon: {
    width: "28px",
    height: "28px",
  },

  // First section container class
  firstSection: {
    display: "flex",
    alignItems: "flex-start",
  },
  // First section content class
  firstSectionContent: {
    flexGrow: "1",
    margin: "0px 8px !important",
  },
  // Price Title class
  priceTitle: {
    color: theme.palette.primary.main,
  },
  // Payment status chip class
  mobilePaymentStatus: {
    width: "25%",
  },

  // Action container class
  actionContainer: {
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
  // Divider class
  divider: {
    margin: "8px 0px !important",
  },

  // Second section container class
  secondSectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default useStyles;
