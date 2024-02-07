import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import FAQItem from "../components/pages/FAQ/FAQItem";
import { Grid, Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import { getFetch } from "../services/httpService";
import CustomLoader from "../components/Shared/customLoader";
import { GETFAQ } from "../services/endpoints";
import useStyles from "../components/pages/FAQ/style";

function FAQ({ data, headerType, theme }) {
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
        title: data?.data?.pageDetail?.title,
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
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
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
            <Grid container spacing={4}>
              {data?.data?.pageItems?.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <FAQItem data={item} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export default FAQ;

export async function getStaticProps({ locale }) {
  const res = await getFetch(GETFAQ, process.env.NEXT_PUBLIC_MERCHANT, locale);
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
}
