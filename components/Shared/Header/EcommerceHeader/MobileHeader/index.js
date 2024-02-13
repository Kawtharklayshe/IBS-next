import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrency } from "../../../../../Redux/slices/currencySlice";
import {
  setCurrentLanguagePref,
  setCurrentCurrencyPref,
} from "../../../../../utilies/utiliesFuctions";
import {
  languages,
  flagsEnum,
  langsEnum,
} from "../../../../../constants/enums";
import isHomePg from "../../../../../utilies/detectHomePage/isHomePg";
import { KeyboardArrowDown, SettingsOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Menu,
  Box,
  IconButton,
  Typography,
  MenuItem,
  Tooltip,
  Grid,
  Button,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import CartIcon from "../../../../../assets/SVG/CartIcon2";
// import AutocompleteSearchField from "../../../../UI/AutoSearchTextField/Type1";
import ContactsList from "./ContactsList";
import SocialMediaList from "./SocialMediaList";
import usePartialAnimiStyles from "../../CustomAnimation/partialAnimation";
import useUpperPartStyles from "../../CustomAnimation/upperPartHeader";
import ClientThemeSetting from "../../../ClientThemeModal";
import useStyles from "./style";

const MobileHeader = (props) => {
  const {
    theme,
    defaultFontScale,
    headerType,
    socialMediaLinks,
    toggleCartPopup,
    toggleMobileSideMenu,
    scrollTop,
    globalNavClassHandler,
    currencyOptions,
    isFirstRender,
  } = props;
  const Router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles({ scrollTop });
  let { t } = useTranslation("common");
  const upperPartStylesClasses = useUpperPartStyles();
  const partialAnimiClasses = usePartialAnimiStyles();
  const cartInfo = useSelector((state) => state.cart);
  const currencyInfo = useSelector((state) => state.currency.data);
  const [anchorElLanguages, setAnchorElLanguages] = useState(null);
  const [anchorElCurrency, setAnchorElCurrency] = useState(null);

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

    return isHomePg(Router) && isFirstRender && typeof window == "object";
  };

  // to calculate the animation delay for the elements after the nav items
  const calcDelay = (x, base) => {
    const delay = x + Number(`0.${base}`);
    return `${Math.round(delay * 10) / 10}s`;
  };

  return (
    <Box
      Container
      className={isReadyToAnimate() ? upperPartStylesClasses.root : undefined}
    >
      <Box className={globalNavClassHandler()}>
        {/** First Row */}
        <Box className={classes.firstSectionContainer}>
          <Grid container>
            <Grid item xs={9} className={classes.contactListContainer}>
              <ContactsList
                headerType={headerType}
                isReadyToAnimate={isReadyToAnimate}
                scrollTop={scrollTop}
                socialMediaLinks={socialMediaLinks}
              />
            </Grid>
            <Grid item xs={3} className={classes.socialMediaContainer}>
              <SocialMediaList
                headerType={headerType}
                isReadyToAnimate={isReadyToAnimate}
                scrollTop={scrollTop}
                socialMediaLinks={socialMediaLinks}
              />
            </Grid>
          </Grid>
        </Box>
        {/** Second Row */}
        <Box className={classes.secondSectionContainer}>
          <Grid container>
            <Grid item xs={6} className={classes.currencyAndLangContainer}>
              {/** Languages Menu */}
              <Button
                id="language-customized-button"
                aria-label="Languages"
                aria-controls={
                  Boolean(anchorElLanguages)
                    ? "language-customized-button"
                    : undefined
                }
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElLanguages) ? "true" : undefined}
                variant="text"
                disableElevation
                className={`${classes.languageButton} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(1.6, socialMediaLinks.length),
                }}
                onClick={handleOpenLangMenu}
                endIcon={<KeyboardArrowDown />}
              >
                <Image
                  src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${
                    flagsEnum[Router.locale]
                  }.svg`}
                  width={20}
                  height={20}
                  priority
                />
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.languageTitle}
                >
                  {langsEnum[Router.locale]}
                </Typography>
              </Button>
              <Menu
                sx={{ mt: "45px" }}
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
                    onClick={() => handleChangeCurrentLang(language.value)}
                    disabled={Router.locale == language.value}
                  >
                    <Link
                      textAlign="center"
                      href={Router.asPath}
                      locale={language.value}
                    >
                      <Typography textAlign="center">
                        {language.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
              {/** End Of Languages Menu */}
              {/** Currencies Menu */}
              <Button
                id="currency-customized-button"
                aria-controls={
                  Boolean(anchorElCurrency)
                    ? "currency-customized-button"
                    : undefined
                }
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElCurrency) ? "true" : undefined}
                variant="text"
                disableElevation
                className={`${classes.currencyButton} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(1.7, socialMediaLinks.length),
                }}
                onClick={handleOpenCurrencyMenu}
                endIcon={<KeyboardArrowDown />}
              >
                <Tooltip title="Currencies">
                  <SettingsOutlined className={classes.settingIcon} />
                </Tooltip>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.currencyTitle}
                >
                  {currencyInfo?.name}
                </Typography>
              </Button>
              <Menu
                sx={{ mt: "45px" }}
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
                    <Typography textAlign="center">{currency.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              {/** End Of Currencies Menu */}
              {/** Client theme setting */}
              <Box
                className={
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }
                sx={{
                  animationDelay: calcDelay(1.8, socialMediaLinks.length),
                }}
              >
                <ClientThemeSetting
                  globalThemeConfig={theme}
                  defaultFontScale={defaultFontScale}
                />
              </Box>
              {/** end of Client theme setting */}
            </Grid>
            <Grid
              item
              xs={6}
              className={`${classes.searchInputContainer} ${
                isReadyToAnimate() ? partialAnimiClasses.root : undefined
              }`}
              sx={{
                animationDelay: calcDelay(1.9, socialMediaLinks.length),
              }}
            >
              {/* <AutocompleteSearchField
                onClickSearchButton={handleNavigateToShopPage}
                onSelecting={handleSelectOption}
              /> */}
            </Grid>
          </Grid>
        </Box>
        {/** Third Row */}
        <Box>
          <Grid container>
            <Grid item xs={12} className={classes.lastSectionContainer}>
              {/** Menu section */}
              <IconButton
                size="medium"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMobileSideMenu}
                className={`${classes.menuButton} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(2.1, socialMediaLinks.length),
                }}
              >
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
              {/** end of Menu section */}
              {/** Logo section */}
              {theme?.logo && (
                <Image
                  src={theme.logo}
                  alt="logo"
                  width={150}
                  height={50}
                  priority
                  className={`${classes.logoImage} ${
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }`}
                  style={{
                    animationDelay: calcDelay(2.3, socialMediaLinks.length),
                  }}
                />
              )}
              {/** end of Logo section */}
              {/** cart section */}
              <Badge
                badgeContent={cartInfo.data?.cartItems.length}
                className={`${classes.cartBadge} ${
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }`}
                sx={{
                  animationDelay: calcDelay(2.5, socialMediaLinks.length),
                }}
                onClick={toggleCartPopup}
              >
                <CartIcon className={classes.cartIcon} />
              </Badge>
              {/** End of cart section */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default MobileHeader;
