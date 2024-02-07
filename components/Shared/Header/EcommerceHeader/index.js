import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { headerTypes } from "../../../../constants/enums";
import isHomePg from "../../../../utilies/detectHomePage/isHomePg";
import { reshapeNavList } from "../../../../utilies/utiliesFuctions";
import { Grid } from "@mui/material";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";
import CartPopup from "./CartPopup";
import MobileSideMenu from "./MobileSideMenu";
import useAnimationStyles from "../CustomAnimation/animateBottomPart";
import useStyles from "./style";

const EcommerceHeader = (props) => {
  const {
    pages,
    theme,
    defaultFontScale,
    devicesCategory,
    headerType,
    socialMediaLinks,
    currencyOptions,
  } = props;
  const Router = useRouter();
  const classes = useStyles();
  const animationclasses = useAnimationStyles();
  const [scrollTop, setScrollTop] = useState(false); //to apply effect on navbar
  const [isFirstRender, setIsFirstRender] = useState(true); //to detect the first render for prevent the header animation after it
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggle = () => setIsCartPopupOpen(!isCartPopupOpen);
  const toggleMobileSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  /** mobile side menu data */
  const mobileSideMenuData = reshapeNavList(pages);
  const categories = devicesCategory;

  // checking of header type first [colored_background,transparent_background]
  // for determining custom style (background color, color, position)
  const getAppropriateHeaderClasses = () => {
    if (scrollTop) {
      return animationclasses.root;
    } else {
      if (headerType == headerTypes.colored)
        return classes.fixedHeaderScrollOff;
      else return classes.headerContainer;
    }
  };

  // to make the header lower part fixed when window.scrollY > 48
  //************************************ */
  const handleScrollTop = () => {
    if (window.scrollY <= 48) {
      setScrollTop(false);
    } else {
      if (scrollTop) return;

      setScrollTop(true);
    }
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

  const handleEvent = () => {
    handleScrollTop();
    handleFirstRender();
  };

  // for handling  global nav behavior on scrolling
  useEffect(() => {
    if (typeof window === "object")
      document.addEventListener("scroll", handleEvent);

    return () => {
      document.removeEventListener("scroll", handleEvent);
    };
  }, []);

  // Reset the isFirstRender state when you navigate back to the Home pg
  useEffect(() => {
    if (!isHomePg(Router)) return;
    setIsFirstRender(true);
  }, [Router.asPath]);

  // for handle click event outside the cart popup menu
  useEffect(() => {
    if (typeof window === "object") {
      document.addEventListener("click", (e) => {
        if (e.target.id == "cartDropShadowWrapper") setIsCartPopupOpen(false);
      });

      return document.removeEventListener("click", (e) => {
        if (e.target.id == "cartDropShadowWrapper") setIsCartPopupOpen(false);
      });
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={0} md={12} className={classes.webHeaderContainer}>
        <WebHeader
          pages={pages}
          theme={theme}
          defaultFontScale={defaultFontScale}
          headerType={headerType}
          socialMediaLinks={socialMediaLinks}
          toggleCartPopup={toggle}
          scrollTop={scrollTop}
          globalNavClassHandler={getAppropriateHeaderClasses}
          currencyOptions={currencyOptions}
          isFirstRender={isFirstRender}
          categories={categories}
        />
      </Grid>
      <Grid item xs={12} md={0} className={classes.mobileHeaderContainer}>
        <MobileHeader
          theme={theme}
          defaultFontScale={defaultFontScale}
          headerType={headerType}
          socialMediaLinks={socialMediaLinks}
          toggleCartPopup={toggle}
          toggleMobileSideMenu={toggleMobileSideMenu}
          scrollTop={scrollTop}
          globalNavClassHandler={getAppropriateHeaderClasses}
          currencyOptions={currencyOptions}
          isFirstRender={isFirstRender}
        />
        <MobileSideMenu
          theme={theme}
          toggle={toggleMobileSideMenu}
          setToggle={setIsSideMenuOpen}
          data={mobileSideMenuData}
          socialMediaLinks={socialMediaLinks}
          categories={categories}
          isSideMenuOpen={isSideMenuOpen}
        />
      </Grid>
      <CartPopup
        theme={theme}
        isCartPopupOpen={isCartPopupOpen}
        toggle={toggle}
      />
    </Grid>
  );
};

export default EcommerceHeader;
