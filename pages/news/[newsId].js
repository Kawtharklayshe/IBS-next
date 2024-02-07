import Head from "next/head";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/httpService";
import { GET_NEWS_DETAILS } from "../../services/endpoints";
import { PAGE_RATE_TYPES } from "../../constants/enums";
import {
  getSEOKeywordsContent,
  checkLoadImages,
} from "../../utilies/utiliesFuctions";
import { Container, Grid, Box, Typography } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../../components/Shared/customLoader";
import CarouselWithGallery from "../../components/UI/Carousel/CarouselWithGallery";
import ShareLinks from "../../components/Shared/ShareLinks";
import useStyles from "../../components/pages/NewsDetails/style";

const NewsDetails = ({ data, headerType, theme }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  let { t } = useTranslation("common");
  const router = useRouter();
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
    image: data?.data?.pageDetail?.image,
    description: data?.data?.pageDetail?.description,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: router.query.blog || t("news"),
        link: "/news",
      },
      {
        title: data?.data?.item?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });

  const NewsDetails = {
    id: data?.data?.item?.id,
    title: data?.data?.item?.title,
    subTitle: data?.data?.item?.subTitle,
    images: data?.data?.item?.mediaItems,
  };
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return (
    <div>
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
        <Head>
          <title>{pageInfo?.title}</title>
          <meta
            name="keywords"
            content={getSEOKeywordsContent(data?.data?.pageDetail?.seoTags)}
          />
          <meta
            name="description"
            content={data?.data?.pageDetail?.seoDescription}
          />
        </Head>
        <Box className={classes.root}>
          <Container maxWidth="false" className={classes.innerContainer}>
            <Grid container id="newsDetailsSection">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h6" className={classes.shareTitle}>
                    {t("Share")}
                  </Typography>
                  <ShareLinks
                    sharedLink={`${
                      typeof window === "object"
                        ? `${window.location.origin}${router.asPath}`
                        : ""
                    }`}
                    printedTargetSectionId="newsDetailsSection"
                    theme={theme}
                    pageType={PAGE_RATE_TYPES.news}
                    referenceId={NewsDetails.id}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={NewsDetails?.images && NewsDetails?.images.length ? 6 : 12}
              >
                <Grid item xs={12} md={11}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.item?.description,
                    }}
                    style={{
                      padding: "6px 12px",
                    }}
                  />
                </Grid>
              </Grid>
              {NewsDetails?.images && NewsDetails?.images.length && (
                <Grid item xs={12} md={6}>
                  <CarouselWithGallery items={NewsDetails.images} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default NewsDetails;
export async function getServerSideProps(context) {
  let data = null;
  const id = context.params.newsId;
  let locale = context?.locale;
  try {
    const res = await getFetch(
      GET_NEWS_DETAILS(id),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    data = await res.json();
  } catch (e) {}
  return {
    props: {
      data: data,
    },
  };
}
