import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";
import { getAutherisedFetch } from "../services/httpService";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import { GetSpecificUserOrder } from "../services/endpoints";
import {
  Grid,
  Container,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomLoader from "../components/Shared/customLoader";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import FullDetails from "../components/pages/OrderDetails/FullDetails";
import OrderAddress from "../components/pages/OrderDetails/OrderAddress";
import useStyles from "../components/pages/OrderDetails/style";

export default function OrderDetails({ headerType, theme }) {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: "",
    description: "",
    image: null,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: t("My Orders"),
        link: "/orders",
      },
      {
        title: t("Order Details"),
        link: "",
      },
    ],
  });

  const handleNavigateToOrdersPage = () => router.push("/orders");

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
    GetSpecificUserOrder(router.query.id),
    autherizedFetcher
  );

  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return (
    <div>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <Head>
          <title>{t("Order Details")}</title>
        </Head>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container maxWidth="false" className={classes.innerContainer}>
            {!data && !error ? (
              <Box className={classes.loaderContainer}>
                <CircularProgress size={50} />
              </Box>
            ) : (
              <Grid container spacing={6} rowSpacing={1}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    className={classes.title}
                    onClick={handleNavigateToOrdersPage}
                  >
                    <ArrowBackIcon className={classes.arrowIcon} />
                    {t("orders_title_14")} #{data.id}{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FullDetails theme={theme} data={data} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <OrderAddress theme={theme} data={data} />
                </Grid>
              </Grid>
            )}
          </Container>
        </Box>
      </div>
    </div>
  );
}
