import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // Root class
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  // Product image class
  productImage: {
    objectFit: "cover",
    objectPosition: "center",
  },
  // Details container class
  detailsContainer: {
    margin: "0px 8px !important",
  },
  // Product title class
  productTitle: {
    color: theme.palette.onBackground.main,
  },
  // Price, Quantity container class
  priceAndQuantityContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
  // Quantity container class
  quantityContainer: {
    position: "relative",
    minWidth: "100px",
    minHeight: "30px",
    border: "1px solid",
    borderColor: theme.palette.onBackground.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Qunatity title class
  quantityTitle: {
    color: theme.palette.onBackground.dark,
  },
  // Plus icon class
  plusIcon: {
    fontSize: "19px",
    color: theme.palette.onBackground.dark,
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    left: "10px",
    cursor: "pointer",
  },
  // Minsu icon class
  minusIcon: {
    fontSize: "19px",
    color: theme.palette.onBackground.dark,
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "10px",
    cursor: "pointer",
  },
  // Price title class
  priceTitle: {
    color: theme.palette.primary.main,
    margin: "0px 8px !important",
  },
  // Skeleton Icon class
  skeletonIcon: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    position: "absolute",
    top: "1%",
    left: theme.direction == "rtl" ? "1%" : "unset",
    right: theme.direction == "rtl" ? "unset" : "1%",
  },
  // Close icon class
  closeIcon: {
    fontSize: "16px !important",
    color: theme.palette.primary.main,
    cursor: "pointer",
    position: "absolute",
    top: "1%",
    left: theme.direction == "rtl" ? "1%" : "unset",
    right: theme.direction == "rtl" ? "unset" : "1%",
    "&:hover": {
      color: "#bcbcbc",
    },
  },
}));

export default useStyles;
