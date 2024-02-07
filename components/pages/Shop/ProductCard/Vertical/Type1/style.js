import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.onBackground.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: ".5s",
    "&:hover": {
      boxShadow: "0px 4px 19px rgba(151, 151, 151, 0.50)",
    },
  },
  // Brand container class
  brandContainer: {
    width: "75px",
    height: "46px",
    position: "absolute",
    top: "2%",
    right: "2%",
    overflow: "hidden",
    zIndex: 1,
  },
  // Brand image class
  imgBrand: {
    width: "100%",
    height: "100%",
    objectFit: "scale-down",
  },
  // Product image container class
  productImageContainer: {
    height: "200px",
    overflow: "hidden",
  },
  // Product image class
  imgProduct: {
    width: "100%",
    height: "100%",
    objectPosition: "center",
    objectFit: "scale-down",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
      transition: "transform 0.4s ease",
    },
  },
  // Product Name class
  productTitle: {
    color: theme.palette.onCard.dark,
    marginTop: "4px !important",
    fontWeight: "bold !important",
    lineHeight: "37px",
    textAlign: "center",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  // Rating container class
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Origin section container class
  originSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  // Origin section item container class
  originSectionItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:nth-child(2)": {
      borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
      borderRight: "1px solid rgba(0, 0, 0, 0.2)",
    },
  },
  // Origin item title class
  originItemTitle: {
    color: theme.palette.primary.main,
  },
  // Origin item content class
  originItemContent: {
    color: theme.palette.onCard.dark,
    padding: "0px 4px",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  // Usage container class
  usageContainer: {
    color: theme.palette.onCard.dark,
    padding: "8px 24px 0px 24px",
    // overflow
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  // Usage title class
  usageTitle: {
    color: theme.palette.primary.main,
  },
  // Price title
  priceTitle: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  // Description class
  description: {
    color: theme.palette.onCard.light,
    padding: "8px 24px 0px 24px",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  // Manufacturing Origin class
  manufacturingOrigin: {
    padding: "8px 24px",
  },
  // Manufacturing Origin content class
  manufacturingOriginContent: {
    color: theme.palette.primary.main,
    marginLeft: "5px",
    fontWeight: "bold",
  },
  // Last section container class
  lastSectionContainer: {
    padding: "10px 0px 20px 0px",
    position: "relative",
    bottom: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  // Eye icon class
  eyeIcon: {
    cursor: "pointer",
  },
  // Add to cart button class
  addToCartButton: {
    color: theme.palette.onPrimary.main,
    minWidth: "150px",
    minHeight: "30px",
    borderRadius: "22px !important",
  },
  // Heart icon class
  heartIcon: {
    cursor: "pointer",
  },
}));

export default useStyles;
