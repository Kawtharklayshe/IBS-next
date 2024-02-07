import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { getFetch } from "../services/httpService";
import { GetBuyingAndShippingInfo } from "../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { Container, Grid, Box } from "@mui/material";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../components/Shared/customLoader";
import BasicCarousel from "../components/UI/Carousel/BasicCarousel";
import useStyles from "../components/pages/BuyingAndShipping/style";

export default function BuyingAndShipping({ data, headerType, theme }) {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
    description: data?.data?.pageDetail?.description,
    image: data?.data?.pageDetail?.image,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: data?.data?.pageDetail?.title,
        link: ``,
      },
    ],
    headerType: headerType,
  });
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return (
    <div>
      <Head>
        <title>{pageInfo.title}</title>
        <meta
          name="keywords"
          content={getSEOKeywordsContent(data?.data?.pageDetail?.seoTags)}
        />
        <meta
          name="description"
          content={data?.data?.pageDetail?.seoDescription}
        />
      </Head>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          description={pageInfo.description}
          title={pageInfo.title}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container maxWidth="false" className={classes.innerContainer}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={data?.data?.pageItems?.mediaItems.length > 0 ? 6 : 12}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.pageItems?.content,
                  }}
                  className={classes.content}
                ></div>
              </Grid>
              {data?.data?.pageItems?.mediaItems.length > 0 && (
                <Grid item xs={12} md={6}>
                  <BasicCarousel items={data.data.pageItems.mediaItems} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export const getStaticProps = async (context) => {
  const locale = context?.locale;
  const res = await getFetch(
    GetBuyingAndShippingInfo,
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  return {
    props: {
      data: data,
    },
  };
};
