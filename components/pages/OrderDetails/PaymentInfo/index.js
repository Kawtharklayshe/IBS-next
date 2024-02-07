import useTranslation from "next-translate/useTranslation";
import { useSelector } from "react-redux";
import { PAYMENT_OPTIONS } from "../../../../constants/enums";
import { Grid, Typography, Box } from "@mui/material";
import useStyles from "./style";

const PaymentInfo = ({ data }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const currentCurrency = useSelector((state) => state.currency.data);

  const getAppropriatePaymentLabel = (paymentWayNumber) => {
    switch (paymentWayNumber) {
      case 0:
        return PAYMENT_OPTIONS[0].label; /// Currently is CREDITCARD
        break;
      case 2:
        return PAYMENT_OPTIONS[1].label; /// Currently is POD
        break;

      default:
        return "NOT DETECTED";
        break;
    }
  };
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.rowContainer}>
          <Typography
            variant="subtitle2"
            component="h6"
            className={classes.title}
          >
            {t("orders_title_9")}
          </Typography>
          <Typography variant="subtitle1" component="h6">
            {data.total} {currentCurrency.value}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowContainer}>
          <Typography
            variant="subtitle2"
            component="h6"
            className={classes.title}
          >
            {t("orders_title_10")}
          </Typography>
          <Typography variant="subtitle1" className={classes.titleValue}>
            {data.deliveryCost} {currentCurrency.value}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowContainer}>
          <Typography
            variant="subtitle2"
            component="h6"
            className={classes.title}
          >
            {t("orders_title_11")}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            className={classes.titleValue}
          >
            {getAppropriatePaymentLabel(data?.payment?.paymentMethod)}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowContainer}>
          <Typography variant="h5" component="h5" className={classes.title}>
            {t("orders_title_12")}
          </Typography>
          <Typography
            variant="h5"
            component="h6"
            className={classes.totalValue}
          >
            {data.total} {currentCurrency.value}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentInfo;
