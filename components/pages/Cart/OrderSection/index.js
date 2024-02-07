import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { RadioButtonsGroupField } from "../../../FormValidation/inputFields";
import { PAYMENT_OPTIONS } from "../../../../constants/enums";
import {
  Box,
  Typography,
  Divider,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  FormGroup,
  CircularProgress,
} from "@mui/material";
import useStyles from "./style";

const OrderSection = ({ theme, isLoading, formik }) => {
  const cartInfo = useSelector((state) => state.cart.data);
  const currentCurrency = useSelector((state) => state.currency.data);
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.root}>
          <Typography variant="h5" className={classes.mainTitle}>
            {t("cart_page_12")}
          </Typography>
          <Divider />
          <Box className={classes.rowContainer}>
            <Typography variant="h6" className={classes.rowTitle}>
              {t("cart_page_1")}
            </Typography>
            <Typography variant="h6" className={classes.rowTitle}>
              {t("cart_page_8")}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.itemContainer}>
            <Grid container>
              {cartInfo?.cartItems.map((cartItem) => (
                <Grid item xs={12} className={classes.itemRowContainer}>
                  <Typography variant="subtitle1" className={classes.rowTitle}>
                    {cartItem.item.name}{" "}
                    <Typography
                      variant="caption"
                      className={classes.quantityTitle}
                    >
                      *{cartItem.amount}
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle1" className={classes.rowTitle}>
                    {cartItem.totalPrice} {currentCurrency.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider />
          <Box className={classes.rowContainer}>
            <Typography variant="subtitle1" className={classes.rowTitle}>
              {t("cart_page_8")}
            </Typography>
            <Typography variant="subtitle1" className={classes.rowTitle}>
              {cartInfo?.totalItemPrice} {currentCurrency.value}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.rowContainer}>
            <Typography variant="subtitle1" className={classes.rowTitle}>
              {t("cart_page_9")}
            </Typography>
            <Typography variant="subtitle1" className={classes.rowTitle}>
              {cartInfo?.deliveryCost} {currentCurrency.value}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.rowContainer}>
            <Typography variant="h6" className={classes.totalCostTitle}>
              {t("cart_page_10")}
            </Typography>
            <Typography variant="h6" className={classes.totalCostValue}>
              {cartInfo?.totalCost} {currentCurrency.value}
            </Typography>
          </Box>
          <RadioButtonsGroupField
            options={PAYMENT_OPTIONS}
            formikRef={formik}
            label={t("Payment Way")}
            name="paymentWay"
            isRequired={true}
            value={formik.values.paymentWay}
            handleChange={formik.handleChange}
          />
          <Divider />
          <Box className={classes.usageContainer}>
            <Typography variant="subtitle2" className={classes.usageTitle}>
              {t("usage_policy_title")}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.policyCheckboxContainer}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={t("user_agreement_title")}
                className={classes.policyCheckbox}
              />
            </FormGroup>
          </Box>
          <Box className={classes.checkOutContainer}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              className={classes.checkOutButton}
              disabled={isLoading || cartInfo?.totalItemPrice === 0}
            >
              {t("Check out")}{" "}
              {isLoading && (
                <CircularProgress size={20} className={classes.loader} />
              )}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OrderSection;
