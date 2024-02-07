import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";
import { getAutherisedFetch } from "../../../../services/httpService";
import { GetUserOrdersList } from "../../../../services/endpoints";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Divider,
} from "@mui/material";
import OrderRow from "../OrderRow";
import OrderMobileCard from "../OrderMobileCard";
import AutoPagination from "../../../Shared/customPagination";
import useStyles from "./style";

const MyOrders = ({ theme }) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  /** fetcher function for swr */
  const autherizedFetcher = async (url) => {
    const response = await getAutherisedFetch(
      url,
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    const { data } = await response.json();
    return data;
  };

  const { data, error } = useSWR(
    GetUserOrdersList(currentPage, 10),
    autherizedFetcher
  );
  useEffect(() => {
    if (data) {
      setPagesCount(data.totalPages);
    }
  }, [data]);

  return (
    <Box className={classes.root}>
      <Box className={classes.headerContainer}>
        <Grid container>
          <Grid item md={1.5}>
            <Typography
              variant="subtitle1"
              component="h6"
              className={classes.columnTitle}
            >
              {t("orders_title_1")}
            </Typography>
          </Grid>
          <Grid item md={1.5}>
            <Typography
              variant="subtitle1"
              component="h6"
              className={classes.columnTitle}
            >
              {t("orders_title_2")}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography
              variant="subtitle1"
              component="h6"
              className={classes.columnTitle}
            >
              {t("orders_title_3")}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography
              variant="subtitle1"
              component="h6"
              className={classes.columnTitle}
            >
              {t("orders_title_4")}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography
              variant="subtitle1"
              component="h6"
              className={classes.columnTitle}
            >
              {t("orders_title_5")}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography
              variant="subtitle1"
              component="h6"
              className={classes.columnTitle}
            >
              {t("orders_title_6")}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider className={classes.divider} />
      {!data && !error ? (
        <Box className={classes.loaderContainer}>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Fragment>
          <Box className={classes.orderRowsContainer}>
            {data?.items.map((item, index) => (
              <Box key={index}>
                <OrderRow theme={theme} itemData={item} />
                {index != data?.length - 1 && (
                  <Divider className={classes.rowsDivider} />
                )}
              </Box>
            ))}
          </Box>
          <Box className={classes.orderCardsContainer}>
            {data?.items.map((item, index) => (
              <OrderMobileCard theme={theme} itemData={item} key={index} />
            ))}
          </Box>
        </Fragment>
      )}
      {/** pagination section */}
      <Grid item xs={12} className={classes.paginationContainer}>
        <AutoPagination
          currentPage={currentPage}
          onChangeCurrentPage={setCurrentPage}
          pageCount={pagesCount}
        />
      </Grid>
      {/** end pagination section */}
    </Box>
  );
};

export default MyOrders;
