import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import useTranslation from "next-translate/useTranslation";
import useFetch from "../../useFetch/useFetch";
import { Typography, Button, Grid, CircularProgress } from "@mui/material";
import {
  TextInputField,
  NumberInputField,
  DatePickerInputField,
  EmailInputField,
  TextAreaInputField,

} from "../../FormValidation/inputFields";

import { POST_EVENT_ACTION_BOOKING } from "../../../services/endpoints";

const EventActionForm = ({ participants, eventAction }) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const [getFetch, postFetch] = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [tempUrl, setTempUrl] = useState("");

  const participantsOptions = participants.map((pa) => ({
    label: `${pa.title} | ${pa.cost}€`,
    value: pa.id,
    url: pa.url,
  }));

  const salutationOptions = [
    { label: t("Mr"), value: "Mr" },
    { label: t("Mrs"), value: "Mrs" },
  ];

  const initialValues = {
    gender: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    arrival: "",
    departure: "",
    numberOfPeople: 0,
    numberOfRooms: 0,
    others: "",
    postalCode: "",
    participantId: undefined,
    eventActionId: eventAction.id,
  };
  const validationSchema = yup.object({
    gender: yup
      .string("Choose Gender")
      .oneOf(
        salutationOptions.map((option) => option.value),
        `Must Be One Of These Options : [${salutationOptions.map(
          (option) => option.label
        )}]`
      )
      .required(
        `Gender Is Required & Must Be One Of These Options : [${salutationOptions.map(
          (option) => option.label
        )}]`
      ),
    title: yup.string("Enter Title").required("Title is required"),
    firstName: yup
      .string("Enter your First Name")
      .required("First Name is required"),
    lastName: yup
      .string("Enter your Last Name")
      .required("Last Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    arrival: yup.date().required("Arrival Is Required"),
    departure: yup.date().required("Departure Is Required"),
    numberOfPeople: yup
      .number("Enter Number Of Pepole")
      .min(1, "Must Be At Least 1 Person")
      .required("Number Of Pepole is required"),
    numberOfRooms: yup
      .number("Enter Number Of Rooms")
      .min(1, "Must Be At Least 1 Room")
      .required("Number Of Rooms is required"),
    others: yup.string("Enter Notes"),
    postalCode: yup
      .string("Enter your Postal Code")
      .required("Postal Code is required"),
    participantId: yup
      .number("Choose Particiapnt")
      .oneOf(
        participantsOptions.map((option) => option.value),
        `Must Be One Of These Participant Options : [${participantsOptions.map(
          (option) => option.label
        )}]`
      )
      .required(
        `Participant Is Required & Must Be One Of These Options : [${participantsOptions.map(
          (option) => option.label
        )}]`
      ),
    eventActionId: yup.number().required("Event Action ID Is Required"),
  });

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmitValues(values),
  });

  const handleChooseParticipant = (name, participantId) => {
    let selectedParticipant = participants.find((el) => el.id == participantId);
    setTempUrl(selectedParticipant.url);
    formik.setFieldValue(name, participantId);
  };

  const handleSubmitValues = async (values) => {
    const bodyData = { ...values };
    setIsLoading(true);
    let res = await postFetch(
      POST_EVENT_ACTION_BOOKING,
      process.env.NEXT_PUBLIC_MERCHANT,
      bodyData
    );
    let data = await res?.json();
    setIsLoading(false);
    if (data?.isSuccess) {
      toast.success(data.data);
      setIsSubmittedSuccessfully(true);
      // setTimeout(() => {
      //   window.open(tempUrl, "_blank");
      // }, 2000);
    }
  };
  return (
    <Grid container>
      <form onSubmit={formik.handleSubmit}>
        {isSubmittedSuccessfully ? (
          <Typography
            variant="h4"
            sx={{
              py: 3,
              color: "primary.main",
              textAlign: "center",
              border: "1px dashed",
              borderColor: "primary.main",
              width: "75vw",
            }}
          >
            {t(
              "Your booking has been successful. For more information check your mailbox"
            )}
          </Typography>
        ) : (
          <Grid item xs={12} sx={{ m: 2 }}>
            <Typography
              variant="h5"
              sx={{
                py: 1,
                color: "primary.main",
              }}
            >
              {t("Booking Form")}
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  pr: { xs: 0, md: 1 },
                }}
              >
                {/* <DropDownMenuField
                  formikRef={formik}
                  fullWidth
                  options={salutationOptions}
                  handleChange={formik.setFieldValue}
                  isRequired={true}
                  label={t("Salutation")}
                  name="gender"
                  size="small"
                  value={formik.values.gender}
                /> */}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInputField
                  formikRef={formik}
                  fullWidth
                  handleChange={formik.handleChange}
                  isRequired={true}
                  label={t("Title")}
                  name="title"
                  value={formik.values.title}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  pr: { xs: 0, md: 1 },
                }}
              >
                <TextInputField
                  formikRef={formik}
                  fullWidth
                  handleChange={formik.handleChange}
                  isRequired={true}
                  label={t("First Name")}
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
                  label={t("Last Name")}
                  name="lastName"
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <EmailInputField
                  formikRef={formik}
                  fullWidth
                  isRequired={true}
                  handleChange={formik.handleChange}
                  label={t("Email")}
                  name="email"
                  value={formik.values.email}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  pr: { xs: 0, md: 1 },
                }}
              >
                <DatePickerInputField
                  formikRef={formik}
                  fullWidth
                  handleChange={formik.handleChange}
                  isRequired={true}
                  label={t("Arrival")}
                  name="arrival"
                  value={formik.values.arrival}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DatePickerInputField
                  formikRef={formik}
                  fullWidth
                  isRequired={true}
                  handleChange={formik.handleChange}
                  label={t("Departure")}
                  name="departure"
                  value={formik.values.departure}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  pr: { xs: 0, md: 1 },
                }}
              >
                <NumberInputField
                  formikRef={formik}
                  fullWidth
                  isRequired={true}
                  handleChange={formik.handleChange}
                  label={t("Number Of People")}
                  name="numberOfPeople"
                  value={formik.values.numberOfPeople}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <NumberInputField
                  formikRef={formik}
                  fullWidth
                  isRequired={true}
                  handleChange={formik.handleChange}
                  label={t("Number Of Rooms")}
                  name="numberOfRooms"
                  value={formik.values.numberOfRooms}
                />
              </Grid>
              <Grid item xs={12}>
                <NumberInputField
                  formikRef={formik}
                  fullWidth
                  isRequired={true}
                  handleChange={formik.handleChange}
                  label={t("Postal Code")}
                  name="postalCode"
                  value={formik.values.postalCode}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <DropDownMenuField
                  formikRef={formik}
                  handleChange={handleChooseParticipant}
                  isRequired
                  fullWidth
                  label={t("Ticket")}
                  name="participantId"
                  size="small"
                  options={participantsOptions}
                  value={formik.values.participantId}
                /> */}
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextAreaInputField
                  formikRef={formik}
                  fullWidth
                  minRows={5}
                  handleChange={formik.handleChange}
                  label={t("Others")}
                  placeHolder={t("Notes here")}
                  name="others"
                  value={formik.values.others}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ mt: 2, display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    color: "onPrimary.main",
                    ":hover": { backgroundColor: "primary.main" },
                  }}
                  disabled={isLoading}
                >
                  {t("Booking")}{" "}
                  {isLoading && <CircularProgress size={20} sx={{ mx: 1 }} />}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </form>
    </Grid>
  );
};

export default EventActionForm;
