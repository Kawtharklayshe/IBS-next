import * as yup from "yup";

// function for getting validation schema
export const getValidationSchema = (PAYMENT_OPTIONS = []) => {
  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your First Name")
      .required("First Name is required"),
    lastName: yup
      .string("Enter your Last Name")
      .required("Last Name is required"),
    address: yup.number("Enter address").required("Address is required"),
    address1: yup.string("Enter your address").required("Address is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .number("Enter Your Phone Number")
      .required("Phone Number is required"),
    city: yup.string("Enter your City").required("City is required"),
    countryCode: yup
      .number("Enter Country Code")
      .required("Country Code is required"),
    orderNotes: yup.string("Enter Your Notes"),
    paymentWay: yup
      .string("Choose Payment Way")
      .oneOf(
        PAYMENT_OPTIONS.map((option) => option.value),
        `Must be one of these Way options : [${PAYMENT_OPTIONS.map(
          (option) => option.label
        )}]`
      )
      .required(
        `Payment way is required & Must be one of these way options : [${PAYMENT_OPTIONS.map(
          (option) => option.label
        )}]`
      ),
  });
  return validationSchema;
};
