import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { getFetch } from "../../services/httpService";
import { GET_DYNAMIC_PAGE } from "../../services/endpoints";
import {
  getSEOKeywordsContent,
  checkLoadImages,
} from "../../utilies/utiliesFuctions";
import { Container, Grid, Box } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../../components/Shared/customLoader";
import BasicCarousel from "../../components/UI/Carousel/BasicCarousel";
import useStyles from "../../components/pages/NewPages/style";

export default function NewPage({ data, headerType, theme }) {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.title,
    description: data?.data?.description,
    image: data?.data?.image,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: data?.data?.title,
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
        <title>{data?.data?.title}</title>
        <meta
          name="keywords"
          content={getSEOKeywordsContent(data?.data?.seoTags)}
        />
        <meta name="description" content={data?.data?.seoDescription} />
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
                md={data?.data?.mediaItems.length > 0 ? 6 : 12}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.content,
                  }}
                  className={classes.content}
                ></div>
              </Grid>
              {data?.data?.mediaItems.length > 0 && (
                <Grid item xs={12} md={6}>
                  <BasicCarousel items={data.data.mediaItems} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const addpage = context?.params?.addpage;
  const locale = context?.locale;
  const res = await getFetch(
    GET_DYNAMIC_PAGE(addpage),
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
