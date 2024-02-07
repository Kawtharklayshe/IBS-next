import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: "8px 0px",
  },
  // Skeleton class
  skeleton: {
    width: "20px",
    height: "20px",
    backgroundColor: `${theme.palette.primary.main} !important`,
    position: "absolute",
    top: "-2%",
    left: theme.direction == "rtl" ? "1%" : "unset",
    right: theme.direction == "rtl" ? "unset" : "1%",
  },
  // Close icon class
  closeIcon: {
    fontSize: "16px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    position: "absolute",
    top: "-2%",
    left: theme.direction == "rtl" ? "1%" : "unset",
    right: theme.direction == "rtl" ? "unset" : "1%",
    "&:hover": {
      color: "#bcbcbc",
    },
  },
  // Product image class
  productImage: {
    width: "72px",
    height: "72px",
    objectFit: "cover",
    objectPosition: "center",
  },
  // Inner container class
  innerContainer: {
    margin: "0px 8px",
  },
  // Product title class
  productTitle: {
    color: theme.palette.onBackground.main,
  },
  //  Total product price class
  totalProductPrice: {
    color: theme.palette.onBackground.main,
  },
  // Quantity container class
  quantityContainer: {
    marginTop: "8px",
    position: "relative",
    minWidth: "90px",
    minHeight: "30px",
    border: "1px solid #000000a3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Quantity title class
  quantityTitle: {
    color: theme.palette.onBackground.dark,
  },
  // plus icon class
  plusIcon: {
    fontSize: "19px",
    color: "black",
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    left: "6px",
    cursor: "pointer",
  },
  // Minus icon class
  minusIcon: {
    fontSize: "19px",
    color: "black",
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "6px",
    cursor: "pointer",
  },
}));

export default useStyles;
