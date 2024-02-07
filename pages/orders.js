import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import { Tabs, Tab, Box, Container } from "@mui/material";
import TabPanel from "../components/pages/Orders/TabPanel";
import CustomLoader from "../components/Shared/customLoader";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import MyOrdersSection from "../components/pages/Orders/MyOrdersSection";
import useStyles from "../components/pages/Orders/style";

export default function Orders({ headerType, theme }) {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [pageInfo, setPageInfo] = useState({
    title: "",
    description: "",
    image: "",
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: t("My Orders"),
        link: "",
      },
    ],
  });

  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11Props(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <Head>
          <title>{t("My Orders")}</title>
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
            <Box className={classes.headerContainer}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className={classes.tabsContainer}
              >
                <Tab
                  label={t("My Orders")}
                  {...a11Props(0)}
                  className={classes.tab}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <MyOrdersSection theme={theme} />
            </TabPanel>
          </Container>
        </Box>
      </div>
    </div>
  );
}
