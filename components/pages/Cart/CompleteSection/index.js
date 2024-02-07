import { useEffect } from "react";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { PAYMENT_OPTIONS } from "../../../../constants/enums";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { toast } from "react-toastify";
import useStyles from "./style";

const CompleteSection = ({ theme, orderInfo }) => {
  const currentCurrency = useSelector((state) => state.currency.data);
  const router = useRouter();
  const { orderData, paymentWay } = orderInfo;
  let { t, lang } = useTranslation("common");
  const classes = useStyles();

  /*  this function is too important for re-including and mounting
   ** card inputs [CREDITCARD] whenever user wants to order a new one
   */
  const handleMandatoryRefresh = () => {
    toast.info("Redirecting to Home....");
    setTimeout(() => {
      window.location.replace("/");
    }, [15000]);
  };

  //   useEffect(() => {
  //     handleMandatoryRefresh();
  //   }, []);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Box className={classes.mainTitleContainer}>
          <Typography variant="h5" className={classes.mainTitle}>
            {t("cart_page_16")}
          </Typography>
        </Box>
        <Box className={classes.firstSectionContainer}>
          <Grid container>
            <Grid item xs={12} md={3} className={classes.firstSectionColumn}>
              <Typography variant="h6" className={classes.firstSectionTitle}>
                {t("cart_page_17")}
              </Typography>
              <Typography variant="h6" className={classes.firstSectionValue}>
                {orderData?.id}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.firstSectionColumn}>
              <Typography variant="h6" className={classes.firstSectionTitle}>
                {t("cart_page_18")}
              </Typography>
              <Typography variant="h6" className={classes.firstSectionValue}>
                {orderData?.createdAt}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.firstSectionColumn}>
              <Typography variant="h6" className={classes.firstSectionTitle}>
                {t("cart_page_19")}
              </Typography>
              <Typography variant="h6" className={classes.firstSectionValue}>
                {orderData?.total} {currentCurrency.value}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              className={classes.firstSectionLastColumn}
            >
              <Typography variant="h6" className={classes.firstSectionTitle}>
                {t("cart_page_20")}
              </Typography>
              <Typography variant="h6" className={classes.firstSectionValue}>
                {
                  PAYMENT_OPTIONS.find((option) => option.value === paymentWay)
                    ?.label
                }
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="h5" className={classes.secondSectionTitle}>
            {t("cart_page_15")}
          </Typography>
          <Divider />
          <Box className={classes.secondSectionRowContainer}>
            <Typography variant="h6" className={classes.secondSectionRowTitle}>
              {t("cart_page_1")}
            </Typography>
            <Typography variant="h6" className={classes.secondSectionRowTitle}>
              {t("cart_page_8")}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.itemsContainer}>
            <Grid container>
              {orderData?.orderItems.map((orderItem) => (
                <Grid
                  item
                  key={orderItem.id}
                  xs={12}
                  className={classes.itemRowContainer}
                >
                  <Typography
                    variant="subtitle1"
                    className={classes.itemRowTitle}
                  >
                    {orderItem.item.name}{" "}
                    <Typography
                      variant="caption"
                      className={classes.itemRowQuantityTitle}
                    >
                      *{orderItem.amount}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={classes.itemRowValue}
                  >
                    {orderItem.price} {currentCurrency.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider />
          <Box className={classes.secondSectionRowContainer}>
            <Typography
              variant="subtitle1"
              className={classes.secondSectionRowTitle}
            >
              {t("cart_page_8")}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.secondSectionRowTitle}
            >
              {orderData?.total} {currentCurrency.value}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.secondSectionRowContainer}>
            <Typography
              variant="subtitle1"
              className={classes.secondSectionRowTitle}
            >
              {t("cart_page_9")}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.secondSectionRowTitle}
            >
              {orderData?.deliveryCost} {currentCurrency.value}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.secondSectionRowContainer}>
            <Typography
              variant="h6"
              className={classes.secondSectionLastRowTitle}
            >
              {t("cart_page_10")}
            </Typography>
            <Typography
              variant="h6"
              className={classes.secondSectionLastRowValue}
            >
              {orderData?.total} {currentCurrency.value}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CompleteSection;
