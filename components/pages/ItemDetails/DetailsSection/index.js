import { Fragment, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addToCart } from "../../../../Redux/slices/cartSlice/aysncActions";
import { addItemToWishlist } from "../../../../Redux/slices/wishlistSlice/aysncActions";
import StarRatings from "react-star-ratings";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Divider,
  CircularProgress,
} from "@mui/material";
import { AddSharp, RemoveSharp } from "@mui/icons-material";
import HeartIcon from "../../../../assets/SVG/HeartIcon";
import useStyles from "./style";

export default function DetailsSection({ theme, data }) {
  let { t, lang } = useTranslation("common");
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const currentCurrency = useSelector((state) => state.currency.data);
  const [counter, setCounter] = useState(1);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const handleChangeCounter = (e) => {
    let newValue = +e.target.value;
    newValue >= 0 && setCounter(newValue);
  };
  const handleIncreaseCounter = () => setCounter((prev) => prev + 1);
  const handleDecreaseCounter = () =>
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));

  const handleAddToCart = () => {
    if (counter > 0) {
      setUpdateLoading(true);
      dispatch(
        addToCart({
          body: {
            amount: counter,
            itemId: data.id,
          },
          locale: router.locale,
          setLoading: setUpdateLoading,
        })
      );
    }
  };

  const handleAddToWishlist = () => {
    setWishlistLoading(true);
    dispatch(
      addItemToWishlist({
        body: {
          itemId: data.id,
        },
        locale: router.locale,
        setLoading: setWishlistLoading,
      })
    );
  };
  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h4" className={classes.title}>
        {data?.name}
      </Typography>
      <Box className={classes.priceContainer}>
        <Typography variant="h4" className={classes.price}>
          {data?.price} {currentCurrency.value}
        </Typography>
        <div className={classes.rateContainer}>
          <StarRatings
            rating={data?.avgRates}
            starRatedColor={theme?.primaryColor}
            starSelectingHoverColor={theme?.primaryColor}
            numberOfStars={5}
            starDimension="19px"
            starSpacing="1px"
            name="rating"
          />
        </div>
      </Box>
      <Typography variant="body1" component="p" className={classes.description}>
        {data?.description}
      </Typography>
      {/** properties section */}
      <Grid container>
        <Grid item xs={12} className={classes.propertyContainer}>
          <Typography variant="subtitle1" className={classes.propertyTitle}>
            {t("Depth")}
          </Typography>
          <Typography variant="subtitle1" className={classes.propertyValue}>
            {data?.depth}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.propertyContainer}>
          <Typography variant="subtitle1" className={classes.propertyTitle}>
            {t("Origin")}
          </Typography>
          <Typography variant="subtitle1" className={classes.propertyValue}>
            {data?.origin?.name}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.propertyContainer}>
          <Typography variant="subtitle1" className={classes.propertyTitle}>
            {t("Manufacture")}
          </Typography>
          <Typography variant="subtitle1" className={classes.propertyValue}>
            {data?.manufacture?.name}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.propertyContainer}>
          <Typography variant="subtitle1" className={classes.propertyTitle}>
            {t("Item Code")}
          </Typography>
          <Typography variant="subtitle1" className={classes.propertyValue}>
            {data?.code}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.propertyContainer}>
          <Typography variant="subtitle1" className={classes.propertyTitle}>
            {t("Brand")}
          </Typography>
          <Typography variant="subtitle1" className={classes.propertyValue}>
            {data?.brand?.name}
          </Typography>
        </Grid>
      </Grid>
      {/** end of properties section */}
      <Typography
        variant="body1"
        component="p"
        className={classes.usageContainer}
      >
        <Typography variant="subtitle1" className={classes.usageTitle}>
          {t("usage")} :
        </Typography>
        {data?.usage}
      </Typography>
      <Typography className={classes.suplierContainer}>
        {t("Supplier Name")} {" : "}
        <Typography className={classes.suplierValue}>
          {data?.supplier?.name}
        </Typography>
      </Typography>
      <Typography className={classes.manufacturingOriginContainer}>
        {t("Manufacturing Origin")} {" : "}
        <Typography className={classes.manufacturingOriginValue}>
          {data?.origin?.name}
        </Typography>
      </Typography>
      <Typography className={classes.applicationContainer}>
        {t("Application")} {" : "}
        <Typography className={classes.applicationValue}>
          {data?.application}
        </Typography>
      </Typography>
      <Typography className={classes.parametersContainer}>
        {t("Parameters")} {" : "}
        <Typography className={classes.parametersValue}>
          {data?.parameters}
        </Typography>
      </Typography>
      <Grid container className={classes.addingQuantityContainer}>
        <Box className={classes.counterContainer}>
          <TextField
            type="number"
            min={0}
            size="small"
            value={counter}
            variant="outlined"
            onChange={handleChangeCounter}
            className={classes.textField}
          />
          <AddSharp
            className={classes.plusIcon}
            onClick={handleIncreaseCounter}
          />
          <RemoveSharp
            className={classes.minusIcon}
            onClick={handleDecreaseCounter}
          />
        </Box>
        <Button
          variant="contained"
          className={classes.addToCartButton}
          onClick={handleAddToCart}
          disabled={updateLoading}
        >
          {updateLoading ? <CircularProgress size={26} /> : t("Add To Cart")}
        </Button>
        <Button
          className={classes.addToWishlistButton}
          onClick={handleAddToWishlist}
        >
          {wishlistLoading ? (
            <CircularProgress size={24} />
          ) : (
            <Fragment>
              <HeartIcon
                color={theme?.primaryColor}
                className={classes.heartIcon}
              />
              <span className={classes.addToWishlistTitle}>
                {t("Add To Wishlist")}
              </span>
            </Fragment>
          )}
        </Button>
      </Grid>
      <Divider />
    </Box>
  );
}
