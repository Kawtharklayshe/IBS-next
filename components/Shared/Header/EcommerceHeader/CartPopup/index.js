import { Fragment } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useSelector } from "react-redux";
import { Grid, Typography, Button, Divider, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ItemCard from "../CartItemCard";
import useStyles from "./style";

const CartPopup = ({ isCartPopupOpen, toggle }) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const cartInfo = useSelector((state) => state.cart.data);
  const currentCurrency = useSelector((state) => state.currency.data);
  const classes = useStyles({ isOpen: isCartPopupOpen });
  return (
    <Grid className={classes.dropShadowWrapper} id="cartDropShadowWrapper">
      <Grid
        item
        xs={12}
        className={classes.innerContainer}
        id="innerCartContainer"
      >
        {/** header section */}
        <Box>
          <Grid item xs={12} className={classes.headerContainer}>
            <Typography
              variant="h6"
              component="h6"
              className={classes.headerTitle}
            >
              {t("cart_2")}
            </Typography>
            <CloseIcon className={classes.closeIcon} onClick={toggle} />
          </Grid>
          <Divider className={classes.mainDivider} />
        </Box>
        {/** end of header section */}
        {/** content section */}
        <Box className={classes.contentContainer}>
          <Grid item xs={12}>
            {cartInfo?.cartItems.map((item, index) => (
              <Fragment key={item.id}>
                <ItemCard cartItem={item} />
                {index != cartInfo.cartItems.length - 1 && (
                  <Divider className={classes.mainDivider} />
                )}
              </Fragment>
            ))}
          </Grid>
        </Box>
        {/** end of content section */}
        {/** Last section */}
        <Box>
          {/** total section */}
          <Divider className={classes.secondDivider} />
          <Grid item xs={12} className={classes.totalContainer}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.totalTitle}
            >
              {t("total_cost")}
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              className={classes.totalValue}
            >
              {cartInfo?.totalCost} {currentCurrency.value}
            </Typography>
          </Grid>
          <Divider />
          {/** end of total section */}
          {/** buttons section */}
          <Grid item xs={12} className={classes.buttonsContainer}>
            <Button
              variant="outlined"
              fullWidth
              className={classes.firstButton}
              onClick={() => {
                toggle();
                router.push("/cart");
              }}
            >
              {t("go_to_cart")}
            </Button>
            <Button
              variant="contained"
              fullWidth
              className={classes.secondButton}
              onClick={() => {
                toggle();
                router.push({
                  pathname: "/cart",
                  query: {
                    tab: 1,
                  },
                });
              }}
            >
              {t("Complete_order")}
            </Button>
          </Grid>
          {/** end of buttons section */}
        </Box>
        {/** end of last section */}
      </Grid>
    </Grid>
  );
};

export default CartPopup;
