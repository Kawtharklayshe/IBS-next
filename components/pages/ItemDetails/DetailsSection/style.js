import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
  },
  // title class
  title: {
    color: theme.palette.onBackground.dark,
    fontWeight: "bold !important",
    marginBottom: "16px !important",
  },
  // price, rating container class
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
  },
  // price class
  price: {
    color: theme.palette.primary.main,
  },
  // Rate stars class
  rateContainer: {
    margin: "0px 10px",
  },
  // description class
  description: {
    color: theme.palette.onBackground.dark,
    margin: "8px auto !important",
  },
  // uniform property container class
  propertyContainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.15) !important",
    padding: "8px 0px",
  },
  // uniform property title class
  propertyTitle: {
    color: theme.palette.primary.main,
  },
  // uniform property value class
  propertyValue: {
    color: theme.palette.onBackground.dark,
  },
  // usage container class
  usageContainer: {
    color: theme.palette.onBackground.dark,
    margin: "16px auto !important",
  },
  // usage title class
  usageTitle: {
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: "bolder !important",
  },
  // Suplier container class
  suplierContainer: {
    color: theme.palette.primary.main,
    fontWeight: "bolder !important",
    display: "flex",
    margin: "16px auto !important",
  },
  // Suplier value class
  suplierValue: {
    color: theme.palette.onBackground.dark,
  },
  // Manufacturing Origin container class
  manufacturingOriginContainer: {
    color: theme.palette.primary.main,
    fontWeight: "bolder !important",
    display: "flex",
    margin: "16px auto !important",
  },
  // Manufacturing Origin value class
  manufacturingOriginValue: {
    color: theme.palette.onBackground.dark,
  },
  // Application container class
  applicationContainer: {
    color: theme.palette.primary.main,
    fontWeight: "bolder !important",
    display: "flex",
    margin: "16px auto !important",
  },
  // Application value class
  applicationValue: {
    color: theme.palette.onBackground.dark,
  },
  // Parameters container class
  parametersContainer: {
    color: theme.palette.primary.main,
    fontWeight: "bolder !important",
    display: "flex",
    margin: "16px auto !important",
  },
  // Parameters value class
  parametersValue: {
    color: theme.palette.onBackground.dark,
  },
  // Add to cart, add to wishlist container class
  addingQuantityContainer: {
    margin: "24px auto !important",
  },
  // Counter container class
  counterContainer: {
    position: "relative",
  },
  // Text field class
  textField: {
    maxWidth: "120px",
    [theme.breakpoints.down(600)]: {
      maxWidth: "90px",
    },
    "& input": {
      textAlign: "center",
    },
  },
  // Plus Icon class
  plusIcon: {
    fontSize: "19px",
    color: theme.palette.onBackground.main,
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    left: "10px",
    cursor: "pointer",
  },
  // Minus Icon class
  minusIcon: {
    fontSize: "19px",
    color: theme.palette.onBackground.main,
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "10px",
    cursor: "pointer",
  },
  // Add to cart button class
  addToCartButton: {
    color: theme.palette.onPrimary.main,
    borderRadius: "0px",
    boxShadow: "none",
    margin: "0px 8px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      boxShadow: "none",
    },
    [theme.breakpoints.up(600)]: {
      margin: "0px 16px !important",
    },
  },
  // Add to wishlist button class
  addToWishlistButton: {
    color: `${theme.palette.onBackground.dark} !important`,
    borderRadius: "0px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  // Add to wishlist title class
  addToWishlistTitle: {
    [theme.breakpoints.between(320, 600)]: {
      display: "none",
    },
  },
  // Heart Icon class
  heartIcon: {
    margin: "0px 4px",
  },
}));

export default useStyles;
