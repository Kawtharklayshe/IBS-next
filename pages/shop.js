import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getFetch, getAutherisedFetch } from "../services/httpService";
import {
  ServerSideGetShopProductsList,
  ClientSideGetShopProductsList,
  GetShopFiltersList,
} from "../services/endpoints";
import {
  checkLoadImages,
  handlePathFilters,
  transformListToOptionsListWithCompinedTitles,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import {
  Container,
  Grid,
  Box,
  Select,
  FormControl,
  MenuItem,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import CustomLoader from "../components/Shared/customLoader";
import Canvas from "../components/pages/Shop/Canvas";
import FiltersSection from "../components/pages/Shop/FiltersSection";
import AutoPagination from "../components/Shared/customPagination";
import ShopCover from "../components/Shared/pageCover/mainCover/Type2";
import ProductCardVertical from "../components/pages/Shop/ProductCard/Vertical/Type4";
import ProductCardHorizontal from "../components/pages/Shop/ProductCard/Horizontal/Type4";
import useStyles from "../components/pages/Shop/style";

export default function Shop({ headerType, filters, data, theme }) {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title || "",
    image: data?.data?.pageDetail?.image,
    description: data?.data?.pageDetail?.description,
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
    seoTags: data?.data?.pageDetail?.seoTags,
    seoDescription: data?.data?.pageDetail?.seoDescription,
  });

  const [displayMobileFiltersContainter, setDisplayMobileFiltersContainter] =
    useState(false);
  const [products, setProducts] = useState([...(data?.data?.items || [])]);
  const [pageCount, setPageCount] = useState(data?.data?.totalPages || 1);
  const [currentPage, setCurrentPage] = useState(
    Number(router.query?.PaN || 1)
  );
  const [pageSize, setPageSize] = useState(router.query?.PaS || 10);
  const [searchedFilter, setSearchedFilter] = useState(router.query?.PN || "");
  const [sortingTypeFilter, setSortingTypeFilter] = useState(
    router.query?.ST || ""
  );
  const [ratingsFilter, setRatingsFilter] = useState(router.query?.RT || "");
  const [priceRangeFilter, setPriceRangeFilter] = useState([
    Number(router.query?.PrMin) || 0,
    Number(router.query?.PrMax) || 20000,
  ]);
  const [categoryIDFilter, setCategoryIdFilter] = useState(
    router.query.catId || ""
  );
  const [manufactureIDFilter, setManufactureIdFilter] = useState(
    router.query.manuId || ""
  );
  const [originIDFilter, setOriginIdFilter] = useState(
    router.query.originId || ""
  );
  const [brandIDFilter, setBrandIdFilter] = useState(
    router.query.brandId || ""
  );
  // Displaying way state
  const [displayingWay, setDisplayingWay] = useState("grid");

  // Function for handling displaying way
  const handleSelectDisplayWay = (event, way) => {
    setDisplayingWay(way);
  };
  const ratingsOptions = [5, 4, 3, 2, 1];
  const sortOptions = [
    ...(filters?.data?.sortTypes.map((sortType) => ({
      label: sortType,
      value: sortType,
    })) || []),
  ];
  const pageSizeOptions = [
    { label: "2", value: 2 },
    { label: "4", value: 4 },
    { label: "6", value: 6 },
    { label: "8", value: 8 },
    { label: "10", value: 10 },
  ];

  const categoriesOptions = transformListToOptionsListWithCompinedTitles(
    filters?.data?.categories
  );

  const manufacturesOptions = [
    ...(filters?.data?.manufactures.map((manufacture) => ({
      label: manufacture.name,
      value: manufacture.id,
    })) || []),
  ];
  const originsOptions = [
    ...(filters?.data?.origins.map((origin) => ({
      label: origin.name,
      value: origin.id,
    })) || []),
  ];
  const brandsOptions = [
    ...(filters?.data?.brands.map((brand) => ({
      label: brand.name,
      value: brand.id,
      avatar: brand.image,
    })) || []),
  ];

  const toggleMobileFilters = () =>
    setDisplayMobileFiltersContainter(!displayMobileFiltersContainter);

  const handleChangePageSize = (value) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  const handleCheckFilters = (checkType = "RESET") => {
    if (checkType == "RESET") return null;
    else {
      let filtersOb = {};
      if (currentPage) filtersOb.PaN = currentPage;
      if (pageSize) filtersOb.PaS = pageSize;
      if (searchedFilter) filtersOb.PN = searchedFilter;
      if (priceRangeFilter) {
        filtersOb.PrMin = priceRangeFilter[0];
        filtersOb.PrMax = priceRangeFilter[1];
      }
      if (categoryIDFilter) filtersOb.catId = categoryIDFilter;
      if (manufactureIDFilter) filtersOb.manuId = manufactureIDFilter;
      if (originIDFilter) filtersOb.originId = originIDFilter;
      if (brandIDFilter) filtersOb.brandId = brandIDFilter;
      if (ratingsFilter) filtersOb.RT = ratingsFilter;
      if (sortingTypeFilter) filtersOb.ST = sortingTypeFilter;
      return filtersOb;
    }
  };

  const handleReset = () => {
    handleChangePageSize(10);
    setSearchedFilter("");
    setPriceRangeFilter([0, 20000]);
    setCategoryIdFilter("");
    setManufactureIdFilter("");
    setOriginIdFilter("");
    setBrandIdFilter("");
    setRatingsFilter("");
    setSortingTypeFilter("");
    handleRefetch("RESET");
  };

  const handleRefetch = async (checkType = "RESET") => {
    router.asPath = `${router.route}?${
      handlePathFilters(handleCheckFilters(checkType)).browserUrlParams
    }`;
    router.push(router.asPath);
    const res = await getAutherisedFetch(
      ClientSideGetShopProductsList(
        handlePathFilters(handleCheckFilters(checkType)).httpRequestParams
      ),
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    data = await res?.json();
    if (data?.data) {
      setProducts(data?.data.pageItems.items);
      setPageCount(data?.data.pageItems.totalPages);
      setPageInfo({
        title: data?.data?.pageDetail?.title || "",
        image: data?.data?.pageDetail?.image,
        description: data?.data?.pageDetail?.description,
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
        seoTags: data?.data?.pageDetail?.seoTags,
        seoDescription: data?.data?.pageDetail?.seoDescription,
      });
    }
  };

  const handleMobileFiltering = () => {
    toggleMobileFilters();
    handleRefetch("FETCH");
  };

  const handleMobileReset = () => {
    toggleMobileFilters();
    handleReset("RESET");
  };

  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

  useEffect(() => {
    handleRefetch("FETCH");
  }, [currentPage, pageSize, sortingTypeFilter]);

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
            content={getSEOKeywordsContent(pageInfo.seoTags)}
          />
          <meta name="description" content={pageInfo.seoDescription} />
        </Head>
        <ShopCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Container maxWidth="false" className={classes.innerContainer}>
            <Grid container>
              {/** Filters section on md screens */}
              <Grid
                item
                xs={12}
                md={3}
                className={classes.filtersSectionMdContainer}
              >
                <FiltersSection
                  theme={theme}
                  onFilter={() => handleRefetch("FETCH")}
                  onReset={handleReset}
                  priceRangeFilter={priceRangeFilter}
                  setPriceRangeFilter={setPriceRangeFilter}
                  categoriesOptions={categoriesOptions}
                  categoryIDFilter={categoryIDFilter}
                  setCategoryIdFilter={setCategoryIdFilter}
                  manufacturesOptions={manufacturesOptions}
                  manufactureIDFilter={manufactureIDFilter}
                  setManufactureIdFilter={setManufactureIdFilter}
                  originsOptions={originsOptions}
                  originIDFilter={originIDFilter}
                  setOriginIdFilter={setOriginIdFilter}
                  brandsOptions={brandsOptions}
                  brandIDFilter={brandIDFilter}
                  setBrandIdFilter={setBrandIdFilter}
                  ratingsOptions={ratingsOptions}
                  ratingsFilter={ratingsFilter}
                  setRatingsFilter={setRatingsFilter}
                />
              </Grid>
              {/** end Filters section on md screens */}
              {/** Filters vetical menu wrapper on Mobile*/}
              <Grid
                item
                xs={12}
                className={classes.filtersSectionSmallContainer}
              >
                <Canvas
                  isOpen={displayMobileFiltersContainter}
                  toggle={toggleMobileFilters}
                  setToggle={setDisplayMobileFiltersContainter}
                >
                  <FiltersSection
                    theme={theme}
                    onFilter={handleMobileFiltering}
                    onReset={handleMobileReset}
                    priceRangeFilter={priceRangeFilter}
                    setPriceRangeFilter={setPriceRangeFilter}
                    categoriesOptions={categoriesOptions}
                    categoryIDFilter={categoryIDFilter}
                    setCategoryIdFilter={setCategoryIdFilter}
                    manufacturesOptions={manufacturesOptions}
                    manufactureIDFilter={manufactureIDFilter}
                    setManufactureIdFilter={setManufactureIdFilter}
                    originsOptions={originsOptions}
                    originIDFilter={originIDFilter}
                    setOriginIdFilter={setOriginIdFilter}
                    brandsOptions={brandsOptions}
                    brandIDFilter={brandIDFilter}
                    setBrandIdFilter={setBrandIdFilter}
                    ratingsOptions={ratingsOptions}
                    ratingsFilter={ratingsFilter}
                    setRatingsFilter={setRatingsFilter}
                  />
                </Canvas>
              </Grid>
              {/** end Filters vetical menu wrapper on Mobile*/}
              {/** products section */}
              <Grid item xs={12} md={9}>
                <Grid container className={classes.otherFiltersContainer}>
                  <Grid item xs={12} md={6}>
                    <ToggleButtonGroup
                      color="primary"
                      value={displayingWay}
                      exclusive
                      onChange={handleSelectDisplayWay}
                      aria-label="Display Way"
                      size="small"
                    >
                      <ToggleButton
                        value="grid"
                        aria-label="Grid"
                        className={classes.displayToggleButton}
                      >
                        <GridViewIcon />
                      </ToggleButton>
                      <ToggleButton
                        value="list"
                        aria-label="List"
                        className={classes.displayToggleButton}
                      >
                        <ListIcon />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={classes.sortingContainer}
                  >
                    <Typography
                      variant="subtitle1"
                      component="span"
                      className={classes.sortTitle}
                    >
                      {t("Sort")}:
                    </Typography>
                    <FormControl className={classes.selectContainer}>
                      <Select
                        variant="outlined"
                        size="small"
                        value={sortingTypeFilter}
                        displayEmpty
                        disableunderline="true"
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                        onChange={(e) => setSortingTypeFilter(e.target.value)}
                      >
                        {sortOptions.map((option) => (
                          <MenuItem value={option.value} key={option.label}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      variant="subtitle1"
                      component="span"
                      className={classes.viewTitle}
                    >
                      {t("Show")}:
                    </Typography>
                    <FormControl className={classes.selectContainer}>
                      <Select
                        value={pageSize}
                        size="small"
                        onChange={(e) => handleChangePageSize(e.target.value)}
                        displayEmpty
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                        variant="outlined"
                        disableunderline="true"
                      >
                        {pageSizeOptions.map((option) => (
                          <MenuItem value={option.value} key={option.label}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className={classes.searchFieldContainer}>
                    <TextField
                      variant="outlined"
                      type="text"
                      placeholder={t("Search field")}
                      value={searchedFilter}
                      onChange={(e) => setSearchedFilter(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") handleRefetch("FETCH");
                      }}
                      fullWidth
                      className={classes.searchInput}
                    />
                  </Grid>
                </Grid>
                {/** large Screens design */}
                <Grid
                  container
                  spacing={3}
                  className={classes.cardsMdContainer}
                >
                  {displayingWay == "list" &&
                    products.map((product) => (
                      <Grid item md={12} key={product.id}>
                        <ProductCardHorizontal
                          theme={theme}
                          product={product}
                        />
                      </Grid>
                    ))}
                  {displayingWay == "grid" &&
                    products.map((product) => (
                      <Grid item sm={4} xl={3} key={product.id}>
                        <ProductCardVertical theme={theme} product={product} />
                      </Grid>
                    ))}
                </Grid>
                {/** end of large Screens design */}
                {/** small Screens design */}
                <Grid
                  container
                  spacing={2}
                  className={classes.cardsSmallContainer}
                >
                  {products.map((product) => (
                    <Grid item sm={6} key={product.id}>
                      <ProductCardVertical theme={theme} product={product} />
                    </Grid>
                  ))}
                </Grid>
                {/** end of small Screens design */}
              </Grid>
              {/** end products section */}
              {/** pagination section */}
              <Grid item xs={12} className={classes.paginationContainer}>
                <AutoPagination
                  currentPage={currentPage}
                  onChangeCurrentPage={setCurrentPage}
                  pageCount={pageCount}
                />
              </Grid>
              {/** end pagination section */}
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale, query }) => {
  let data = null;
  let filters = null;
  try {
    const res = await getAutherisedFetch(
      ServerSideGetShopProductsList(handlePathFilters(query).httpRequestParams),
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    data = await res?.json();
    const filtersRes = await getFetch(
      GetShopFiltersList,
      process.env.NEXT_PUBLIC_MERCHANT,
      locale
    );
    filters = await filtersRes?.json();
  } catch (e) {}
  return {
    props: {
      filters: filters || null,
      data: data || null,
      tempPath: handlePathFilters(query),
    },
    revalidate: 20,
  };
};
