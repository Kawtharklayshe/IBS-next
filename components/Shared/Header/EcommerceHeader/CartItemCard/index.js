import Image from "next/image";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCartItemQty,
  decreaseCartItemQty,
  removeFromCart,
} from "../../../../../Redux/slices/cartSlice/aysncActions";
import { Box, Typography, Skeleton, CircularProgress } from "@mui/material";
import { AddSharp, RemoveSharp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./style";

const CartPopupCard = ({ cartItem }) => {
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
    <Box className={classes.root}>
      <Image
        src={cartItem.item.image}
        width={72}
        height={72}
        className={classes.productImage}
      />
      <Box className={classes.detailsContainer}>
        <Typography variant="subtitle2" className={classes.productTitle}>
          {cartItem.item.name}
        </Typography>
        <Box className={classes.priceAndQuantityContainer}>
          <Box className={classes.quantityContainer}>
            {updateLoading ? (
              <CircularProgress size={26} />
            ) : (
              <Fragment>
                <Typography
                  variant="subtitle2"
                  className={classes.quantityTitle}
                >
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
          <Typography variant="h6" className={classes.priceTitle}>
            {cartItem.totalPrice} {currentCurrency.value}
          </Typography>
        </Box>
      </Box>
      {deleteLoading ? (
        <Skeleton
          variant="circular"
          width={15}
          height={15}
          className={classes.skeletonIcon}
        />
      ) : (
        <CloseIcon
          className={classes.closeIcon}
          onClick={() => handleDeleteCartItem(cartItem.id)}
        />
      )}
    </Box>
  );
};

export default CartPopupCard;
