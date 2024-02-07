import Head from "next/head";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import useSWR, { mutate } from "swr";
import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../Redux/slices/wishlistSlice";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import {
  getAutherisedFetch,
  DeleteAuthorizedFetch,
} from "../services/httpService";
import {
  GetWishlistItems,
  DeleteSpecificWishlistItem,
} from "../services/endpoints";
import { Grid, Container, Box, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WebWishlistCard from "../components/pages/Shop/ProductCard/Vertical/Type3";
import MobileWishlistCard from "../components/pages/Shop/ProductCard/Vertical/Type2";
import CustomLoader from "../components/Shared/customLoader";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import AutoPagination from "../components/Shared/customPagination";
import useStyles from "../components/pages/Wishlist/style";

export default function Wishlist({ theme, headerType }) {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({
    title: "",
    description: "",
    image: "",
    breadcrumbs: [
      {
        title: "home",
        link: "/",
      },
      {
        title: "wishlist",
        link: "",
      },
    ],
  });
  /** fetcher function for swr */
  const autherizedFetcher = async (url) => {
    const response = await getAutherisedFetch(
      url,
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    const { data } = await response.json();
    return data;
  };

  const { data, error } = useSWR(
    GetWishlistItems(currentPage),
    autherizedFetcher
  );
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  useEffect(() => {
    if (data) {
      setPagesCount(data.totalPages);
    }
    if (data?.pageDetail) {
      setPageInfo({
        title: data?.pageDetail?.title || "",
        description: data?.pageDetail?.description || "",
        image: data?.pageDetail?.image,
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
      });
    }
  }, [data]);

  /* function for delete item from wishlist */
  const handleDeleteItem = async (itemId) => {
    const response = await DeleteAuthorizedFetch(
      DeleteSpecificWishlistItem(itemId),
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    dispatch(removeFromWishlist(itemId));
    mutate(GetWishlistItems(currentPage));
  };

  return (
    <div>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <Head>
          <title>{t("wishlist")}</title>
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
            {!data && !error ? (
              <Box className={classes.loaderContainer}>
                <CircularProgress size={50} />
              </Box>
            ) : (
              <Fragment>
                <Box className={classes.cardsMdContainer}>
                  <Grid container spacing={2}>
                    {data?.items?.map((product) => (
                      <Grid item xs={12} md={3} key={product.id}>
                        <Box className={classes.cardContainer}>
                          <CloseIcon
                            className={classes.closeIcon}
                            onClick={() => handleDeleteItem(product.id)}
                          />
                          <WebWishlistCard theme={theme} product={product} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box className={classes.cardsSmallContainer}>
                  <Grid container>
                    {data?.items?.map((product, index) => (
                      <Grid item xs={6} key={index}>
                        <Box className={classes.cardContainer}>
                          <CloseIcon
                            className={classes.closeIcon}
                            onClick={() => handleDeleteItem(product.id)}
                          />
                          <MobileWishlistCard product={product} theme={theme} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                {/** pagination section */}
                <Box className={classes.paginationContainer}>
                  <AutoPagination
                    currentPage={currentPage}
                    onChangeCurrentPage={setCurrentPage}
                    pageCount={pagesCount}
                  />
                </Box>
                {/** end pagination section */}
              </Fragment>
            )}
          </Container>
        </Box>
      </div>
    </div>
  );
}
