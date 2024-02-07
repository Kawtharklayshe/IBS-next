import * as yup from "yup";

export const getValidationSchema = (translate) => {
  const validationSchema = yup.object({
    name: yup.string().required(translate("this field is required")),
    phone: yup.number().required(translate("this field is required")),
    email: yup
      .string()
      .email("Enter a valid email")
      .required(translate("this field is required")),
    deviceName: yup.string().required(translate("this field is required")),
    purchaseDate: yup.string().required(translate("this field is required")),
    note: yup.string(),
  });
  return validationSchema;
};
