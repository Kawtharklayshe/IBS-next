import * as yup from "yup";
export const getValidationSchema = (areaOptions = []) => {
  const validationSchema = yup.object({
    address: yup.string("Enter Title").required("Title is required"),
    areaId: yup
      .number("Select Area please")
      .oneOf(
        areaOptions.map((option) => Number(option.value)),
        `Must be one of these Area options : [${areaOptions.map(
          (option) => option.label
        )}]`
      )
      .required(
        `Area is required & Must be one of these Area options : [${areaOptions.map(
          (option) => option.label
        )}]`
      ),
  });
  return validationSchema;
};
