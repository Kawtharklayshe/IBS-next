import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { getFetch } from "../../services/httpService";
import { PROJECT_DETAIL } from "../../services/endpoints";
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
import useStyles from "../../components/pages/ProjectDetails/style";

const ProjectDetails = ({ data, headerType, theme }) => {
  const Router = useRouter();
  let { t } = useTranslation("common");
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
        title: Router.query.blog || t("projects"),
        link: "/projects",
      },
      {
        title: data?.data?.item?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });

  const projectDetails = {
    id: data?.data?.item?.id,
    title: data?.data?.item?.title,
    startDate: data?.data?.item?.startDate,
    endDate: data?.data?.item?.endDate,
    images: data?.data?.item?.mediaItems,
  };
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
            <Grid container id="projectDetailsSection">
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
                    printedTargetSectionId="projectDetailsSection"
                    theme={theme}
                    pageType={PAGE_RATE_TYPES.projects}
                    referenceId={projectDetails.id}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={
                  projectDetails?.images && projectDetails?.images?.length > 0
                    ? 6
                    : 12
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.item?.description,
                  }}
                  className={classes.description}
                ></div>
              </Grid>
              {projectDetails?.images && projectDetails?.images?.length > 0 && (
                <Grid item xs={12} md={6}>
                  <CarouselWithGallery items={projectDetails.images} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default ProjectDetails;
export async function getServerSideProps(context) {
  const id = context.params.projectId;
  let locale = context?.locale;
  const res = await getFetch(
    PROJECT_DETAIL(id),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
}
