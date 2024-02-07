import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { Grid, Typography, Box, Divider } from "@mui/material";
import ItemRow from "../ItemRow";
import MobileItemRow from "../MobileItemRow";
import PaymentInfo from "../PaymentInfo";
import useStyles from "./style";
const FullDetails = ({ data, theme }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container className={classes.headerContainer}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            component="h6"
            className={classes.columnTitle}
          >
            {t("orders_title_7")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle1"
            component="h6"
            className={classes.columnTitle}
          >
            {t("orders_title_2")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle1"
            component="h6"
            className={classes.columnTitle}
          >
            {t("orders_title_6")}
          </Typography>
        </Grid>
        <Divider className={classes.mainDivider} />
      </Grid>
      {/** web view */}
      <Box className={classes.itemsMdContainer}>
        {data.orderItems.map((item) => (
          <ItemRow key={item.id} data={item} orderStatus={data.status} />
        ))}
      </Box>
      {/** mobile view */}
      <Box className={classes.itemsSmallContainer}>
        {data.orderItems.map((item, index) => (
          <Fragment>
            <MobileItemRow
              key={item.id}
              data={item}
              orderStatus={data.status}
            />
            {index + 1 != data.orderItems.length && <Divider />}
          </Fragment>
        ))}
      </Box>
      <Divider className={classes.basicDivider} />
      <PaymentInfo data={data} />
      <Divider className={classes.LastDivider} />
    </Box>
  );
};
export default FullDetails;
