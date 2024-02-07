import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../../utilies/utiliesFuctions";
import {
  GetSpecificItemDetails,
  GetRelatedItemsListForSpecificItem,
  GetItemReviewList,
} from "../../services/endpoints";
import { getFetch } from "../../services/httpService";
import { Grid, Container, Box, Typography } from "@mui/material";
import CustomLoader from "../../components/Shared/customLoader";
import MainCover from "../../components/Shared/pageCover/mainCover/Type2";
import CarouselWithGallery from "../../components/UI/Carousel/CarouselWithGallery";
import DetailsSection from "../../components/pages/ItemDetails/DetailsSection";
import HtmlCollapse from "../../components/UI/Collapse/HtmlCollapse";
import UserGuideSection from "../../components/pages/ItemDetails/UserGuideSection";
import ReviewsSection from "../../components/pages/ItemDetails/ReviewsSection";
import RelatedItemsSection from "../../components/pages/ItemDetails/RelatedItemSection";
import ShareLinks from "../../components/Shared/ShareLinks";
import useStyles from "../../components/pages/ItemDetails/style";

export default function ItemDetails({
  headerType,
  theme,
  data,
  relatedItemsData,
  itemReviewsData,
}) {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title || "",
    description: data?.data?.pageDetail?.description,
    image: data?.data?.pageDetail?.image,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: t("seeFullDetails"),
        link: "",
      },
    ],
  });

  // modify images array to be compitable with the shared carousel component
  let itemImages = [
    { id: data?.data?.id, type: 1, thumbnailUrl: data?.data?.image },
  ];
  if (data?.data?.itemImages) {
    itemImages = [
      ...itemImages,
      ...data.data.itemImages.map((item) => ({
        id: item.id,
        type: 1,
        thumbnailUrl: item.image,
      })),
    ];
  }
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
          <title>{t("Item Details")}</title>
          <meta
            name="keywords"
            content={getSEOKeywordsContent(data?.data?.seoTags)}
          />
          <meta name="description" content={data?.data?.seoDescription} />
        </Head>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container
            maxWidth="false"
            className={classes.innerContainer}
            id="itemDetailsSection"
          >
            {/** First Section */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h6" className={classes.shareTitle}>
                    {t("Share")}
                  </Typography>
                  <ShareLinks
                    sharedLink={`${
                      typeof window === "object"
                        ? `${window.location.origin}${router.asPath}`
                        : ""
                    }`}
                    printedTargetSectionId="itemDetailsSection"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <CarouselWithGallery items={itemImages} />
              </Grid>
              <Grid item xs={12} md={7}>
                <DetailsSection theme={theme} data={data?.data} />
              </Grid>
            </Grid>
            {/** end of First Section */}
            {/** second Section */}
            <Grid container spacing={2} className={classes.secondContainer}>
              <Grid item xs={12}>
                <HtmlCollapse data={data?.data?.details} title="Description" />
              </Grid>
              <Grid item xs={12}>
                <HtmlCollapse
                  data={data?.data?.contents}
                  title="Parts & Content"
                />
              </Grid>
              <Grid item xs={12}>
                <ReviewsSection
                  theme={theme}
                  itemId={data?.data?.id}
                  itemSlug={data?.data?.slug}
                  initialData={itemReviewsData}
                  title="Reviews"
                />
              </Grid>
              <Grid item xs={12}>
                <UserGuideSection
                  data={data?.data?.userManuals}
                  title="User Guide"
                />
              </Grid>
            </Grid>
            {/** end of second Section */}
            {/** Last Section */}
            {relatedItemsData?.data?.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <RelatedItemsSection
                    theme={theme}
                    items={relatedItemsData?.data}
                  />
                </Grid>
              </Grid>
            )}
            {/** end of last Section */}
          </Container>
        </Box>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  let data = null,
    relatedItemData = null,
    itemReviewsData = null;
  const slug = context.params.itemSlug;
  let locale = context?.locale;
  try {
    const res = await getFetch(
      GetSpecificItemDetails(slug),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    data = await res.json();
  } catch (e) {}
  try {
    const res = await getFetch(
      GetRelatedItemsListForSpecificItem(slug),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    relatedItemData = await res.json();
  } catch (e) {}

  try {
    const res = await getFetch(
      GetItemReviewList(slug, 1, 4),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    itemReviewsData = await res.json();
  } catch (e) {}

  return {
    props: {
      data: data,
      relatedItemsData: relatedItemData,
      itemReviewsData: itemReviewsData,
    },
  };
}
