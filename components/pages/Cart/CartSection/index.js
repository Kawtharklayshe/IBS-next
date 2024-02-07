import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import {
  Grid,
  Divider,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import CartRow from "../CartRow";
import CartCard from "../CartCard";
import CartSummary from "../CartSummary";
import useStyles from "./style";

const CartSection = ({ theme, onNextStep }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const cartInfo = useSelector((state) => state.cart.data);
  const [coupon, setCoupon] = useState();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={9}>
        {/** Web Preview Section */}
        <Box className={classes.ItemsMdContainer}>
          <Grid container>
            <Grid container xs={12}>
              <Grid item xs={6}>
                <Typography variant="h6" className={classes.columnTitle}>
                  {t("cart_page_1")}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" className={classes.columnTitle}>
                  {t("cart_page_2")}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" className={classes.columnTitle}>
                  {t("cart_page_3")}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" className={classes.columnTitle}>
                  {t("cart_page_4")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.mainDivider} />
          {cartInfo?.cartItems.map((cartItem) => (
            <Fragment key={cartItem.id}>
              <CartRow cartItem={cartItem} theme={theme} />
              <Divider className={classes.mainDivider} />
            </Fragment>
          ))}
        </Box>
        {/**end of Web Preview Section */}
        {/** Mobile Preview section */}
        <Box className={classes.ItemsSmallContainer}>
          {cartInfo?.cartItems.map((cartItem, index) => (
            <Fragment key={cartItem.id}>
              <CartCard cartItem={cartItem} />
              {index + 1 != cartInfo.cartItems.length && (
                <Divider className={classes.mainDivider} />
              )}
            </Fragment>
          ))}
        </Box>
        {/** end of Mobile Preview section */}
        {/** Coupon section  */}
        <Box className={classes.couponSectionContainer}>
          <TextField
            type="number"
            min={0}
            size="small"
            value={coupon}
            placeholder={t("cart_page_6")}
            variant="outlined"
            onChange={() => setCoupon(e.target.value)}
            className={classes.couponInput}
          />
          <Button variant="contained" className={classes.couponButton}>
            {t("cart_page_5")}
          </Button>
        </Box>
        {/** end of Coupon secction  */}
      </Grid>
      <Grid item xs={12} md={3} className={classes.cartSummaryContainer}>
        <CartSummary theme={theme} onNextStep={onNextStep} />
      </Grid>
    </Grid>
  );
};

export default CartSection;
