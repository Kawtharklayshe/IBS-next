import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {},
  // Column container class
  columnContainer: {
    display: "flex",
    alignItems: "center",
  },
  // Skeleton class
  skeleton: {
    width: "20px",
    height: "20px",
    backgroundColor: `${theme.palette.primary.main} !important`,
    margin: "0px 8px",
  },
  // Close icon class
  closeIcon: {
    fontSize: "18px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    margin: "0px 8px",
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
  // Product title class
  productTitle: {
    color: theme.palette.onBackground.main,
    margin: "0px 16px !important",
  },
  // Product price class
  productPrice: {
    color: theme.palette.onBackground.main,
  },
  // Quantity container class
  quantityContainer: {
    position: "relative",
    minWidth: "90px",
    minHeight: "30px",
    border: `1px solid ${theme.palette.onBackground.main}`,
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
    color: theme.palette.onBackground.main,
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    left: "10px",
    cursor: "pointer",
  },
  // Minus icon class
  minusIcon: {
    fontSize: "19px",
    color: theme.palette.onBackground.main,
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "10px",
    cursor: "pointer",
  },
  // Total Product price class
  totalProductPrice: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
