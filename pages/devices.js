import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { getFetch } from "../services/httpService";
import { GetServicesPageInfo } from "../services/endpoints";
import { Container, Box } from "@mui/material";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../components/Shared/customLoader";
import CategoriesSection from "../components/pages/Devices/CategoriesSection";
import BrandsSection from "../components/pages/Devices/BrandsSection";
import useStyles from "../components/pages/Devices/style";

const Devices = ({ data, headerType, theme }) => {
  let { t } = useTranslation("common");
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.pageDetail?.title,
    image: data?.pageDetail?.image,
    description: data?.pageDetail?.description,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: data?.pageDetail?.title,
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
            content={getSEOKeywordsContent(data?.pageDetail?.seoTags)}
          />
          <meta name="description" content={data?.pageDetail?.seoDescription} />
        </Head>
        <Container maxWidth="false" className={classes.innerContainer}>
          <CategoriesSection data={data.categories} />
          <BrandsSection data={data.brands} />
        </Container>
      </Box>
    </div>
  );
};

export default Devices;
export const getStaticProps = async ({ locale }) => {
  const response = await getFetch(
    GetServicesPageInfo,
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const { data } = await response.json();
  return {
    props: {
      data: data || null,
    },
  };
};
