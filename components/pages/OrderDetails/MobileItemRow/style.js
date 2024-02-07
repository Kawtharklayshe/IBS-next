import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    marginBottom: "30px",
  },
  // First section container class
  firstSectionContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Product Image class
  productImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
  },
  // Product info container class
  productInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "8px !important",
  },
  // Product Title class
  productTitle: {
    color: theme.palette.onCard.main,
  },
  // Price title class
  priceTitle: {
    color: theme.palette.onCard.main,
  },
  // Second section container class
  secondSectionContainer: {
    marginTop: "8px !important",
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
