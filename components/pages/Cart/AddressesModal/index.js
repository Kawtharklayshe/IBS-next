import { useState, useEffect, Fragment } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";
import {
  GetUserAddressesList,
  AddNewAddress,
  UpdateSpecificAddress,
  DeleteSpecificAddress,
  GetAreasList,
} from "../../../../services/endpoints";
import {
  getAutherisedFetch,
  DeleteAuthorizedFetch,
  postAuthorizedFetch,
  putAuthorizedFetch,
} from "../../../../services/httpService";
import {
  Typography,
  Box,
  Grid,
  Modal,
  CircularProgress,
  Button,
} from "@mui/material";
import { Place } from "@mui/icons-material";
import AddressCard from "../AddressCard";
import AddresssInfoModal from "../AddressInfoModal";
import useStyles from "./style";

const AddressesModal = ({
  name,
  selectedAddressId,
  onChange,
  formikRef,
  isRequired,
}) => {
  const router = useRouter();
  const classes = useStyles({ isError: Boolean(formikRef.errors[name]) });
  let { t, lang } = useTranslation("common");
  const [tempSelectedAddress, setTempSelectedAddress] =
    useState(selectedAddressId);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [areaOptions, setAreaOptions] = useState([]);
  const [tempAddress, setTempAddress] = useState({
    address: "",
    lng: null,
    lat: null,
    areaId: undefined,
  });
  const [tempAddressId, setTempAddressId] = useState(null);
  const toggle = () => setIsOpen(!isOpen);
  const handleOpenAddressInfoModal = () => setIsAddressModalOpen(true);
  const handleCloseAddressInfoModal = () => setIsAddressModalOpen(false);

  /** fetcher function for swr */
  const autherizedFetcher = async (url) => {
    const response = await getAutherisedFetch(
      url,
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    const { data } = await response.json();
    return data;
  };

  const { data, error } = useSWR(GetUserAddressesList, autherizedFetcher);
  const { data: areasData, error: areasError } = useSWR(
    GetAreasList,
    autherizedFetcher
  );

  const toggleAddAddressModal = () => {
    setEditMode(false);
    setTempAddress({
      address: "",
      lng: null,
      lat: null,
      areaId: undefined,
    });
    setTempAddressId(null);
    handleOpenAddressInfoModal();
  };

  const toggleUpdateAddressModal = (addressData) => {
    setEditMode(true);
    setTempAddress({
      address: addressData.address,
      lng: addressData.lng,
      lat: addressData.lat,
      areaId: addressData.areaId,
    });
    setTempAddressId(addressData.id);
    handleOpenAddressInfoModal();
  };

  /* function for delete address from addresses */
  const handleDeleteAddress = async (addressId) => {
    const response = await DeleteAuthorizedFetch(
      DeleteSpecificAddress(addressId),
      process.env.NEXT_PUBLIC_MERCHANT,
      router.locale
    );
    const { data, isSuccess, message } = await response.json();
    if (isSuccess) {
      toast.success(message);
      mutate(GetUserAddressesList);
    }
  };

  useEffect(() => {
    data && setAddresses(data.addresses);
    if (areasData) {
      let temp = areasData.areas.map((area) => ({
        label: area.name,
        value: area.id,
      }));
      setAreaOptions(temp);
    }
  }, [data, areasData]);

  const handleSubmiAddressInfo = async (addressInfo, editMode, handleReset) => {
    const body = {
      ...addressInfo,
    };

    if (!editMode) {
      const response = await postAuthorizedFetch(
        AddNewAddress,
        body,
        router.locale
      );
      const { data, isSuccess, message } = await response.json();
      if (isSuccess) {
        toast.success(message);
        handleReset();
        mutate(GetUserAddressesList);
      }
    } else {
      const response = await putAuthorizedFetch(
        UpdateSpecificAddress(tempAddressId),
        body,
        router.locale
      );
      const { data, isSuccess, message } = await response.json();
      if (isSuccess) {
        toast.success(message);
        handleReset();
        mutate(GetUserAddressesList);
      }
    }
  };

  const handleUpdateSelectedAddress = () => {
    onChange(name, tempSelectedAddress);
    toggle();
  };

  return (
    <Fragment>
      <Typography variant="subtitle2" className={classes.mainTitle}>
        {t("cart_form_title_13")}{" "}
        {isRequired && <span className={classes.requiredSpan}>*</span>}
      </Typography>
      <Grid container className={classes.addressesField} onClick={toggle}>
        <Grid item xs={12} className={classes.placeholderTitle}>
          <Typography>
            <Place className={classes.pinIcon} />{" "}
            {selectedAddressId
              ? addresses.find((el) => el.id == selectedAddressId)?.address
              : "Select an address"}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="caption" className={classes.errorTitle}>
        {formikRef.errors[name]}
      </Typography>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className={classes.addressesModalContainer}>
          {!data && !error ? (
            <Box className={classes.loaderContainer}>
              <CircularProgress size={30} />
            </Box>
          ) : (
            <Grid container>
              <Grid item xs={12} className={classes.addressesModalHeader}>
                <Typography variant="h6" className={classes.modalHeaderTitle}>
                  {t("Addresses")}
                </Typography>
                <Button
                  variant="contained"
                  className={classes.modalHeaderButton}
                  onClick={toggleAddAddressModal}
                >
                  {t("Add new")}
                </Button>
              </Grid>
              {addresses.map((address) => (
                <Grid item xs={12} key={address.id}>
                  <AddressCard
                    tempSelectedAddress={tempSelectedAddress}
                    address={address}
                    onSelect={setTempSelectedAddress}
                    onUpdate={toggleUpdateAddressModal}
                    onDelete={handleDeleteAddress}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className={classes.modalSubmitButton}
                  onClick={handleUpdateSelectedAddress}
                >
                  {t("Select")}
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
      <AddresssInfoModal
        editMode={editMode}
        isOpen={isAddressModalOpen}
        handleCloseModal={handleCloseAddressInfoModal}
        areaOptions={areaOptions}
        addressInfo={tempAddress}
        onSubmit={handleSubmiAddressInfo}
      />
    </Fragment>
  );
};

export default AddressesModal;
