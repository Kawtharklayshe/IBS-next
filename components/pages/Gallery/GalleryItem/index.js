import { useState } from "react";
import { ZoomIn } from "@mui/icons-material";
import FullImage from "../../../Shared/FullImage";
import useStyles from "./style";
const GalleryImage = ({ item, images }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageMainContainer}>
        <img
          src={item?.thumbnailUrl ? item?.thumbnailUrl : "/images/no-image.png"}
          className={classes.imageClass}
        />
        <div className={classes.imageOverlay}>
          <ZoomIn
            className={classes.zoomInIcon}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      {open == true && (
        <FullImage
          open={open}
          setOpen={setOpen}
          image={item.url}
          images={images}
        />
      )}
    </div>
  );
};

export default GalleryImage;
