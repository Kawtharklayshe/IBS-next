import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import useFetch from "../../components/useFetch/useFetch";
import { checkLoadImages } from "../../utilies/utiliesFuctions";
import { SubServicesAPI } from "../../services/endpoints";
import MainCoverSection from "../../components/mainCover";
import SubServiceCard from "../../components/homePage/subserviceCard";
import { Grid, Container, Box } from "@mui/material";
import ProjectCard from "../../components/homePage/projectCard";
import CustomLoader from "../../components/customLoader";
import AutoPagination from "../../components/customPagination";
export default function SubServices(props) {
  const { data, headerType } = props;
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
        title: "home",
        link: "/",
      },
      {
        title: Router.query.blog || "services",
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
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#fcfcfc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "1000",
        }}
        className={!loading ? "none" : undefined}
      >
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <MainCoverSection
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container maxWidth="lg" sx={{ paddingBottom: "75px" }}>
            <Head>
              <title>{pageInfo.title}</title>
            </Head>
            <Grid container rowSpacing={5} columnSpacing={3}>
              {data?.data?.pageItems?.items?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ProjectCard
                      item={item}
                      url={`/services/${item.slug}`}
                      parentPageTitle={pageInfo.breadcrumbs[1].title}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container mt={3}>
              <Grid
                item
                xs={12}
                md={12}
                sx={{ display: "flex", justifyContent: "center" }}
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
}
export const getServerSideProps = async (context) => {
  let page = context?.query?.p || 1;
  let id = context?.query?.id || 0;
  let locale = context?.locale;
  const [getFetch] = useFetch();
  const res = await getFetch(
    SubServicesAPI(id, page, 6),
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
