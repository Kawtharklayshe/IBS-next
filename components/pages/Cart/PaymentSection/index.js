import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { getValidationSchema } from "./config";
import { PAYMENT_OPTIONS, PAYTMENT_TYPES } from "../../../../constants/enums";
import { resetCart } from "../../../../Redux/slices/cartSlice";
import { postAuthorizedFetch } from "../../../../services/httpService";
import {
  AddNewInitialPaymentOrder,
  AddNewOrder,
} from "../../../../services/endpoints";
import { Grid } from "@mui/material";
import FormSection from "../FormSection";
import OrderSection from "../OrderSection";
import CreditCardPaymentModal from "../PaymentModal";
import useStyles from "./style";

const PaymentSection = ({ theme, onSucceedOrder }) => {
  const cartInfo = useSelector((state) => state.cart.data);
  const userInfo = useSelector((state) => state.auth.data);
  const currency = useSelector((state) => state.currency.data);
  const dispatch = useDispatch();
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [tempSubmittingValues, setTempSubmittingValues] = useState();
  const [paymentId, setPaymentId] = useState();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const handleOpenPaymentModal = () => setIsPaymentModalOpen(true);
  const handleClosePaymentModal = () => setIsPaymentModalOpen(false);

  const handleSubmitValues = (values) => {
    if (cartInfo.totalItemPrice < cartInfo.cartMinimumLimit) {
      toast.success(
        `Sorry, we don't serve less than ${cartInfo.cartMinimumLimit} ${currency.value} orders`
      );
      return;
    }
    setTempSubmittingValues(values);
    handleSubmitNewInitialPayment(values);
  };

  const handleCompleteOrderProcess = async (
    values,
    paymentId,
    gatewayReference = ""
  ) => {
    const bodyData = {
      paymentId,
      paymentGatewayReference: gatewayReference,
      addressId: values.address,
      note: values.orderNotes,
      orderInfo: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mobile: values.phone,
      },
    };

    setLoading(true);
    const response = await postAuthorizedFetch(
      AddNewOrder,
      bodyData,
      router.locale
    );
    const { data, isSuccess, message } = await response.json();
    setLoading(false);
    if (isSuccess) {
      dispatch(resetCart());
      toast.success(message);
      onSucceedOrder(data, values.paymentWay);
    } else toast.error(message);
  };

  const handleSubmitNewInitialPayment = async (values) => {
    const bodyData = {
      amount: cartInfo.totalCost,
      paymentMethod: values.paymentWay,
    };
    setLoading(true);
    const response = await postAuthorizedFetch(
      AddNewInitialPaymentOrder,
      bodyData,
      router.locale
    );
    const { data, isSuccess, message } = await response.json();
    setLoading(false);
    if (isSuccess) {
      setPaymentId(data.id);
      if (values.paymentWay === PAYTMENT_TYPES.pod) {
        handleCompleteOrderProcess(values, data.id);
      } else if (values.paymentWay === PAYTMENT_TYPES.credit) {
        handleOpenPaymentModal();
      }
    } else toast.error(message);
  };

  const initialValues = {
    firstName: userInfo?.firstName || "",
    lastName: userInfo?.lastName || "",
    address: undefined,
    email: userInfo?.email || "",
    phone: userInfo?.phoneNumber || undefined,
    orderNotes: "",
    paymentWay: "",
    address1: "",
    city: "",
    countryCode: undefined,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: getValidationSchema(PAYMENT_OPTIONS),
    onSubmit: (values) => handleSubmitValues(values),
  });

  return (
    <Grid container className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container xs={12}>
          <Grid item xs={12} md={6}>
            <FormSection theme={theme} formik={formik} />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrderSection theme={theme} isLoading={loading} formik={formik} />
          </Grid>
          <Grid item xs={12}>
            <CreditCardPaymentModal
              theme={theme}
              isOpen={isPaymentModalOpen}
              tempSubmittingValues={tempSubmittingValues}
              handleCloseModal={handleClosePaymentModal}
              handleCompleteOrder={(gatewayReference) =>
                handleCompleteOrderProcess(
                  tempSubmittingValues,
                  paymentId,
                  gatewayReference
                )
              }
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default PaymentSection;
