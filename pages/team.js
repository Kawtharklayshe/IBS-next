import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { getFetch } from "../services/httpService";
import { GET_TEAM } from "../services/endpoints";
import { Grid, Container, Box } from "@mui/material";
import CustomLoader from "../components/Shared/customLoader";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import TeamCard from "../components/pages/Team/Cards/Type1";
import useStyles from "../components/pages/Team/style";

const Team = ({ data, theme, headerType }) => {
  let { t } = useTranslation("common");
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title || "",
    image: data?.data?.pageDetail?.image,
    description: "",
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
          <Grid container rowSpacing={5} columnSpacing={3}>
            {data?.data?.pageItems?.map((item) => {
              return (
                <Grid item xs={12} md={3} key={item.employeeId}>
                  <TeamCard employee={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Team;
export async function getStaticProps({ locale }) {
  let data = null;
  try {
    const res = await getFetch(
      GET_TEAM,
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    data = await res?.json();
  } catch (e) {}
  return {
    props: {
      data: data || "",
    },
  };
}
