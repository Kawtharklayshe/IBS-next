import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { setCurrentLanguagePref } from "../../../../utilies/utiliesFuctions";
import {
  languages,
  flagsEnum,
  langsEnum,
  headerTypes,
} from "../../../../constants/enums";
import { reshapeNavList } from "../../../../utilies/utiliesFuctions";
import isHomePg from "../../../../utilies/detectHomePage/isHomePg";
import Canvas from "../Canvas";
import MenuBuilder from "../MenuBuilder";
import MobileMenuBuilder from "../MobileMenuBuilder";
import FirstRowLinksSection from "./FirstRowLinksSection";
import SocialMediaList from "./SocialMediaList";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Menu,
  Box,
  IconButton,
  Typography,
  MenuItem,
  Container,
  Tooltip,
  Grid,
} from "@mui/material";
import useUpperPartStyles from "../CustomAnimation/upperPartHeader";
import usePartialAnimiStyles from "../CustomAnimation/partialAnimation";
import ClientThemeSetting from "../../ClientThemeModal";
import useStyles from "./style";

const FolioHeader = (props) => {
  const Router = useRouter();
  let { t } = useTranslation("common");
  const {
    pages,
    theme,
    defaultFontScale,
    devicesCategory,
    headerType,
    socialMediaLinks,
    currencyOptions,
    eventTypes,
  } = props;

  const upperPartStylesClasses = useUpperPartStyles();
  const partialAnimiClasses = usePartialAnimiStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scrollTop, setScrollTop] = useState(false); //to apply effect on navbar
  const [isFirstRender, setIsFirstRender] = useState(true); //to apply effect on navbar
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const newNavBarItems = reshapeNavList(pages);
  const classes = useStyles({
    headerType,
    headerTypes,
    scrollTop,
  });

  const toggleMobileMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = (langCode) => {
    setCurrentLanguagePref(langCode);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // to detect the first enterance to the home component, so we could apply the animation just once
  // *************************************************** */
  const handleFirstRender = () => {
    if (!isHomePg(Router) && !isFirstRender) return;

    let fromTop = document.documentElement.scrollTop;
    if (fromTop > 0) {
      setIsFirstRender(false);
    }
  };

  // to make the header lower part fixed when window.scrollY > 100
  //************************************ */
  const handleScrollTop = () => {
    if (window.scrollY <= 48) {
      setScrollTop(false);
    } else {
      if (scrollTop) return;

      setScrollTop(true);
    }
  };

  const handleScroll = () => {
    handleFirstRender();
    handleScrollTop();
  };

  // for handling  global nav behavior on scrolling
  useEffect(() => {
    if (typeof window !== "object") return;

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // descover when we're on mid & small screens
  useEffect(() => {
    if (typeof window !== "object") return;

    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setIsMobileView(true)
        : setIsMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  // checking of header type first [colored_background,transparent_background]
  // for determining custom style (background color, color, position)
  const getAppropriateHeaderClasses = () => {
    if (scrollTop) {
      return classes.globalNav;
    } else {
      if (headerType == headerTypes.colored)
        return classes.fixedHeaderScrollOff;
      else return classes.headerContainer;
    }
  };

  // to apply the animation
  const isReadyToAnimate = () => {
    if (typeof window !== "object") return;

    return isHomePg(Router) && isFirstRender && typeof window == "object";
  };

  return (
    <Box className={getAppropriateHeaderClasses()} id="navbar">
      <Container
        maxWidth="lg"
        className={isReadyToAnimate() ? upperPartStylesClasses.root : undefined}
      >
        <Box className={classes.innerContainer}>
          {/** First Row section */}
          <Box className={classes.firstRowContainer}>
            <Grid container>
              {/** Logo Section */}
              <Grid
                item
                xs={7}
                sm={2}
                className={
                  isReadyToAnimate() ? partialAnimiClasses.root : undefined
                }
                sx={{ animationDelay: `0.2s` }}
              >
                {theme?.logo && (
                  <Link href="/" passHref>
                    <a>
                      <Image
                        src={theme.logo}
                        alt="logo"
                        width={100}
                        height={38}
                        className={classes.logoImage}
                        priority
                      />
                    </a>
                  </Link>
                )}
              </Grid>
              {/** End Of Logo Section */}
              {/** Links, Language Section */}
              <Grid item xs={5} sm={10}>
                <Box className={classes.linksAndLangContainer}>
                  <FirstRowLinksSection
                    socialMediaLinks={socialMediaLinks}
                    isReadyToAnimate={isReadyToAnimate}
                    animationDelay={0.3} // should start after logo has been shown
                    theme={theme}
                  />
                  {/** Client theme setting */}
                  <Box
                    className={
                      isReadyToAnimate() ? partialAnimiClasses.root : undefined
                    }
                    sx={{
                      animationDelay: `0.42s`, // should start after Links section has been shown
                    }}
                  >
                    <ClientThemeSetting
                      globalThemeConfig={theme}
                      defaultFontScale={defaultFontScale}
                    />
                  </Box>
                  {/** end of Client theme setting */}
                  {/** Language section */}
                  <Box
                    className={`${classes.languageContainer} ${
                      isReadyToAnimate() ? partialAnimiClasses.root : undefined
                    }`}
                    sx={{
                      animationDelay: `0.46s`, // should start after client theme icon has been shown
                    }}
                  >
                    <Tooltip title="Languages">
                      <IconButton
                        onClick={handleOpenUserMenu}
                        className={classes.languageIcon}
                      >
                        <Image
                          src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${
                            flagsEnum[Router.locale]
                          }.svg`}
                          width={20}
                          height={20}
                          priority
                        />
                      </IconButton>
                    </Tooltip>
                    <Typography
                      variant="subtitle2"
                      component="span"
                      className={classes.languageTitle}
                    >
                      {langsEnum[Router.locale]}
                    </Typography>
                    <Menu
                      id="menu-appbar"
                      className={classes.languageMenu}
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                      disableScrollLock
                    >
                      {languages.map((language) => (
                        <MenuItem
                          key={language.value}
                          onClick={() => handleCloseNavMenu(language.value)}
                          disabled={Router.locale == language.value}
                        >
                          <Link href={Router.asPath} locale={language.value}>
                            <Typography textAlign="center">
                              {language.name}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  {/** End Of Language section */}
                </Box>
              </Grid>
              {/** End Of Links, Language Section */}
            </Grid>
          </Box>
          {/** End Of First Row section */}
          {/** Second Row section */}
          <Grid
            container
            className={classes.secondRowContainer}
            id="navParentContainer"
          >
            {/** Menu Section */}
            <Grid item md={9} lg={10} className={classes.menuContainer}>
              <MenuBuilder
                navList={newNavBarItems}
                theme={theme}
                isReadyToAnimate={isReadyToAnimate}
                animationDelay={0.54} // should start after first row has been shown
              />
            </Grid>
            {/** End Of Menu Section */}
            {/** Social Media Links Section */}
            <Grid
              item
              xs={12}
              md={3}
              lg={2}
              className={classes.socialMediaContainer}
              id="languageContainer"
            >
              {/* Menu Section on mobile[small screens] */}
              <Box className={classes.mobileMenuContainer}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  className={`${classes.mobileMenuIcon} ${
                    isReadyToAnimate() ? partialAnimiClasses.root : undefined
                  }`}
                  sx={{ animationDelay: `1.36s` }}
                  onClick={toggleMobileMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Canvas
                  isOpen={isSideMenuOpen}
                  toggle={toggleMobileMenu}
                  setToggle={setIsSideMenuOpen}
                >
                  <MobileMenuBuilder
                    navList={newNavBarItems}
                    theme={theme}
                    toggle={toggleMobileMenu}
                  />
                </Canvas>
              </Box>
              {/* End Of Menu Section on mobile[small screens] */}
              {/**  Media Links Section */}
              <Box className={classes.mediaLinksContainer}>
                {socialMediaLinks && (
                  <SocialMediaList
                    headerType={headerType}
                    isMobileView={isMobileView}
                    isReadyToAnimate={isReadyToAnimate}
                    previousDelay={0.8} // should start after nav menu has been shown
                    pages={pages}
                    scrollTop={scrollTop}
                    socialMediaLinks={socialMediaLinks}
                  />
                )}
              </Box>
              {/** End Of Media Links Section */}
            </Grid>
            {/** End Of Social Media Links Section */}
          </Grid>
          {/** End Of Second Row section */}
        </Box>
      </Container>
    </Box>
  );
};
export default FolioHeader;
