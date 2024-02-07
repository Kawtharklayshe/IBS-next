import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { Box, Typography, Divider, Button } from "@mui/material";
import useStyles from "./style";
export default function CartSummary({ theme, onNextStep }) {
  const cartInfo = useSelector((state) => state.cart.data);
  const currentCurrency = useSelector((state) => state.currency.data);
  const classes = useStyles();
  let { t, lang } = useTranslation("common");
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" className={classes.mainTitle}>
        {t("cart_page_7")}
      </Typography>
      <Divider />
      <Box className={classes.rowContainer}>
        <Typography variant="subtitle1" className={classes.rowTitle}>
          {t("cart_page_8")}
        </Typography>
        <Typography variant="subtitle1" className={classes.rowValue}>
          {cartInfo?.totalItemPrice} {currentCurrency.value}
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.rowContainer}>
        <Typography variant="subtitle1" className={classes.rowTitle}>
          {t("cart_page_9")}
        </Typography>
        <Typography variant="subtitle1" className={classes.rowValue}>
          {cartInfo?.deliveryCost} {currentCurrency.value}
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.totalCostContainer}>
        <Typography variant="subtitle1" className={classes.totalCostTitle}>
          {t("cart_page_10")}
        </Typography>
        <Typography variant="subtitle1" className={classes.rowValue}>
          {cartInfo?.totalCost} {currentCurrency.value}
        </Typography>
      </Box>
      <Box className={classes.completeOrderContainer}>
        <Button
          variant="contained"
          fullWidth
          className={classes.completeOrderButton}
          onClick={onNextStep}
        >
          {t("Complete_order")}
        </Button>
      </Box>
    </Box>
  );
}
