import { useState } from "react";
import { Modal } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./style";

export default function FullImage({ open, setOpen, image, images }) {
  const classes = useStyles();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(true);
  const onImgLoad = () => {
    setLoading(false);
  };

  const [currentImg, setCurrentImg] = useState(
    images.findIndex((img) => img.url == image)
  );
  const forwardIMg = () => {
    if (currentImg < images.length - 1) setCurrentImg(() => currentImg + 1);
  };
  const beforeIMg = () => {
    if (currentImg > 0) setCurrentImg(() => currentImg - 1);
  };
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  let xDown = null;
  let yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }
  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }
  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */ forwardIMg();
      } else {
        /* left swipe */ beforeIMg();
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={(e) => {
          handleClose();
          e.stopPropagation();
        }}
        className={classes.modal}
      >
        <div className={classes.modalContainer}>
          <div className={classes.innerContainer}>
            {loading && <CircularProgress className={classes.loader} />}
            <img
              src={images[currentImg].url}
              onLoad={onImgLoad}
              className={classes.imgClass}
            />
            <ArrowForwardIosIcon
              className={loading ? `hidden` : `${classes.arrowNext}`}
              onClick={forwardIMg}
            />
            <ArrowBackIosIcon
              className={loading ? `hidden` : `${classes.arrowBack}`}
              onClick={beforeIMg}
            />
            <CloseIcon
              className={loading ? `hidden` : classes.closeButton}
              onClick={handleClose}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
