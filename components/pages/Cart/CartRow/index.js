import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCartItemQty,
  decreaseCartItemQty,
  removeFromCart,
} from "../../../../Redux/slices/cartSlice/aysncActions";
import {
  Box,
  Typography,
  Grid,
  Skeleton,
  CircularProgress,
} from "@mui/material";
import { AddSharp, RemoveSharp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./style";

export default function CartRow({ cartItem, theme }) {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentCurrency = useSelector((state) => state.currency.data);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleIncreaseCounter = () => {
    if (cartItem) {
      setUpdateLoading(true);
      dispatch(
        increaseCartItemQty({
          cartItemId: cartItem.id,
          body: {
            amount: cartItem.amount + 1,
          },
          locale: router.locale,
          setLoading: setUpdateLoading,
        })
      );
    }
  };
  const handleDecreaseCounter = () => {
    if (cartItem && cartItem.amount > 1) {
      setUpdateLoading(true);
      dispatch(
        decreaseCartItemQty({
          cartItemId: cartItem.id,
          body: {
            amount: cartItem.amount - 1,
          },
          locale: router.locale,
          setLoading: setUpdateLoading,
        })
      );
    }
  };
  const handleDeleteCartItem = (cartItemId) => {
    if (cartItem) {
      setDeleteLoading(true);
      dispatch(
        removeFromCart({
          cartItemId,
          merchantID: process.env.NEXT_PUBLIC_MERCHANT,
          locale: router.locale,
        })
      );
    }
  };
  return (
    <Grid container xs={12} className={classes.root}>
      <Grid item xs={6} className={classes.columnContainer}>
        {deleteLoading ? (
          <Skeleton variant="circular" className={classes.skeleton} />
        ) : (
          <CloseIcon
            className={classes.closeIcon}
            onClick={() => handleDeleteCartItem(cartItem.id)}
          />
        )}
        <img src={cartItem.item.image} className={classes.productImage} />
        <Typography variant="subtitle1" className={classes.productTitle}>
          {cartItem.item.name}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.columnContainer}>
        <Typography variant="subtitle1" className={classes.productPrice}>
          {cartItem.item.price} {currentCurrency.value}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.columnContainer}>
        <Box className={classes.quantityContainer}>
          {updateLoading ? (
            <CircularProgress size={28} />
          ) : (
            <Fragment>
              <Typography variant="subtitle1" className={classes.quantityTitle}>
                {cartItem.amount}
              </Typography>
              <AddSharp
                className={classes.plusIcon}
                onClick={handleIncreaseCounter}
              />
              <RemoveSharp
                className={classes.minusIcon}
                onClick={handleDecreaseCounter}
              />
            </Fragment>
          )}
        </Box>
      </Grid>
      <Grid item xs={2} className={classes.columnContainer}>
        <Typography variant="subtitle1" className={classes.totalProductPrice}>
          {cartItem.totalPrice} {currentCurrency.value}
        </Typography>
      </Grid>
    </Grid>
  );
}
