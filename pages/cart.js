import Head from "next/head";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { checkLoadImages } from "../utilies/utiliesFuctions";
import { Grid, Container, Box } from "@mui/material";
import CustomLoader from "../components/Shared/customLoader";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import StepperSection from "../components/pages/Cart/StepperSection";
import CartSection from "../components/pages/Cart/CartSection";
import PaymentSection from "../components/pages/Cart/PaymentSection";
import CompleteSection from "../components/pages/Cart/CompleteSection";
import useStyles from "../components/pages/Cart/style";

export default function Cart({ theme, headerType }) {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const { tab } = router.query;
  const [loading, setLoading] = useState(true);
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
        title: t("Cart"),
        link: "",
      },
    ],
  });
  const [activeStep, setActiveStep] = useState(tab ? 1 : 0);
  const [skipped, setSkipped] = useState(new Set());
  const [succeededOrderData, setSucceededOrderData] = useState();
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const onSucceedOrder = (orderData, paymentWay) => {
    setSucceededOrderData({ orderData, paymentWay });
    handleNext();
  };

  return (
    <div>
      <div className={!loading ? "none" : undefined}>
        <CustomLoader />
      </div>
      <div className={loading ? "hidden" : undefined}>
        <MainCover
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image}
          headerType={headerType}
        />
        <Box className={classes.root}>
          <Head>
            <title>{t("Cart")}</title>
          </Head>
          <Container maxWidth="false" className={classes.innerConatiner}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <StepperSection activeStep={activeStep} />
                {activeStep == 0 && (
                  <CartSection theme={theme} onNextStep={handleNext} />
                )}
                {activeStep == 1 && (
                  <PaymentSection
                    theme={theme}
                    onSucceedOrder={onSucceedOrder}
                  />
                )}
                {activeStep == 2 && (
                  <CompleteSection
                    theme={theme}
                    orderInfo={succeededOrderData}
                  />
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}
