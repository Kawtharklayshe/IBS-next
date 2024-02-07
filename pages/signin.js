import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../Redux/slices/authSlice/aysncActions";
import useTranslation from "next-translate/useTranslation";
import { postFetch } from "../services/httpService";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  FORGET_PASSWORD,
  CHECKFORGETCODE,
  POSTNEWPASSWORD,
} from "../services/endpoints";
import { Button, Modal, Typography, Box, Grid, TextField } from "@mui/material";
import {
  EmailInputFieldWithIcon,
  PasswordInputFieldWithIcon,
} from "../components/FormValidation/inputFields";
import CircularProgress from "@mui/material/CircularProgress";
import SignInBackground1 from "../assets/SVG/SignInBackground1";
import SignInBackground2 from "../assets/SVG/SignInBackground2";
import useStyles from "../components/pages/SignIn/style";
function SignIN({ theme }) {
  let { t } = useTranslation("common");
  const Router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const userInfo = useSelector((state) => state.auth);
  const [forgetEmail, setForgetEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingForget, setLoadingForget] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openCheckForget, setOpenCheckForget] = useState(false);
  const [CheckForgetCode, setCheckForgetCode] = useState();
  const [openNewPassword, setOpenNewPassword] = useState(false);
  const [loadingUpdatePassword, setLoadingUpdatePassword] = useState(false);
  const [newPasword, setNewPassword] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmitValues(values),
  });

  const redirectToHomePage = (isConfirmed = true, email = "") => {
    if (isConfirmed) {
      toast.success("Welcome Back");
      Router.push("/");
    } else {
      toast.info("Redirecting to Confirmation Page ...");
      Router.push({
        pathname: "/signup",
        query: {
          email: email,
          isConfirmed: false,
        },
      });
    }
  };

  const handleSubmitValues = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    dispatch(
      login({
        body: data,
        locale: Router.locale,
        setLoading,
        callBack: redirectToHomePage,
      })
    );
  };

  const hanldeForget = async () => {
    setLoadingForget(true);
    const body = {
      email: forgetEmail,
    };
    const res = await postFetch(
      FORGET_PASSWORD,
      process.env.NEXT_PUBLIC_MERCHANT,
      body
    );
    const sub = await res.json();
    if (sub?.isSuccess == true) {
      toast.success("A new code was sended to your email.. please check");
      setOpenConfirm(false);
      setOpenCheckForget(true);
      setLoadingForget(false);
    } else {
      toast.error("Please try again");
      setLoadingForget(false);
      setOpenConfirm(false);
    }
  };

  const handleCheckForget = async () => {
    setLoadingCheck(true);
    const body = {
      email: forgetEmail,
      code: CheckForgetCode,
    };
    const res = await postFetch(
      CHECKFORGETCODE,
      process.env.NEXT_PUBLIC_MERCHANT,
      body
    );
    const sub = await res.json();
    if (sub?.isSuccess == true) {
      setOpenCheckForget(false);
      setOpenNewPassword(true);
      setLoadingCheck(false);
    } else {
      toast.error("Please try again");
      setLoadingCheck(false);
    }
  };

  const handleUpdatePassword = async () => {
    setLoadingUpdatePassword(true);
    const body = {
      email: forgetEmail,
      code: CheckForgetCode,
      newPassword: newPasword,
    };
    const res = await postFetch(
      POSTNEWPASSWORD,
      process.env.NEXT_PUBLIC_MERCHANT,
      body
    );
    const sub = await res.json();
    if (sub?.isSuccess == true) {
      setOpenNewPassword(false);
      setLoadingUpdatePassword(false);
      setOpenCheckForget(false);
      toast.success("Updated Successfully... please login");
      setOpenConfirm(false);
    } else {
      toast.error("Please try again");
      setLoadingUpdatePassword(false);
    }
  };

  // protected route if there is a user logged in
  if (userInfo?.isLogged) Router.replace("/");
  return (
    <Box>
      <Head>
        <title>{t("sign_in_title1")}</title>
        <meta name="description" content="signin" />
      </Head>
      <Box className={classes.root}>
        <SignInBackground1
          color={theme?.primaryColor}
          className={classes.signInBackground1}
        />
        <SignInBackground2
          color={theme?.primaryColor}
          className={classes.signInBackground2}
        />
        <Box className={classes.formContainer}>
          <Typography variant="h5" className={classes.mainTitle}>
            {t("sign_in_title1")}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box className={classes.formInnerContainer}>
              <Grid container>
                <Grid item xs={12}>
                  <EmailInputFieldWithIcon
                    formikRef={formik}
                    placeHolder={t("sign_in_field_title_1")}
                    fullWidth
                    size="medium"
                    isRequired
                    name="email"
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PasswordInputFieldWithIcon
                    formikRef={formik}
                    placeHolder={t("sign_in_field_title_2")}
                    fullWidth
                    size="medium"
                    isRequired
                    name="password"
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submitButton}
                    disabled={loading}
                  >
                    {t("sign_in_field_title_3")}
                    {loading && <CircularProgress />}
                  </Button>
                </Grid>
                <Grid item xs={12} className={classes.linksContainer}>
                  <Typography
                    variant="subtitle2"
                    className={classes.linkFirstTitle}
                  >
                    {t("sign_in_field_title_4")}{" "}
                    <Link href="/signup" passhref>
                      <a
                        style={{
                          color: theme?.primaryColor,
                          margin: "0px 3px",
                        }}
                      >
                        {t("sign_in_field_title_5")}
                      </a>
                    </Link>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.linkSecondTitle}
                    onClick={() => setOpenConfirm(true)}
                  >
                    {t("sign_in_field_title_6")}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Box>
      <Modal open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <Box className={classes.innerModalContainer}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.innerModalTitle}
          >
            {t("sign_in_field_title_7")}
          </Typography>
          <TextField
            type="email"
            placeholder="E-Mail"
            value={forgetEmail}
            onChange={(e) => setForgetEmail(e.target.value)}
          />
          <Button
            type="button"
            onClick={hanldeForget}
            variant="contained"
            disabled={loadingForget}
            className={classes.innerModalButton}
          >
            {t("sign_in_field_title_8")}{" "}
            {loadingForget && <CircularProgress className={classes.loader} />}
          </Button>
        </Box>
      </Modal>
      <Modal open={openCheckForget} onClose={() => setOpenCheckForget(false)}>
        <Box className={classes.innerModalContainer}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.innerModalTitle}
          >
            {t("sign_in_field_title_9")}
          </Typography>
          <TextField
            id="confirm"
            type="text"
            placeholder={t("sign_in_field_title_10")}
            value={CheckForgetCode}
            autoComplete={false}
            onChange={(e) => setCheckForgetCode(e.target.value)}
          />
          <Button
            type="button"
            onClick={handleCheckForget}
            variant="contained"
            className={classes.innerModalButton}
            disabled={loadingCheck}
          >
            {t("sign_in_field_title_11")}
            {loadingCheck && <CircularProgress className={classes.loader} />}
          </Button>
        </Box>
      </Modal>
      <Modal open={openNewPassword} onClose={() => setOpenNewPassword(false)}>
        <Box className={classes.innerModalContainer}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.innerModalTitle}
          >
            {t("sign_in_field_title_12")}
          </Typography>
          <TextField
            id="newPassword"
            type="text"
            placeholder={t("sign_in_field_title_13")}
            value={newPasword}
            autoComplete={false}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button
            type="button"
            onClick={handleUpdatePassword}
            variant="contained"
            className={classes.innerModalButton}
            disabled={loadingUpdatePassword}
          >
            {t("sign_in_field_title_14")}
            {loadingUpdatePassword && (
              <CircularProgress className={classes.loader} />
            )}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
SignIN.getLayout = function PageLayout(page) {
  return <> {page}</>;
};
export default SignIN;
