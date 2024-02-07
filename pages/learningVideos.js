import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import useTranslation from "next-translate/useTranslation";
import { getFetch, getAutherisedFetch } from "../services/httpService";
import { GetLearningVideosListItems } from "../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { Grid, Container, Box, CircularProgress } from "@mui/material";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../components/Shared/customLoader";
import VideoCard from "../components/pages/LearningVideos/VideoCard";
import AutoPagination from "../components/Shared/customPagination";
import useStyles from "../components/pages/LearningVideos/style";

function LearningVideos({ initialData, headerType, theme }) {
  const classes = useStyles();
  let { t } = useTranslation("common");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({
    title: initialData?.data?.pageDetail?.title,
    description: initialData?.data?.pageDetail?.description,
    image: initialData?.data?.pageDetail?.image,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: initialData?.data?.pageDetail?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });

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
    GetLearningVideosListItems(currentPage, 10),
    autherizedFetcher
  );

  useEffect(() => {
    if (data) {
      setPagesCount(data.pageItems.totalPages);
    }
  }, [data]);

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
          <title>{pageInfo.title}</title>
          <meta
            name="keywords"
            content={getSEOKeywordsContent(
              initialData?.data?.pageDetail?.seoTags
            )}
          />
          <meta
            name="description"
            content={initialData?.data?.pageDetail?.seoDescription}
          />
        </Head>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container className={classes.innerContainer} maxWidth="false">
            <Grid container>
              {!data && !error ? (
                <Grid item xs={12} className={classes.loaderContainer}>
                  <CircularProgress size={50} />
                </Grid>
              ) : (
                <Fragment>
                  {data.pageItems.items.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      key={index}
                      className={classes.videoCardContainer}
                    >
                      <VideoCard data={item} />
                    </Grid>
                  ))}
                  <Grid item xs={12} className={classes.paginationContainer}>
                    <AutoPagination
                      currentPage={currentPage}
                      onChangeCurrentPage={setCurrentPage}
                      pageCount={pagesCount}
                    />
                  </Grid>
                </Fragment>
              )}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export default LearningVideos;

export async function getStaticProps({ locale }) {
  const res = await getFetch(
    GetLearningVideosListItems(1, 10),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  return {
    props: {
      initialData: data || "",
    },
  };
}
