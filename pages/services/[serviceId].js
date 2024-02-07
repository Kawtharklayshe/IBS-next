import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/httpService";
import { SERVICE_DETAILS } from "../../services/endpoints";
import { PAGE_RATE_TYPES } from "../../constants/enums";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../../utilies/utiliesFuctions";
import { Container, Grid, Box, Typography } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../../components/Shared/customLoader";
import CarouselWithGallery from "../../components/UI/Carousel/CarouselWithGallery";
import ShareLinks from "../../components/Shared/ShareLinks";
import useStyles from "../../components/pages/ServiceDetails/style";

const ServiceDetails = (props) => {
  const Router = useRouter();
  const classes = useStyles();
  let { t } = useTranslation("common");
  const { data, headerType, theme } = props;
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
        title: Router.query.blog || t("services"),
        link: "/services",
      },
      {
        title: data?.data?.pageItems?.title,
        link: "",
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
        <title>{data?.data?.pageItems?.title}</title>
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
            <Grid container id="serviceDetailsSection">
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h6" className={classes.shareTitle}>
                    {t("Share")}
                  </Typography>
                  <ShareLinks
                    sharedLink={`${
                      typeof window === "object"
                        ? `${window.location.origin}${Router.asPath}`
                        : ""
                    }`}
                    printedTargetSectionId="serviceDetailsSection"
                    theme={theme}
                    pageType={PAGE_RATE_TYPES.services}
                    referenceId={data?.data?.pageItems?.id}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.pageItems?.description,
                  }}
                  className={classes.description}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CarouselWithGallery items={data.data.pageItems.mediaItems} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};
export default ServiceDetails;
export async function getServerSideProps(context) {
  let data = null;
  const id = context.params.serviceId;
  let locale = context?.locale;
  try {
    const res = await getFetch(
      SERVICE_DETAILS(id),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    data = await res?.json();
  } catch (e) {}
  return {
    props: {
      data: data || "",
    },
  };
}
