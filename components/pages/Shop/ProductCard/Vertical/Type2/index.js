import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { addItemToWishlist } from "../../../../../../Redux/slices/wishlistSlice/aysncActions";
import { addToCart } from "../../../../../../Redux/slices/cartSlice/aysncActions";
import { Typography, Box, CircularProgress } from "@mui/material";
import CartIcon from "../../../../../../assets/SVG/CartIcon";
import useStyles from "./style";

export default function ProductCard({ theme, product }) {
  let { t, lang } = useTranslation("common");
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const currentCurrency = useSelector((state) => state.currency.data);
  const [loading, setLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const handleAddToCart = (itemId, qty) => {
    setLoading(true);
    dispatch(
      addToCart({
        body: {
          amount: qty,
          itemId,
        },
        locale: router.locale,
        setLoading,
      })
    );
  };
  const handleAddToWishlist = (itemId) => {
    setWishlistLoading(true);
    dispatch(
      addItemToWishlist({
        body: {
          itemId,
        },
        locale: router.locale,
        setLoading: setWishlistLoading,
      })
    );
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.brandContainer}>
        <img src={product?.brand?.image} className={classes.imgBrand} />
      </Box>
      <Box className={classes.productImageContainer}>
        <Link href={`/itemDetails/${product.slug}`}>
          <img src={product?.image} className={classes.imgProduct} />
        </Link>
      </Box>
      <Typography variant="h6" component="h6" className={classes.productTitle}>
        {product?.name}
      </Typography>
      <Box className={classes.ratingContainer}>
        <StarRatings
          rating={product?.avgRates}
          starRatedColor={theme?.primaryColor}
          starSelectingHoverColor={theme?.primaryColor}
          numberOfStars={5}
          starDimension="19px"
          starSpacing="1px"
          name="rating"
        />
      </Box>
      <Box className={classes.originSection}>
        <Box className={classes.originSectionItem}>
          <Typography variant="subtitle2" className={classes.originItemTitle}>
            {t("Depth")}
          </Typography>
          <Typography variant="subtitle2" className={classes.originItemContent}>
            {product?.depth}
          </Typography>
        </Box>
        <Box className={classes.originSectionItem}>
          <Typography variant="subtitle2" className={classes.originItemTitle}>
            {t("Made in")}
          </Typography>
          <Typography variant="subtitle2" className={classes.originItemContent}>
            {product?.origin?.name}
          </Typography>
        </Box>
        <Box className={classes.originSectionItem}>
          <Typography variant="subtitle2" className={classes.originItemTitle}>
            {t("Brand")}
          </Typography>
          <Typography variant="subtitle2" className={classes.originItemContent}>
            {product?.brand?.name}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="subtitle2"
        component="p"
        className={classes.usageContainer}
      >
        <Typography variant="caption" className={classes.usageTitle}>
          {t("usage")} :{" "}
        </Typography>
        {product?.usage}
      </Typography>
      <Typography variant="h5" component="h4" className={classes.priceTitle}>
        {product?.price} {currentCurrency.value}
      </Typography>
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          className={classes.description}
        >
          {product?.description}
        </Typography>
        <Typography variant="subtitle2" className={classes.manufacturingOrigin}>
          {t("Manufacturing Origin")} {" : "}
          <span className={classes.manufacturingOriginContent}>
            {product?.origin?.name}
          </span>
        </Typography>
      </Box>
      <Box className={classes.lastSectionContainer}>
        {loading ? (
          <CircularProgress size={38} />
        ) : (
          <CartIcon
            color={theme?.primaryColor}
            className={classes.cartIcon}
            onClick={() => handleAddToCart(product.id, 1)}
          />
        )}
      </Box>
    </Box>
  );
}
