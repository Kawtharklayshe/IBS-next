import Link from "next/link";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/slices/authSlice/aysncActions";
import useTranslation from "next-translate/useTranslation";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { postAuthorizedFetch } from "../services/httpService";
import { POST_CONFORM, RESENDCODE } from "../services/endpoints";
import {
  TextInputField,
  NumberInputField,
  EmailInputField,
  PasswordInputField,
} from "../components/FormValidation/inputFields";
import { Button, Typography, Box, Grid, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SignUpBackground1 from "../assets/SVG/SignInBackground1";
import SignUpBackground2 from "../assets/SVG/SignInBackground2";
import AvatarIcon from "../assets/SVG/AvatarIcon";
import useStyles from "../components/pages/SignUp/style";

function SignUp({ theme }) {
  let { t } = useTranslation("common");
  const Router = useRouter();
  const classes = useStyles();
  const imageRef = useRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const [localUrl, setLocalUrl] = useState();
  const [confirm, setConfirm] = useState(false);
  const [confirmCode, setConfirmCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingConfirm, setLoadingConfirm] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object({
    firstName: yup
      .string("Enter First name")
      .max(15, "Must be less than 15 charecters ")
      .required("first Name is required"),
    lastName: yup
      .string("Enter First name")
      .max(15, "Must be less than 15 charecters ")
      .required("first Name is required"),
    phone: yup
      .number("Enter Your Phone Number")
      .required("Phone Number is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short")
      .max(60, "Password is too long"),
    confirmPassword: yup
      .string()
      .required("confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmitValues(values),
  });

  useEffect(() => {
    if (typeof window === "object") {
      if (Router.query.email && Router.query.isConfirmed)
        setEmail(Router.query.email);
    }
  }, []);

  const handleSubmitValues = async (values) => {
    const body = {
      FirstName: values.firstName,
      LastName: values.lastName,
      PhoneNumber: values.phone,
      Email: values.email,
      Password: values.password,
      ConfirmPassword: values.confirmPassword,
    };
    setLoading(true);
    setEmail(values.email);
    dispatch(
      signup({
        body,
        image,
        setLoading,
        callBack: () => setConfirm(true),
      })
    );
  };
  const onFilesupload = (event) => {
    const { files } = event.target;
    setLocalUrl(URL.createObjectURL(files[0]));
    setImage(files[0]);
  };
  const hanldeResend = async () => {
    setLoadingConfirm(true);
    const body = {
      email: email,
    };
    const res = await postAuthorizedFetch(RESENDCODE, body, Router.locale);
    const sub = await res.json();
    if (sub.isSuccess) {
      toast.success("Sent Successfully");
    } else toast.error(sub.message);
    setLoadingConfirm(false);
  };
  const handleConfirm = async () => {
    setLoading(true);
    const res = await postAuthorizedFetch(
      POST_CONFORM,
      {
        email: email,
        code: confirmCode,
      },
      Router.locale
    );
    const conf = await res.json();
    setLoading(false);
    if (conf?.isSuccess == true) {
      toast.success("Confirmed Successfully");
      if (Router.query.email) Router.push("/signin");
      else Router.push("/");
    } else {
      toast.error(conf.message);
    }
  };
  const handleUploadButton = () => {
    imageRef.current.click();
  };
  return (
    <Box>
      <Head>
        <title>{t("sign_up_field_title_1")}</title>
        <meta name="description" content="signup" />
      </Head>
      <Box Box className={classes.root}>
        <SignUpBackground1
          color={theme?.primaryColor}
          className={classes.signUpBackground1}
        />
        <SignUpBackground2
          color={theme?.primaryColor}
          className={classes.signUpBackground2}
        />
        {!confirm ? (
          <Box className={classes.formContainer}>
            <Typography variant="h6" className={classes.mainTitle}>
              {t("sign_up_field_title_1")}
            </Typography>
            <input
              type="file"
              onChange={(e) => onFilesupload(e)}
              ref={imageRef}
              style={{ display: "none" }}
            />
            <Box
              className={classes.uploadIconSection}
              onClick={handleUploadButton}
            >
              <img
                src={localUrl || "/images/img.png"}
                width="90px"
                height="90px"
                style={{ borderRadius: "50%" }}
              />
              <AvatarIcon
                color={theme?.primaryColor}
                className={classes.avatarIcon}
              />
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <Box className={classes.formInnerContainer}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextInputField
                      formikRef={formik}
                      placeHolder={t("sign_up_field_title_5")}
                      fullWidth
                      label={t("sign_up_field_title_5")}
                      size="medium"
                      isRequired
                      name="firstName"
                      value={formik.values.firstName}
                      handleChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputField
                      formikRef={formik}
                      placeHolder={t("sign_up_field_title_6")}
                      fullWidth
                      label={t("sign_up_field_title_6")}
                      size="medium"
                      isRequired
                      name="lastName"
                      value={formik.values.lastName}
                      handleChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <EmailInputField
                      formikRef={formik}
                      placeHolder={t("sign_up_field_title_7")}
                      label={t("sign_up_field_title_7")}
                      fullWidth
                      size="medium"
                      isRequired
                      name="email"
                      value={formik.values.email}
                      handleChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <NumberInputField
                      formikRef={formik}
                      placeHolder={t("sign_up_field_title_8")}
                      label={t("sign_up_field_title_8")}
                      fullWidth
                      size="medium"
                      isRequired
                      name="phone"
                      value={formik.values.phone}
                      handleChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordInputField
                      formikRef={formik}
                      placeHolder={t("sign_up_field_title_9")}
                      label={t("sign_up_field_title_9")}
                      fullWidth
                      size="medium"
                      isRequired
                      name="password"
                      value={formik.values.password}
                      handleChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordInputField
                      formikRef={formik}
                      placeHolder={t("sign_up_field_title_10")}
                      label={t("sign_up_field_title_10")}
                      fullWidth
                      size="medium"
                      isRequired
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
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
                      {t("sign_up_field_title_2")}
                      {loading && (
                        <CircularProgress className={classes.loader} />
                      )}
                    </Button>
                  </Grid>
                  <Grid item xs={12} className={classes.linksContainer}>
                    <Typography
                      variant="subtitle2"
                      className={classes.linkFirstTitle}
                    >
                      {t("sign_up_field_title_3")}{" "}
                      <Link href="/signin" passhref>
                        <a
                          style={{
                            color: theme?.primaryColor,
                            margin: "0px 3px",
                          }}
                        >
                          {t("sign_up_field_title_4")}
                        </a>
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Box>
        ) : (
          <Box className={classes.confirmContainer}>
            <Typography variant="h6" className={classes.confirmTitle}>
              {t("sign_up_field_title_11")}
            </Typography>
            <TextField
              id="confirm"
              placeholder={t("sign_up_field_title_12")}
              type="text"
              value={confirmCode}
              onChange={(e) => setConfirmCode(e.target.value)}
              autoComplete="off"
            />
            <Box className={classes.buttonsContainer}>
              <Button type="button" variant="contained" onClick={handleConfirm}>
                {t("sign_up_field_title_13")}
                {loading && <CircularProgress className={classes.loader} />}
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={hanldeResend}
                disabled={loadingConfirm}
              >
                {t("sign_up_field_title_14")}
                {loadingConfirm && (
                  <CircularProgress className={classes.loader} />
                )}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default SignUp;
SignUp.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
