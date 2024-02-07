import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../../utilies/utiliesFuctions";
import { getFetch } from "../../services/httpService";
import { GET_NEWS } from "../../services/endpoints";
import { Grid, Container, Box } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import NewsCard from "../../components/pages/News/Cards/Type1";
import AutoPagination from "../../components/Shared/customPagination";
import CustomLoader from "../../components/Shared/customLoader";
import useStyles from "../../components/pages/News/style";

export default function News(props) {
  const { data, theme, headerType } = props;
  const Router = useRouter();
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(parseInt(Router.query.p) || 1);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(data?.data?.pageItems?.totalPages);
  let { t } = useTranslation("common");
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
  const handleChangeCurrentPage = (value) => {
    setCurrentPage(value);
    Router.push(`${Router.pathname}?p=${value}`);
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
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container maxWidth="false" className={classes.innerContainer}>
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
            <Grid container spacing={4} className={classes.cardsContainer}>
              {data?.data?.pageItems?.items.map((item) => {
                return (
                  <Grid item xs={12} md={4} key={item.id}>
                    <NewsCard
                      data={item}
                      theme={theme}
                      parentPageTitle={pageInfo.title}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div className={classes.paginationContainer}>
              <AutoPagination
                currentPage={currentPage}
                pageCount={pageCount}
                onChangeCurrentPage={handleChangeCurrentPage}
              />
            </div>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  let page = context?.query?.p || 1;
  let locale = context?.locale;
  const res = await getFetch(
    GET_NEWS(page, 9),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
