import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCartItemQty,
  decreaseCartItemQty,
  removeFromCart,
} from "../../../../Redux/slices/cartSlice/aysncActions";
import { Box, Typography, Skeleton, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddSharp, RemoveSharp } from "@mui/icons-material";
import useStyles from "./style";

const CartCard = ({ cartItem }) => {
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
    <Box className={classes.root}>
      <img src={cartItem.item.image} className={classes.productImage} />
      <Box className={classes.innerContainer}>
        <Typography variant="subtitle2" className={classes.productTitle}>
          {cartItem.item.name}
        </Typography>
        <Typography variant="h6" className={classes.totalProductPrice}>
          {cartItem.totalPrice} {currentCurrency.value}
        </Typography>
        <Box className={classes.quantityContainer}>
          {updateLoading ? (
            <CircularProgress size={26} />
          ) : (
            <Fragment>
              <Typography variant="subtitle2" className={classes.quantityTitle}>
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
      </Box>
      {deleteLoading ? (
        <Skeleton variant="circular" className={classes.skeleton} />
      ) : (
        <CloseIcon
          className={classes.closeIcon}
          onClick={() => handleDeleteCartItem(cartItem.id)}
        />
      )}
    </Box>
  );
};

export default CartCard;
