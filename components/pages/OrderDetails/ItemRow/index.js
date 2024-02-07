import useTranslation from "next-translate/useTranslation";
import { useSelector } from "react-redux";
import { Grid, Typography, Box, Chip } from "@mui/material";
import useStyles from "./style";

const ItemRow = ({ data, orderStatus }) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const currentCurrency = useSelector((state) => state.currency.data);
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={classes.firstColumnContainer}>
            <img src={data.item.image} className={classes.productImage} />
            <Typography
              variant="subtitle2"
              component="h6"
              className={classes.productTitle}
            >
              {data.item.name} * {data.amount}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} className={classes.secondColumnContainer}>
          <Chip
            label={t(orderStatus)}
            variant="filled"
            color={orderStatus == "Pending" ? "warning" : "success"}
          />
        </Grid>
        <Grid item xs={12} md={3} className={classes.secondColumnContainer}>
          <Typography
            variant="subtitle2"
            component="h6"
            className={classes.priceTitle}
          >
            {data.price} {currentCurrency.value}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemRow;
