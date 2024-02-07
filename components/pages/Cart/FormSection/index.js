import Link from "next/link";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { Typography, Divider, Grid } from "@mui/material";
import {
  TextInputField,
  NumberInputField,
  EmailInputField,
  TextAreaInputField,
} from "../../../FormValidation/inputFields";
import AddressesModal from "../AddressesModal";
import useStyles from "./style";

const FormSection = ({ theme, formik }) => {
  let { t, lang } = useTranslation("common");
  const userInfo = useSelector((state) => state.auth.data);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.innerContainer}>
        <Typography variant="h5" className={classes.mainTitle}>
          {t("cart_page_13")}
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.semiRowContainer}>
            <TextInputField
              formikRef={formik}
              fullWidth
              handleChange={formik.handleChange}
              isRequired={true}
              label={t("cart_form_title_1")}
              name="firstName"
              value={formik.values.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInputField
              formikRef={formik}
              fullWidth
              handleChange={formik.handleChange}
              isRequired={true}
              label={t("cart_form_title_2")}
              name="lastName"
              value={formik.values.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressesModal
              name="address"
              selectedAddressId={formik.values.address}
              onChange={formik.setFieldValue}
              formikRef={formik}
              isRequired={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputField
              formikRef={formik}
              fullWidth
              handleChange={formik.handleChange}
              isRequired={true}
              label={t("cart_form_title_5")}
              name="address1"
              value={formik.values.address1}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.semiRowContainer}>
            <TextInputField
              formikRef={formik}
              fullWidth
              handleChange={formik.handleChange}
              isRequired={true}
              label={t("cart_form_title_6")}
              name="city"
              value={formik.values.city}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <NumberInputField
              formikRef={formik}
              fullWidth
              isRequired={true}
              handleChange={formik.handleChange}
              label={t("cart_form_title_12")}
              name="countryCode"
              value={formik.values.countryCode}
            />
          </Grid>
          <Grid item xs={12}>
            <EmailInputField
              formikRef={formik}
              fullWidth
              isRequired={true}
              handleChange={formik.handleChange}
              label={t("cart_form_title_10")}
              name="email"
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <NumberInputField
              formikRef={formik}
              fullWidth
              isRequired={true}
              handleChange={formik.handleChange}
              label={t("cart_form_title_9")}
              name="phone"
              value={formik.values.phone}
            />
          </Grid>
          {!userInfo && (
            <Grid item xs={12} sx={{ mt: 1, px: 1 }}>
              <Typography variant="subtitle1">
                {t("payment_create_user_title")}
                <Link href="/signup">
                  <Typography
                    variant="caption"
                    color="primary.main"
                    sx={{
                      mx: 1,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {t("sign_up_field_title_1")}
                  </Typography>
                </Link>
              </Typography>
              <Divider sx={{ my: 1 }} />
            </Grid>
          )}
          <Grid item xs={12} className={classes.textAreaContainer}>
            <TextAreaInputField
              formikRef={formik}
              fullWidth
              minRows={5}
              handleChange={formik.handleChange}
              placeHolder={t("cart_form_title_11")}
              name="orderNotes"
              value={formik.values.orderNotes}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormSection;
