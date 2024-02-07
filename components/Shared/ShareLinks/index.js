import { useState } from "react";
import { Box, Snackbar, Tooltip } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { Link, Print, AddComment } from "@mui/icons-material";
import AddReviewModal from "../AddReviewModal";
import useStyles from "./style";

export default function ShareLinks({
  sharedLink,
  printedTargetSectionId = "",
  theme,
  pageType,
  referenceId,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const toggleReviewModal = () => setIsReviewModalOpen(!isReviewModalOpen);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(sharedLink);
    setOpen(true);
  };

  const handlePrint = () => {
    let printContents = document.getElementById(
      printedTargetSectionId
    ).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <Box className={classes.root}>
      <FacebookShareButton url={sharedLink}>
        <FacebookIcon size={32} round="true" />
      </FacebookShareButton>
      <FacebookShareButton url={sharedLink}>
        <FacebookMessengerIcon size={32} round="true" />
      </FacebookShareButton>
      <TwitterShareButton url={sharedLink} hashtags={[]}>
        <TwitterIcon size={32} round="true" />
      </TwitterShareButton>
      <EmailShareButton url={sharedLink}>
        <EmailIcon size={32} round="true" />
      </EmailShareButton>
      <Link onClick={handleCopyToClipboard} className={classes.icon} />
      {printedTargetSectionId && (
        <Tooltip title="Print" placement="top">
          <Print onClick={handlePrint} className={classes.icon} />
        </Tooltip>
      )}
      {referenceId && (
        <Tooltip title="Add Review" placement="top">
          <AddComment
            size={32}
            round="true"
            className={classes.icon}
            onClick={toggleReviewModal}
          />
        </Tooltip>
      )}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleClose}
        message="Copied To Clipboard"
      />
      <AddReviewModal
        isOpen={isReviewModalOpen}
        toggle={toggleReviewModal}
        theme={theme}
        pageType={pageType}
        referenceId={referenceId}
      />
    </Box>
  );
}
