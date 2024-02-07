import { useEffect } from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./style";

const Canvas = ({ children, isOpen, toggle, setToggle }) => {
  const classes = useStyles({ isOpen });

  // for handle clicking event outside the mobile menu
  useEffect(() => {
    if (typeof window === "object") {
      document.addEventListener("click", (e) => {
        if (e.target.id == "mobileSideMenuDropShadowWrapper") setToggle(false);
      });

      return document.removeEventListener("click", (e) => {
        if (e.target.id == "mobileSideMenuDropShadowWrapper") setToggle(false);
      });
    }
  }, []);
  return (
    <Box
      className={classes.dropShadowWrapper}
      id="mobileSideMenuDropShadowWrapper"
    >
      <Box
        xs={12}
        className={classes.innerContainer}
        id="innerMobileSideContainer"
      >
        <Box>
          {/** colse menu icon */}
          <CloseIcon className={classes.closeIcon} onClick={toggle} />
          {/** end of colse menu icon */}
        </Box>
        <Box className={classes.contentContainer}>
          {/** content section */}
          <Box xs={12}>{children}</Box>
          {/** end of content section */}
        </Box>
      </Box>
    </Box>
  );
};

export default Canvas;
