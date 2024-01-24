import Head from "next/head";
import FAQItem from "../components/FAQ/faqItem";
import { Grid, Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import MainCoverSection from "../components/mainCover";
import useFetch from "../components/useFetch/useFetch";
import CustomLoader from "../components/customLoader";
import { GETFAQ } from "../services/endpoints";

function FAQ({ data, headerType }) {
  const [loading, setLoading] = useState(true);
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
        <Head>
          <title>{pageInfo.title}</title>
        </Head>
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container
            maxWidth="lg"
            sx={{
              paddingBottom: "100px",
              display: { xs: "none", md: "block" },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Grid container spacing={4} sx={{ my: "50px", width: "50%" }}>
                {data?.data?.pageItems?.map((item, index, elements) => {
                  if (index < parseInt(elements.length / 2))
                    return (
                      <Grid item xs={12} md={12} key={index}>
                        <FAQItem data={item} />
                      </Grid>
                    );
                })}
              </Grid>
              <Grid container spacing={4} sx={{ my: "50px", width: "50%" }}>
                {data?.data?.pageItems?.map((item, index, elements) => {
                  if (index >= parseInt(elements.length / 2))
                    return (
                      <Grid item xs={12} md={12} key={index}>
                        <FAQItem data={item} />
                      </Grid>
                    );
                })}
              </Grid>
            </div>
          </Container>
          <Container
            maxWidth="lg"
            sx={{
              paddingBottom: "100px",
              display: { xs: "block", md: "none" },
            }}
          >
            <Grid container spacing={4} sx={{ my: "50px" }}>
              {data?.data?.pageItems?.map((item, index, elements) => {
                return (
                  <Grid item xs={12} key={index}>
                    <FAQItem data={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export default FAQ;

export async function getStaticProps({ locale }) {
  const [getFetch] = useFetch();
  const res = await getFetch(GETFAQ, process.env.NEXT_PUBLIC_MERCHANT, locale);
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
}
