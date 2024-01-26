import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MobileMenuBuilder from "../mobileMenuBuilder";
const MobileSideMenu = ({ navItems, theme, isSideMenuOpen, toggle }) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();

  return (
    <Grid
      sx={{
        position: "fixed",
        background: isSideMenuOpen ? "#00000099" : "transparent",
        width: isSideMenuOpen ? "100%" : "0%",
        height: "100vh",
        zIndex: 999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      id="mobileSideMenuDropShadowWrapper"
    >
      <Grid
        item
        xs={12}
        sx={{
          position: "fixed",
          background: theme?.backgroundColor,
          borderRight: `1px solid #bcbcbc`,
          width: {
            xs: isSideMenuOpen ? "80%" : "0%",
            sm: isSideMenuOpen ? "60%" : "0%",
            md: isSideMenuOpen ? "30%" : "0%",
          },
          height: "100vh",
          zIndex: 1000,
          top: 0,
          right: isSideMenuOpen ? 0 : "-40px",
          left: isSideMenuOpen ? 0 : router.locale == "ar" ? 0 : "-40px",
          transition: "all 0.2s linear",
          p: 1,
          px: 2,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
        id="innerMobileSideContainer"
      >
        <Box>
          {/** colse menu icon */}
          <CloseIcon
            sx={{
              fontSize: 26,
              color: "onBackground.dark",
              cursor: "pointer",
              position: "absolute",
              top: "2%",
              right: router.locale == "ar" ? "unset" : "2%",
              left: router.locale != "ar" ? "unset" : "2%",
              ":hover": {
                color: "#bcbcbc",
              },
            }}
            onClick={toggle}
          />
          {/** end of colse menu icon */}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            mt: 2,
          }}
        >
          {/** content section */}
          <Grid item xs={12}>
            <MobileMenuBuilder
              navList={navItems}
              theme={theme}
              toggle={toggle}
            />
          </Grid>
          {/** end of content section */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MobileSideMenu;
