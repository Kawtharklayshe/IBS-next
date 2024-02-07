import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { addItemToWishlist } from "../../../../../../Redux/slices/wishlistSlice/aysncActions";
import { addToCart } from "../../../../../../Redux/slices/cartSlice/aysncActions";
import { Typography, Box, CircularProgress } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeartIcon from "../../../../../../assets/SVG/HeartIcon";
import useStyles from "./style";

export default function ProductCardHorizontal({ theme, product }) {
  let { t } = useTranslation("common");
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
      <Box className={classes.imgContainer}>
        <Link href={`/itemDetails/${product.slug}`}>
          <img src={product?.image} className={classes.image} alt="product" />
        </Link>
      </Box>
      <Box className={classes.TextContainer}>
        <Typography
          variant="h6"
          component="h6"
          className={classes.productTitle}
        >
          {product?.name}
        </Typography>

        <Typography
          variant="subtitle2"
          component="p"
          className={classes.description}
        >
          {product?.description}
        </Typography>
        <Typography variant="h5" component="h4" className={classes.priceTitle}>
          {product?.price} {currentCurrency.value}
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
        <Box className={classes.icons}>
          {wishlistLoading ? (
            <CircularProgress size={24} className={classes.loadingIcon} />
          ) : (
            <HeartIcon
              className={classes.heartIcon}
              onClick={() => handleAddToWishlist(product.id)}
            />
          )}
          {loading ? (
            <CircularProgress size={29} className={classes.loadingIcon} />
          ) : (
            <ShoppingCartIcon
              onClick={() => handleAddToCart(product.id, 1)}
              className={classes.cartIcon}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
