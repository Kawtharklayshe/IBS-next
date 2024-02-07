import Head from "next/head";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/httpService";
import { GET_PROJECTS } from "../../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../../utilies/utiliesFuctions";
import { Grid, Container, Box } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import AutoPagination from "../../components/Shared/customPagination";
import ProjectCard from "../../components/pages/Projects/Cards/Type1";
import CustomLoader from "../../components/Shared/customLoader";
import useStyles from "../../components/pages/Projects/style";

const Projects = (props) => {
  const { data, headerType, theme } = props;
  const Router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  let { t } = useTranslation("common");
  const [currentPage, setCurrentPage] = useState(parseInt(Router.query.p) || 1);
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
  const projects = data?.data?.pageItems?.items;
  useEffect(() => {
    checkLoadImages(setLoading);
  }, [currentPage]);

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
            content={getSEOKeywordsContent(data?.data?.pageDetail?.seoTags)}
          />
          <meta
            name="description"
            content={data?.data?.pageDetail?.seoDescription}
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
          <Container maxWidth="false" className={classes.innerContainer}>
            <Grid container rowSpacing={5} columnSpacing={3}>
              {projects?.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProjectCard
                    item={project}
                    url={`/projects/${project.slug}`}
                    parentPageTitle={pageInfo.title}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container mt={3}>
              <Grid
                item
                xs={12}
                md={12}
                className={classes.paginationContainer}
              >
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
};
export default Projects;
export async function getServerSideProps(context) {
  let page = context?.query?.p || 1;
  let locale = context?.locale;
  const res = await getFetch(
    GET_PROJECTS(page, 6),
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
