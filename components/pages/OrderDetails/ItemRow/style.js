import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    marginBottom: "30px",
  },
  // First Column container class
  firstColumnContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Product Image class
  productImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
  },
  // Product Title class
  productTitle: {
    color: theme.palette.onCard.main,
    margin: "0px 15px !important",
    paddingTop: "16px !important",
  },
  // Second column container class
  secondColumnContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Third column container class
  thirdColumnContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Price title class
  priceTitle: {
    color: theme.palette.onCard.main,
    paddingTop: "16px !important",
  },
}));

export default useStyles;
