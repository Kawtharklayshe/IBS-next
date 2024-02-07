import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { getFetch } from "../../services/httpService";
import { SubServicesAPI } from "../../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../../utilies/utiliesFuctions";
import { Grid, Container, Box } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../../components/Shared/customLoader";
import SubServiceCard from "../../components/pages/SubServices/Cards/Type1";
import AutoPagination from "../../components/Shared/customPagination";
import useStyles from "../../components/pages/SubServices/style";

export default function SubServices(props) {
  const { data, headerType, theme } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const Router = useRouter();
  const [currentPage, setCurrentPage] = useState(parseInt(Router.query.p) || 1);
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
        title: Router.query.blog || t("services"),
        link: "/services",
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
    const queryUrl = `id=${Router.query.id}&p=${value}`;
    Router.push(`${Router.pathname}?${queryUrl}`);
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
              {data?.data?.pageItems?.items?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <SubServiceCard
                      item={item}
                      url={`/services/${item.slug}`}
                      parentPageTitle={pageInfo.breadcrumbs[1].title}
                    />
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
export const getServerSideProps = async (context) => {
  let page = context?.query?.p || 1;
  let id = context?.query?.id || 0;
  let locale = context?.locale;
  const res = await getFetch(
    SubServicesAPI(id, page, 2),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
};
