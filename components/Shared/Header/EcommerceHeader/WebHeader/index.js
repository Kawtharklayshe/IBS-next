import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
import {
  languages,
  langsEnum,
  headerTypes,
} from "../../../../../constants/enums";
import { updateCurrency } from "../../../../../Redux/slices/currencySlice";
import {
  reshapeNavList,
  setCurrentLanguagePref,
  setCurrentCurrencyPref,
} from "../../../../../utilies/utiliesFuctions";
import isHomePg from "../../../../../utilies/detectHomePage/isHomePg";
import MenuBuilder from "../../MenuBuilder";
import CategoriesSection from "./CategoriesSection";
import AutocompleteSearchField from "../../../../UI/AutoSearchTextField/Type1";
import {
  Search,
  KeyboardArrowDown,
  LanguageOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Menu,
  Box,
  IconButton,
  Typography,
  MenuItem,
  Container,
  Tooltip,
  Grid,
  TextField,
  Button,
  Zoom,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import CartIcon from "../../../../../assets/SVG/CartIcon2";
import UserIcon from "../../../../../assets/User_light.js";
import WishlistIcon from "../../../../../assets/Group7787.js";
import OrdersIcon from "../../../../../assets/Order_light.js";
import useCubicAnimiStyles from "../../CustomAnimation/basicCubicAnimation";
import useUpperPartStyles from "../../CustomAnimation/upperPartHeader";
import usePartialAnimiStyles from "../../CustomAnimation/partialAnimation";
import ClientThemeSetting from "../../../ClientThemeModal";
import useStyles from "./style";

const WebHeader = (props) => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.auth);
  const currencyInfo = useSelector((state) => state.currency);
  let { t } = useTranslation("common");

  const {
    pages,
    theme,
    defaultFontScale,
    headerType,
    socialMediaLinks,
    toggleCartPopup,
    scrollTop,
    globalNavClassHandler,
    currencyOptions,
    isFirstRender,
    categories,
  } = props;
  const [anchorElLanguages, setAnchorElLanguages] = useState(null);
  const [anchorElCurrency, setAnchorElCurrency] = useState(null);

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const classes = useStyles({
    scrollTop,
    headerType,
    headerTypes,
    showSearchBox: show,
  });
  const cubicAnimatioClasses = useCubicAnimiStyles();
  const upperPartStylesClasses = useUpperPartStyles();
  const partialAnimiClasses = usePartialAnimiStyles();

  const newNavBarItems = reshapeNavList(pages);

  const currencies = currencyOptions?.map((currency) => ({
    id: currency.id,
    name: currency.name,
    value: currency.code,
  }));

  /// Languages Menu functions
  const handleOpenLangMenu = (event) => {
    setAnchorElLanguages(event.currentTarget);
  };
  const handleCloseLangMenu = () => {
    setAnchorElLanguages(null);
  };

  const handleChangeCurrentLang = (langCode) => {
    setCurrentLanguagePref(langCode);
    setAnchorElLanguages(null);
  };

  /// Currencies Menu functions
  const handleOpenCurrencyMenu = (event) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const handleCloseCurrencyMenu = (currencyData) => {
    setAnchorElCurrency(null);
    setCurrentCurrencyPref(currencyData);
    dispatch(updateCurrency(currencyData));
    typeof window === "object" && window.location.reload();
  };

  // Login or user menu functions
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // functions for searching with search input field
  const handleNavigateToShopPage = (value = "") => {
    Router.push(`/shop?PN=${value}`);
  };

  const handleSelectOption = (optionSlug, optionName) => {
    if (optionSlug && optionName) {
      Router.push(`/itemDetails/${optionSlug}`);
    }
  };

  // to apply the animation
  const isReadyToAnimate = () => {
    if (typeof window !== "object") return;
    return isHomePg(Router) && isFirstRender && typeof window === "object";
  };

  // to calculate the animation delay for the elements after the nav items
  const calcDelay = (x) => {
    const delay = x + newNavBarItems.length * 0.04;
    return `${Math.round(delay * 10) / 10}s`;
  };

  const handleNavigateUser = () => {
    if (!userInfo?.isLogged) {
      Router.push("/signin");
    }
  };

  const handleNavigateOrdersPage = () => {
    if (!userInfo?.isLogged) {
      Router.push("/signin");
    } else Router.push("/orders");
  };

  return (
    <Box className={globalNavClassHandler()} id="navbar">
      <Box
        className={`${classes.root} ${
          isReadyToAnimate() ? upperPartStylesClasses.root : undefined
        }`}
      >
        {/** First Row section */}
        <Container maxWidth="false" className={classes.firstRowContainer}>
          <Box className={classes.innerFirstRowContainer}>
            <Grid container>
              {/** Logo section */}
              <Grid
                item
                md={4}
                className={`${classes.logoContainer} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: `0.2s`,
                }}
              >
                {theme?.logo && (
                  <Link href="/">
                    <img
                      src={theme.logo}
                      alt="logo"
                      className={classes.logoImage}
                    />
                  </Link>
                )}
              </Grid>
              {/** end of Logo section */}
              {/** Nav items, Cart and Language section */}
              <Grid item md={8}>
                <Grid
                  container
                  id="navParentContainer"
                  className={classes.secondPartContainer}
                >
                  <Grid item md={8} lg={9}>
                    {/** Nav items */}
                    {!show && (
                      <MenuBuilder
                        theme={theme}
                        navList={newNavBarItems}
                        isReadyToAnimate={isReadyToAnimate}
                        animationDelay={0.24} /// should be start after the logo has been shown[the delay for logo is 0.2s], so we should increase it by 0.04s
                      />
                    )}
                    {/** end of Nav items */}
                    {/** Search Input section */}
                    {show && (
                      <AutocompleteSearchField
                        onClickSearchButton={handleNavigateToShopPage}
                        onSelecting={handleSelectOption}
                        onClose={toggle}
                        applyAnimation
                      />
                    )}
                    {/** end of Search input section */}
                  </Grid>
                  {/** Cart and language section */}
                  <Grid
                    item
                    md={4}
                    lg={3}
                    id="languageContainer"
                    className={classes.cartAndLanguageContainer}
                  >
                    {/** Search section */}
                    {!show && (
                      <Button
                        size="small"
                        className={`${classes.searchButton} ${
                          isReadyToAnimate()
                            ? partialAnimiClasses.root
                            : undefined
                        }`}
                        sx={{
                          animationDelay: calcDelay(0.28),
                        }}
                        onClick={toggle}
                      >
                        <Search className={classes.searchIcon} />
                      </Button>
                    )}
                    {/** end of Search section */}
                    {/** Cart section */}
                    <Box
                      className={`${cubicAnimatioClasses.root} ${
                        isReadyToAnimate()
                          ? partialAnimiClasses.root
                          : undefined
                      }`}
                      sx={{
                        animationDelay: calcDelay(0.32),
                      }}
                      onClick={toggleCartPopup}
                    >
                      <Badge
                        badgeContent={cartInfo.data?.cartItems.length}
                        className={classes.cartBadge}
                      >
                        <span className="icon">
                          {<CartIcon className={classes.cartIcon} />}
                        </span>
                      </Badge>
                    </Box>
                    {/** end of Cart section */}
                    {/** Client theme setting */}
                    <Box
                      className={`${cubicAnimatioClasses.root} ${
                        isReadyToAnimate()
                          ? partialAnimiClasses.root
                          : undefined
                      }`}
                      sx={{
                        animationDelay: calcDelay(0.36),
                      }}
                    >
                      <ClientThemeSetting
                        globalThemeConfig={theme}
                        defaultFontScale={defaultFontScale}
                      />
                    </Box>
                    {/** end of Client theme setting */}
                    {/** Currency, language section */}
                    <Box className={`${classes.currencyAndLangContainer}`}>
                      {/** Languages Menu */}
                      <Button
                        id="language-customized-button"
                        aria-controls={
                          Boolean(anchorElLanguages)
                            ? "language-customized-button"
                            : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          Boolean(anchorElLanguages) ? "true" : undefined
                        }
                        variant="text"
                        className={`${classes.languageButton} ${
                          cubicAnimatioClasses.root
                        } ${
                          isReadyToAnimate()
                            ? partialAnimiClasses.root
                            : undefined
                        }`}
                        sx={{
                          animationDelay: calcDelay(0.4),
                        }}
                        disableElevation
                        onClick={handleOpenLangMenu}
                      >
                        <Typography
                          variant="subtitle2"
                          component="span"
                          className={classes.languageTitle}
                        >
                          {langsEnum[Router.locale]}
                        </Typography>
                      </Button>
                      <Menu
                        className={`${classes.languageMenu} ${
                          isReadyToAnimate()
                            ? partialAnimiClasses.root
                            : undefined
                        }`}
                        id="language-customized-button"
                        anchorEl={anchorElLanguages}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElLanguages)}
                        onClose={handleCloseLangMenu}
                        disableScrollLock={true}
                      >
                        {languages.map((language) => (
                          <MenuItem
                            key={language.value}
                            onClick={() =>
                              handleChangeCurrentLang(language.value)
                            }
                            disabled={Router.locale == language.value}
                          >
                            <Link href={Router.asPath} locale={language.value}>
                              <Typography>{language.name}</Typography>
                            </Link>
                          </MenuItem>
                        ))}
                      </Menu>
                      {/** end of Languages Menu */}
                      {/** Currencies Menu */}
                      <Button
                        id="currency-customized-button"
                        aria-controls={
                          Boolean(anchorElCurrency)
                            ? "currency-customized-button"
                            : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          Boolean(anchorElCurrency) ? "true" : undefined
                        }
                        variant="text"
                        className={`${classes.currencyButton} ${
                          isReadyToAnimate()
                            ? partialAnimiClasses.root
                            : undefined
                        }`}
                        sx={{
                          animationDelay: calcDelay(0.44),
                        }}
                        disableElevation
                        onClick={handleOpenCurrencyMenu}
                        endIcon={<KeyboardArrowDown />}
                      >
                        <Typography
                          variant="subtitle2"
                          component="span"
                          className={classes.currencyTitle}
                        >
                          {currencyInfo?.data?.name}
                        </Typography>
                      </Button>
                      <Menu
                        className={`${classes.currencyMenu} ${
                          isReadyToAnimate()
                            ? partialAnimiClasses.root
                            : undefined
                        }`}
                        id="currency-customized-button"
                        anchorEl={anchorElCurrency}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElCurrency)}
                        onClose={() => setAnchorElCurrency(null)}
                        disableScrollLock={true}
                      >
                        {currencies?.map((currency) => (
                          <MenuItem
                            key={currency.value}
                            onClick={() => handleCloseCurrencyMenu(currency)}
                          >
                            <Typography>{currency.name}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                      {/** end of Currencies Menu */}
                    </Box>
                    {/** end of Currency, language section */}
                  </Grid>
                  {/** end of Cart and language section */}
                </Grid>
              </Grid>
              {/** End of Nav items, Cart and Language section */}
            </Grid>
          </Box>
        </Container>
        {/** End of First Row section */}
        {/** Second Row section */}
        <CategoriesSection
          categories={categories}
          isReadyToAnimate={isReadyToAnimate}
          animationDelay={calcDelay(0.48)}
        />
        {/** end of Second Row section */}
      </Box>
    </Box>
  );
};
export default WebHeader;
