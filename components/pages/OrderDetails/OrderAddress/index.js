import useTranslation from "next-translate/useTranslation";
import { Typography, Box, Divider } from "@mui/material";
import useStyles from "./style";

const OrderAddress = ({ data, theme }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        variant="subtitle1"
        component="h6"
        className={classes.mainTitle}
      >
        {t("orders_title_13")}
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="body2" component="h6" className={classes.title}>
        {data.orderInfo.firstName} {data.orderInfo.lastName}
      </Typography>
      <Typography variant="body2" component="h6" className={classes.title}>
        {data.orderInfo.address}
      </Typography>
      <Typography variant="body2" component="h6" className={classes.title}>
        {data.orderInfo.city}
      </Typography>
      <Typography variant="body2" component="h6" className={classes.title}>
        {data.orderInfo.mobile}
      </Typography>
      <Typography variant="body2" component="h6" className={classes.title}>
        {data.orderInfo.email}
      </Typography>
    </Box>
  );
};

export default OrderAddress;
