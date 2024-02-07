import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import useSWR, { mutate } from "swr";
import {
  GetItemReviewList,
  AddNewItemReview,
} from "../../../../services/endpoints";
import {
  getAutherisedFetch,
  postAuthorizedFetch,
} from "../../../../services/httpService";
import {
  Box,
  Collapse,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import StarRatings from "react-star-ratings";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ReviewCard from "./ReviewCard";
import AutoPagination from "../../../Shared/customPagination";
import Alert from "../../../Shared/CustomAlert";
import useStyles from "./style";

const ReviewsSection = ({ itemSlug, itemId, initialData, title, theme }) => {
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [items, setItems] = useState(initialData?.data?.items || []);
  const [pagesCount, setPagesCount] = useState(
    initialData?.data?.totalPages || 0
  );
  const [currentPage, setCurrentPage] = useState(1);
  const nameRef = useRef();
  const bodyRef = useRef();
  const emailRef = useRef();
  const classes = useStyles({ isOpen: open });
  const handleClick = () => setOpen(!open);
  const handleChangeRating = (value) => {
    setRate(value);
  };

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

  const { data, error } = useSWR(
    GetItemReviewList(itemSlug, currentPage),
    autherizedFetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      setPagesCount(data.totalPages);
      setItems(data.items);
    }
  }, [data]);

  const SendFeedback = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      itemRate: rate,
      itemId: itemId,
      type: 1,
      name: nameRef.current.value,
      text: bodyRef.current.value,
      email: emailRef.current.value,
    };
    const response = await postAuthorizedFetch(
      AddNewItemReview,
      data,
      router.locale
    );
    setLoading(false);
    response.status == 200 && setIsAlertOpen(true);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.collapseHeaderContainer} onClick={handleClick}>
        <Typography variant="h5" component="h5" className={classes.headerTitle}>
          {t(title)}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto">
        <Box className={classes.collapseContentContainer}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={8}
              className={classes.collapseCardsContainer}
            >
              {items.map((review) => (
                <ReviewCard key={review.id} theme={theme} data={review} />
              ))}
              {/** Pagination */}
              <Grid item xs={12} className={classes.paginationContainer}>
                <AutoPagination
                  currentPage={currentPage}
                  onChangeCurrentPage={setCurrentPage}
                  pageCount={pagesCount}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className={classes.formContainer}
                component="form"
                onSubmit={SendFeedback}
              >
                <Typography variant="h6" className={classes.formTitle}>
                  {t("Your Rating")}
                </Typography>
                <StarRatings
                  rating={rate}
                  starRatedColor={theme?.primaryColor}
                  starSelectingHoverColor={theme?.primaryColor}
                  numberOfStars={5}
                  starDimension="22px"
                  starSpacing="4px"
                  name="rating"
                  changeRating={handleChangeRating}
                />
                <Box className={classes.inputsConatiner}>
                  <Box>
                    <Typography variant="h6" className={classes.label}>
                      {t("your message")} *
                    </Typography>
                    <TextField
                      id="contactMessage"
                      minRows={5}
                      required
                      multiline
                      fullWidth
                      ref={bodyRef}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className={classes.label}>
                      {t("Name_1")} *
                    </Typography>
                    <TextField
                      required
                      id="contactName"
                      variant="outlined"
                      size="small"
                      fullWidth
                      className={classes.inputClass}
                      ref={nameRef}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className={classes.label}>
                      {t("email_1")} *
                    </Typography>
                    <TextField
                      id="contactemail"
                      variant="outlined"
                      size="small"
                      required
                      fullWidth
                      className={classes.inputClass}
                      ref={emailRef}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    className={classes.submitButton}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : t("send")}
                  </Button>
                </Box>
              </Box>
            </Grid>
            {/** custom alert */}
            <Alert
              isAlertOpen={isAlertOpen}
              setIsAlertOpen={setIsAlertOpen}
              autoHideDuration={5000}
              type="success"
              message="Success. Your Feedback is under Review"
              position={{ vertical: "top", horizontal: "right" }}
            />
          </Grid>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ReviewsSection;
