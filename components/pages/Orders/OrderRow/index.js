import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { PAYMENT_OPTIONS } from "../../../../constants/enums";
import { Typography, Grid, Popover, Chip } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useStyles from "./style";

const OrderRow = ({ itemData, theme }) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const currentCurrency = useSelector((state) => state.currency.data);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSeeFullDetails = () =>
    router.push({
      pathname: "/orderDetails",
      query: {
        id: itemData.id,
      },
    });

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

  const getAppropriatePaymentStatusLabel = (isPaymentConfirmed) => {
    if (isPaymentConfirmed) return "Paid";
    else return "Not Paid";
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grid container className={classes.root}>
      <Grid item md={1.5}>
        <Typography variant="subtitle1" component="h6">
          #{itemData.id}
        </Typography>
      </Grid>
      <Grid item md={1.5}>
        <Chip
          label={t(itemData.status)}
          variant="filled"
          color={itemData.status == "Pending" ? "warning" : "success"}
        />
      </Grid>
      <Grid item md={2}>
        <Typography variant="subtitle1" component="h6">
          {itemData.createdAt}
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Typography variant="subtitle1" component="h6">
          <Chip
            label={getAppropriatePaymentStatusLabel(
              itemData?.payment?.confirmed
            )}
            variant="filled"
            color={itemData.payment?.confirmed ? "success" : "error"}
            className={classes.paymentStatus}
          />
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Typography variant="subtitle1" component="h6">
          {getAppropriatePaymentLabel(itemData?.payment?.paymentMethod)}
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Typography variant="subtitle1" component="h6">
          {`(${itemData?.orderItems?.length}) ${t("orders_title_7")} ${
            itemData.total
          } ${currentCurrency.value}`}
        </Typography>
      </Grid>
      <Grid item md={1} className={classes.actionsContainer}>
        <MoreVertIcon className={classes.optionIcon} onClick={handleClick} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          disableScrollLock
        >
          <Typography
            variant="subtitle2"
            component="h6"
            className={classes.actionTitle}
            onClick={handleSeeFullDetails}
          >
            {t("orders_title_8")}
          </Typography>
        </Popover>
      </Grid>
    </Grid>
  );
};

export default OrderRow;
