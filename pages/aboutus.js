import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { getFetch } from "../services/httpService";
import { AboutUS } from "../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { Container, Grid, Box } from "@mui/material";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../components/Shared/customLoader";
import BasicCarousel from "../components/UI/Carousel/BasicCarousel";
import useStyles from "../components/pages/AboutUs/style";

const About = (props) => {
  const { data, headerType, theme } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  let { t, lang } = useTranslation("common");
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
        title: data?.data?.pageDetail?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });

  const about = {
    id: 4,
    title: data?.data?.pageItems?.title,
    description: data?.data?.pageItems?.description,
    images: data?.data?.pageItems?.mediaItems,
  };
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return (
    <div>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <MainCover
        breadcrumbs={pageInfo.breadcrumbs}
        description={pageInfo.description}
        title={pageInfo.title}
        image={pageInfo.image}
        headerType={headerType}
      />
      <Box className={classes.root}>
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
        <Container maxWidth="false" className={classes.innerContainer}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={about?.images && about?.images?.length > 0 ? 6 : 12}
            >
              <Grid item xs={12} md={10}>
                <div
                  className={classes.description}
                  dangerouslySetInnerHTML={{
                    __html: about?.description,
                  }}
                ></div>
              </Grid>
            </Grid>
            {about?.images && about?.images?.length > 0 && (
              <Grid item xs={12} md={6}>
                <BasicCarousel items={about.images} />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  const res = await getFetch(AboutUS, process.env.NEXT_PUBLIC_MERCHANT, locale);
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
}
