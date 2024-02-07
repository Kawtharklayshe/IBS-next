import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { getFetch } from "../../services/httpService";
import { GET_SERVICES } from "../../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../../utilies/utiliesFuctions";
import { Grid, Container, Box } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import ServiceCard from "../../components/pages/Services/Cards/Type1";
import CustomLoader from "../../components/Shared/customLoader";
import AutoPagination from "../../components/Shared/customPagination";
import useStyles from "../../components/pages/Services/style";

export default function Services(props) {
  const { data, headerType } = props;
  let { t } = useTranslation("common");
  const Router = useRouter();
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(parseInt(Router.query.p) || 1);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(data?.data?.pageItems?.totalPages);
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
            <Grid container rowSpacing={5} columnSpacing={3}>
              {data?.data?.pageItems?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ServiceCard item={item} parentPageTitle={pageInfo.title} />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container mt={3}>
              <Grid item xs={12} className={classes.paginationContainer}>
                <AutoPagination
                  currentPage={currentPage}
                  pageCount={pageCount}
                  onChangeCurrentPage={handleChangeCurrentPage}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  let page = context?.query?.p || 1;
  let locale = context?.locale;
  const res = await getFetch(
    GET_SERVICES(page, 6),
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
