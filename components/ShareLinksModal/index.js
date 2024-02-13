import {
  Modal,
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ShareLinksModal = ({ isOpen, setIsOpen, sharedLink }) => {
  const urlRef = useRef(null);
  let { t } = useTranslation("common");
  const handleClose = () => setIsOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
    p: 4,
  };

  const handleCopyToClipboard = () => {
    const value = urlRef.current.value;
    navigator.clipboard.writeText(value);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h6"
          color="primary"
          sx={{ textAlign: "center", mb: 2 }}
        >
          {t("ShareWithFriends")}
        </Typography>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "5%",
            right: "5%",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        <Grid container>
          <Grid
            item
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookShareButton url={sharedLink} style={{ margin: "0 10px" }}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <FacebookShareButton url={sharedLink} style={{ margin: "0 10px" }}>
              <FacebookMessengerIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={sharedLink}
              hashtags={[]}
              style={{ margin: "0 10px" }}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <EmailShareButton url={sharedLink} style={{ margin: "0 10px" }}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </Grid>
          <Grid item sm={12} sx={{ mt: 2 }}>
            <TextField
              id="input-with-icon-textfield"
              label={t("EventLink")}
              inputRef={urlRef}
              value={sharedLink}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ContentCopyIcon
                      onClick={handleCopyToClipboard}
                      sx={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ShareLinksModal;
