import { Grid, Container, Box, Divider } from "@mui/material";
import MainCoverSection from "../../components/mainCover";
import { useState, useEffect } from "react";
import { checkLoadImages } from "../../utilies/utiliesFuctions";
import { GET_EVENT } from "../../services/endpoints";
import useFetch from "../../components/useFetch/useFetch";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import AutoPagination from "../../components/customPagination";
import CustomLoader from "../../components/customLoader";
import MainEventCards from "../../components/event/mainEventCards";

export default function EventTypes(props) {

  const { data, theme, headerType } = props;
  const Router = useRouter();
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
        title: "home",
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
          image={pageInfo.image || "/images/pageMainCover.png"}
          headerType={headerType}
        />
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container maxWidth="lg" sx={{ paddingBottom: "75px" }}>
            <Head>
              <title>{pageInfo.title}</title>
            </Head>
            <Grid container spacing={4} sx={{ mt: "-40px" }}>
              {data?.data?.pageItems?.items.map((item) => {
                return (
                  <Grid item xs={12} sm={12} md={4} lg={4} key={item.id}>
                    <MainEventCards data={item} theme={theme} />
                     {/* <Divider sx={{ marginTop: "25px" }} /> */}
                   </Grid>
                );
              })}
            </Grid>
            <div className="paginationContainer">
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
  const [getFetch] = useFetch();
  const res = await getFetch(
    GET_EVENT(page, 9),
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
