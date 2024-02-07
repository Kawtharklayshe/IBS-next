import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useTranslation from "next-translate/useTranslation";
// import {
//   initializePaymentForm,
//   createSessionIdForPayment,
//   handle3DS,
// } from "../../utilies/payment/utilies";
import { Box, Grid, Modal, CircularProgress, Button } from "@mui/material";
import useStyles from "./style";

const PaymentModal = ({
  isOpen,
  theme,
  tempSubmittingValues,
  handleCloseModal,
  handleCompleteOrder,
}) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const cartInfo = useSelector((state) => state.cart.data);
  const currentCurrency = useSelector((state) => state.currency.data);
  const [isPayNowValid, setIsPayNowValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  // const generatePaymentFormMoutId = () =>
  //   `payment-card-form-${Math.round(Math.random() * 100)}`;

  // const generatePayment3DSContainer = () => {
  //   const parentPaymentFormContainerNode = document.getElementById(
  //     "parent-payment-form-container"
  //   );
  //   const payment3DSContainerNode = document.createElement("div");
  //   payment3DSContainerNode.setAttribute("id", "3ds_iframe");
  //   payment3DSContainerNode.style.height = "80vh";
  //   parentPaymentFormContainerNode.appendChild(payment3DSContainerNode);
  // };

  // function removeAllChildNodes(parent) {
  //   while (parent.firstChild) {
  //     parent.removeChild(parent.firstChild);
  //   }
  // }

  // const handleResetPaymentProcess = () => {
  //   const paymentNode = document.getElementById(
  //     "parent-payment-form-container"
  //   );
  //   if (paymentNode) {
  //     removeAllChildNodes(paymentNode);
  //   }
  //   handleCloseModal();
  //   setTimeout(() => {
  //     router.reload();
  //   }, 500);
  // };

  // const handleCompleteOrderWithSucceedPayment = (orderReference) => {
  //   const paymentNode = document.getElementById(
  //     "parent-payment-form-container"
  //   );
  //   if (paymentNode) {
  //     removeAllChildNodes(paymentNode);
  //   }
  //   handleCloseModal();
  //   handleCompleteOrder(orderReference);
  // };

  // const initializePaymentFormHandler = () => {
  //   const parentPaymentFormContainerNode = document.getElementById(
  //     "parent-payment-form-container"
  //   );
  //   if (parentPaymentFormContainerNode) {
  //     const paymentFormNode = document.createElement("div");
  //     const mountId = generatePaymentFormMoutId();
  //     paymentFormNode.setAttribute("id", mountId);
  //     paymentFormNode.classList.add(style.paymentCardFormClass);
  //     const cardTitle = document.createElement("h6");
  //     cardTitle.innerText = "Card Info";
  //     cardTitle.style.fontFamily = theme.fontFamily;
  //     cardTitle.style.fontSize = "20px";
  //     cardTitle.style.color = theme.primaryColor;
  //     cardTitle.style.marginTop = "0px";
  //     cardTitle.style.marginBottom = "4px";
  //     parentPaymentFormContainerNode.appendChild(cardTitle);
  //     parentPaymentFormContainerNode.appendChild(paymentFormNode);
  //     setIsInitializing(true);
  //     setTimeout(() => {
  //       initializePaymentForm(
  //         mountId,
  //         theme,
  //         setIsInitializing,
  //         setIsPayNowValid
  //       );
  //     }, 500);
  //   }
  // };

  // // initialize form inputs
  // useEffect(() => {
  //   if (typeof window === "object" && isOpen) {
  //     const interval = setInterval(() => {
  //       if (document.readyState === "complete") {
  //         initializePaymentFormHandler();
  //         clearInterval(interval);
  //       }
  //     }, 100);
  //   }
  // }, [isOpen]);

  // const handleCreateSessionIdAndCompletePayment = async () => {
  //   const sessionId = await createSessionIdForPayment();
  //   if (sessionId) {
  //     setIsPayNowValid(false);
  //     setIsLoading(true);
  //     const response = await fetch("/api/completePayment", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         sessionId,
  //         currencyCode: currentCurrency?.value ?? "AED",
  //         amountValue: cartInfo.totalCost * 100,
  //         emailAddress: tempSubmittingValues.email,
  //         billingAddress: {
  //           firstName: tempSubmittingValues.firstName,
  //           lastName: tempSubmittingValues.lastName,
  //           address1: tempSubmittingValues.address1,
  //           city: tempSubmittingValues.city,
  //           countryCode: tempSubmittingValues.countryCode,
  //         },
  //       }),
  //     });
  //     const { isSuccess, data } = await response.json();
  //     if (isSuccess) {
  //       setIsLoading(false);
  //       const parentPaymentFormContainerNode = document.getElementById(
  //         "parent-payment-form-container"
  //       );
  //       if (parentPaymentFormContainerNode) {
  //         removeAllChildNodes(parentPaymentFormContainerNode);
  //       }
  //       generatePayment3DSContainer();
  //       const finalResult = await handle3DS(data);
  //       if (finalResult?.isSuccess) {
  //         toast.success(finalResult.message);
  //         handleCompleteOrderWithSucceedPayment(finalResult.orderReference);
  //       } else {
  //         toast.error(finalResult.message);
  //         handleResetPaymentProcess();
  //       }
  //     } else toast.error(data.message);
  //   } else {
  //     toast.info("Session has expired...refreshing");
  //     setTimeout(() => {
  //       router.reload();
  //     }, 2000);
  //   }
  // };

  return (
    <Modal
      open={isOpen}
      //onClose={handleResetPaymentProcess}
    >
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div id="parent-payment-form-container">
              <div className={classes.loaderContainer}>
                {isInitializing && <CircularProgress size={30} />}
              </div>
            </div>
            <Grid item xs={12} className={classes.payNowContainer}>
              <Button
                variant="contained"
                //onClick={handleCreateSessionIdAndCompletePayment}
                disabled={!isPayNowValid || isLoading}
                className={classes.payNowButton}
              >
                {isLoading ? <CircularProgress size={20} /> : t("Pay Now")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
