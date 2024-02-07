import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { getFetch } from "../services/httpService";
import { GET_GALLERY } from "../services/endpoints";
import { Grid, Container, Box } from "@mui/material";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../components/Shared/customLoader";
import GalleryImage from "../components/pages/Gallery/GalleryItem";
import useStyles from "../components/pages/Gallery/style";

const gallery = ({ data, headerType, theme }) => {
  let { t } = useTranslation("common");
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
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
  const handlegalleryImages = (imagesArr) => {
    let tempArrays = [];
    let temp = [...imagesArr];
    while (temp.length) {
      tempArrays.push(temp.splice(0, 3));
    }
    return tempArrays;
  };
  const [galleryImages, setGalleryImages] = useState(
    handlegalleryImages(data?.data?.pageItems)
  );

  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

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
            <Grid
              container
              rowSpacing={5}
              columnSpacing={3}
              className={classes.imagesGrid}
            >
              {galleryImages.map((arrItem, index) =>
                index % 2 === 0
                  ? arrItem.map((galleryItem, ind) => (
                      <Grid
                        item
                        xs={ind + 1 == arrItem.length ? 12 : 6}
                        md={4}
                        key={ind}
                      >
                        <GalleryImage
                          item={galleryItem}
                          images={data?.data?.pageItems}
                        />
                      </Grid>
                    ))
                  : arrItem.map((galleryItem, ind) =>
                      ind % 2 === 0 ? (
                        <Grid
                          item
                          xs={ind + 1 == arrItem.length ? 12 : 6}
                          md={3}
                          key={ind}
                        >
                          <GalleryImage
                            item={galleryItem}
                            images={data?.data?.pageItems}
                          />
                        </Grid>
                      ) : (
                        <Grid
                          item
                          xs={ind + 1 == arrItem.length ? 12 : 6}
                          md={6}
                          key={index}
                        >
                          <GalleryImage
                            item={galleryItem}
                            images={data?.data?.pageItems}
                          />
                        </Grid>
                      )
                    )
              )}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default gallery;
export async function getStaticProps({ locale }) {
  const res = await getFetch(
    GET_GALLERY,
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  // } catch (e) {}
  return {
    props: {
      data: data || "",
    },
  };
}
