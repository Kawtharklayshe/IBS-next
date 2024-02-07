import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { checkLoadImages } from "../../utilies/utiliesFuctions";
import { getFetch } from "../../services/httpService";
import { GET_CATEGORIES } from "../../services/endpoints";
import { Grid, Container, Box } from "@mui/material";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../../components/Shared/customLoader";
import CategoryCard from "../../components/pages/Categories/Cards/Type1";
import useStyles from "../../components/pages/Categories/style";

export default function Category(props) {
  const { data, theme, headerType } = props;
  const Router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  let { t } = useTranslation("common");
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.name,
    description: data?.data?.description,
    image: data?.data?.breadcrumbImage || "/images/default-cover.png",
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: data?.data?.name,
        link: "",
      },
    ],
    headerType: headerType,
  });

  // for updating main cover info when data changes
  useEffect(() => {
    if (typeof window === "object") {
      data &&
        setPageInfo({
          title: data?.data?.name,
          description: data?.data?.description,
          image: data?.data?.breadcrumbImage,
          breadcrumbs: [
            {
              title: t("home"),
              link: "/",
            },
            {
              title: data?.data?.name,
              link: "",
            },
          ],
          headerType: headerType,
        });
    }
  }, [data]);

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
            <title>{data?.data?.name}</title>
          </Head>
          <Container maxWidth="false" className={classes.innerContainer}>
            <Grid container spacing={4}>
              {data?.data?.childrencategories?.map((item) => {
                return (
                  <Grid item xs={12} md={4} key={item.id}>
                    <CategoryCard data={item} theme={theme} />
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
export async function getServerSideProps(context) {
  let slug = context?.query?.slug;
  let locale = context?.locale;
  const res = await getFetch(
    GET_CATEGORIES(slug),
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
