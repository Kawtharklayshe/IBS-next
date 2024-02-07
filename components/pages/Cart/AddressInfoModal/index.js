import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Box, Grid, Modal, CircularProgress, Button } from "@mui/material";
import { getValidationSchema } from "./config";
import {
  TextInputField,
  DropDownWithInput,
} from "../../../FormValidation/inputFields";
import MapCardWithDraggableMarker from "../MapCardWithDraggableMarker";
import useStyles from "./style";

const AddresssInfoModal = ({
  isOpen,
  handleCloseModal,
  editMode,
  addressInfo,
  areaOptions,
  onSubmit,
}) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    address: "",
    areaId: undefined,
  });

  const [marker, setMarker] = useState({
    lng: null,
    lat: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values, handleReset) => {
    const data = {
      address: values.address,
      areaId: values.areaId,
      ...marker,
    };
    const resetAll = () => {
      setIsLoading(false);
      handleReset();
      handleCloseModal();
    };
    if (marker.lat && marker.lng) {
      setIsLoading(true);
      onSubmit(data, editMode, resetAll);
    } else toast.error("Please pick up a location on the Map");
  };

  // update form values whenever address info change
  useEffect(() => {
    if (addressInfo)
      setInitialValues({
        address: addressInfo.address,
        areaId: addressInfo.areaId,
      });
    setMarker({
      lng: addressInfo.lng,
      lat: addressInfo.lat,
    });
  }, [addressInfo]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: getValidationSchema(areaOptions),
    onSubmit: (values, actions) => handleSubmit(values, actions.resetForm),
  });
  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Box className={classes.root}>
        <Grid conatiner>
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <MapCardWithDraggableMarker
                markerInfo={marker}
                setMarker={setMarker}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInputField
                formikRef={formik}
                fullWidth
                handleChange={formik.handleChange}
                isRequired={true}
                label={t("Address")}
                name="address"
                value={formik.values.address}
              />
            </Grid>
            <Grid Item xs={12}>
              <DropDownWithInput
                formikRef={formik}
                options={areaOptions}
                fullWidth
                isRequired={true}
                handleChange={formik.handleChange}
                label={t("Area")}
                name="areaId"
                value={formik.values.areaId}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                className={classes.saveButton}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={20} /> : t("Save")}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddresssInfoModal;
