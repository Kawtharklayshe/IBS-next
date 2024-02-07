import { Backdrop, Box, Modal, Fade, Typography, Button } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useStyles from "./style";

const PopUpNotificationModal = ({ open, handleClose, data }) => {
  const classes = useStyles();

  if (!open || !data) return <></>;

  return (
    <Modal
      className={classes.root}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className="contentContainer">
          <Box className="content">
            <Box className="closeBtn">
              <CloseRoundedIcon onClick={handleClose} />
            </Box>
            <Box className="actualContent">
              <Box className="imgContainer" />
              <Typography className="title">{data?.title}</Typography>
              <Typography
                className="description"
                dangerouslySetInnerHTML={{ __html: data?.body }}
              />
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PopUpNotificationModal;
