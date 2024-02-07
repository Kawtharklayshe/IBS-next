import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { AddNewPageReview } from "../../../services/endpoints";
import { postAuthorizedFetch } from "../../../services/httpService";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useStyles from "./style";

export default function AddReviewModal({
  theme,
  isOpen,
  toggle,
  pageType,
  referenceId,
}) {
  let { t } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");
  const handleChangeRating = (value) => {
    setRate(value);
  };
  useEffect(() => {
    setRate(0);
    setComment("");
  }, [isOpen]);

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      pageType,
      referenceId,
      comment,
      rate,
    };
    const response = await postAuthorizedFetch(
      AddNewPageReview,
      data,
      router.locale
    );
    setLoading(false);
    if (response.status == 200) {
      toast.success("Sent Successfully");
      toggle();
    } else toast.error("Something went wrong!!!");
  };
  return (
    <Modal open={isOpen} onClose={toggle} disableScrollLock>
      <Box className={classes.innerContainer}>
        <Box className={classes.headerContainer}>
          <Typography variant="h6" className={classes.headerTitle}>
            {t("Add Review")}
          </Typography>
          <Close onClick={toggle} className={classes.closeIcon} />
        </Box>
        <Box
          className={classes.contentContainer}
          component="form"
          onSubmit={handleSubmitFeedback}
        >
          <Box>
            <Typography variant="subtitle1">{t("Rating")}</Typography>
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
          </Box>
          <Box>
            <Typography variant="subtitle1">{t("Comment")}</Typography>
            <TextField
              id="comment"
              minRows={5}
              required
              multiline
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Box>
          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : t("send")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
