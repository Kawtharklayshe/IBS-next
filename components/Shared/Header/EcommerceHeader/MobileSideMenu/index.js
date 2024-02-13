import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Grid, Typography, Divider, Box } from "@mui/material";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
// import AutocompleteSearchField from "../../../../UI/AutoSearchTextField/Type1";
import MobileMenuBuilder from "../../MobileMenuBuilder";
import Canvas from "../../Canvas";
import SocialMediaList from "./SocialMediaList";
import useStyles from "./style";

const MobileSideMenu = ({
  data,
  socialMediaLinks,
  theme,
  toggle,
  setToggle,
  categories,
  isSideMenuOpen,
}) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const userInfo = useSelector((state) => state.auth);
  const classes = useStyles();

  // functions for searching with search input field
  const handleNavigateToShopPage = (value = "") => {
    router.push(`/shop?PN=${value}`);
    toggle();
  };

  const handleSelectOption = (optionSlug, optionName) => {
    if (optionSlug && optionName) {
      router.push(`/itemDetails/${optionSlug}`);
      toggle();
    }
  };

  return (
    <Canvas isOpen={isSideMenuOpen} toggle={toggle} setToggle={setToggle}>
      {/** header section */}
      <Grid item xs={12} className={classes.headerContainer}>
        {theme?.logo && (
          <Image
            src={theme.logo}
            alt="logo"
            width={200}
            height={50}
            className={classes.logoImage}
            priority
          />
        )}
        <Box className={classes.searchInputContainer}>
          {/* <AutocompleteSearchField
            onClickSearchButton={handleNavigateToShopPage}
            onSelecting={handleSelectOption}
            applyAnimation
          /> */}
        </Box>
      </Grid>
      {/** end of header section */}
      {/** content section */}
      <MobileMenuBuilder
        navList={data}
        theme={theme}
        toggle={toggle}
        categories={categories}
      />
      {/** end of content section */}
      {/** Account section */}
      {/* <Grid item xs={12} className={classes.accountSectionContainer}>
        <Typography
          variant="h6"
          component="h2"
          className={classes.accountTitle}
        >
          {t("My Account")}
        </Typography>
      </Grid> */}
      {/* <Divider /> */}
      {/** end of Account section */}
      {/** Login section */}
      {/* {!userInfo?.isLogged && (
        <Grid item xs={12} className={classes.loginSectionContainer}>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.loginTitle}
            onClick={() => {
              toggle();
              router.push("/signin");
            }}
          >
            <PersonSharpIcon className={classes.loginIcon} />
            {t("Login")}
          </Typography>
          <Divider className={classes.divider} />
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.loginTitle}
            onClick={() => {
              toggle();
              router.push("/signup");
            }}
          >
            <GroupAddRoundedIcon className={classes.loginIcon} />
            {t("Register")}
          </Typography>
        </Grid>
      )} */}
      {/** end of Login section */}
      {/** Social media section */}
      <Grid item xs={12} className={classes.socialMediaContainer}>
        <SocialMediaList socialMediaLinks={socialMediaLinks} />
      </Grid>
      {/** end of Social media section */}
    </Canvas>
  );
};

export default MobileSideMenu;
