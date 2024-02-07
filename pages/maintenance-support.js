import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import useTranslation from "next-translate/useTranslation";
import { getValidationSchema } from "../components/pages/MaintenanceSupport/config";
import { getFetch, postAuthorizedFetch } from "../services/httpService";
import {
  AddNewItemReport,
  GetItemReportPaageInfo,
} from "../services/endpoints";
import {
  checkLoadImages,
  getSEOKeywordsContent,
} from "../utilies/utiliesFuctions";
import { Typography, Container, Box, Button } from "@mui/material";
import {
  TextInputField,
  NumberInputField,
  EmailInputField,
  TextAreaInputField,
  DatePickerInputField,
} from "../components/FormValidation/inputFields";
import MainCover from "../components/Shared/pageCover/mainCover/Type2";
import CustomLoader from "../components/Shared/customLoader";
import Alert from "../components/Shared/CustomAlert";
import useStyles from "../components/pages/MaintenanceSupport/style";

export default function MaintenanceAndSupport({ data, theme, headerType }) {
  const classes = useStyles();
  let { t } = useTranslation("common");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.title,
    description: data?.data?.description,
    image: data?.data?.image,
    breadcrumbs: [
      {
        title: t("home"),
        link: "/",
      },
      {
        title: data?.data?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    deviceName: "",
    purchaseDate: "",
    note: "",
  };

  const handleSubmitValues = async (values) => {
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      deviceName: values.deviceName,
      purchaseDate: values.purchaseDate,
      note: values.note,
    };
    const response = await postAuthorizedFetch(
      AddNewItemReport,
      data,
      router.locale
    );
    setLoading(false);
    response.status == 200 && setIsAlertOpen(true);
  };
  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema(t),
    onSubmit: (values) => handleSubmitValues(values),
  });

  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

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
            <title>{pageInfo.title}</title>
            <meta
              name="keywords"
              content={getSEOKeywordsContent(data?.data?.seoTags)}
            />
            <meta name="description" content={data?.data?.seoDescription} />
          </Head>
          <Container
            className={classes.innerContainer}
            disableGutters
            maxWidth="false"
          >
            <Box className={classes.boxForForms}>
              <Typography variant="h6" className={classes.leaveMessageText}>
                {t("leaveMessage")}
              </Typography>
              <form
                onSubmit={formik.handleSubmit}
                className={classes.boxForAllInputs}
              >
                <TextInputField
                  formikRef={formik}
                  placeHolder={t("namePlace")}
                  variant="outlined"
                  size="small"
                  classNames={classes.inputAll}
                  name="name"
                  value={formik.values.name}
                  handleChange={formik.handleChange}
                />
                <EmailInputField
                  formikRef={formik}
                  placeHolder={t("emailPlace")}
                  variant="outlined"
                  size="small"
                  classNames={classes.inputAll}
                  name="email"
                  value={formik.values.email}
                  handleChange={formik.handleChange}
                />
                <NumberInputField
                  formikRef={formik}
                  placeHolder={t("phonePlace")}
                  classNames={classes.inputAll}
                  size="small"
                  name="phone"
                  value={formik.values.phone}
                  handleChange={formik.handleChange}
                />
                <TextInputField
                  formikRef={formik}
                  placeHolder={t("deviceNamePlace")}
                  variant="outlined"
                  size="small"
                  classNames={classes.inputAll}
                  name="deviceName"
                  value={formik.values.deviceName}
                  handleChange={formik.handleChange}
                />
                <DatePickerInputField
                  classNames={classes.inputAll}
                  formikRef={formik}
                  placeHolder={t("purchaseDatePlace")}
                  handleChange={formik.handleChange}
                  name="purchaseDate"
                  value={
                    formik.values.purchaseDate && formik.values.purchaseDate
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextAreaInputField
                  formikRef={formik}
                  minRows={4}
                  classNames={`${classes.inputArea}`}
                  placeHolder={t("notesPlace")}
                  name="note"
                  value={formik.values.note}
                  handleChange={formik.handleChange}
                />
                <Box className={classes.boxForSubmit}>
                  <Button
                    type="submit"
                    className={classes.btnSubmit}
                    variant="contained"
                  >
                    {t("SubmitReport")}
                  </Button>
                </Box>
              </form>
            </Box>
          </Container>
        </Box>
        <Alert
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          autoHideDuration={5000}
          type="success"
          message={t("Your request has been successfully sent!")}
          position={{ vertical: "top", horizontal: "right" }}
        />
        ;
      </div>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  const res = await getFetch(
    GetItemReportPaageInfo,
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();
  return {
    props: {
      data: data || "",
    },
  };
}
