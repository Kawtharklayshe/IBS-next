import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Popover } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
    marginTop: "15px",
  },
  popoverContent: {
    pointerEvents: "auto",
    minWidth: "100px",
  },
}));
const SubMenuNavItem = ({ theme, scrollTop, navItem }) => {
  const { label, link, type, menuType, children } = navItem;
  const popoverAnchor = useRef(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  /// functions for handling popover status wheather it's open or not
  const popoverEnter = ({ currentTarget }) => {
    setIsOpen(true);
  };
  const popoverLeave = ({ currentTarget }) => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Button
        ref={popoverAnchor}
        aria-owns={isOpen ? `mouse-over-popover` : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        variant="text"
        sx={{
          cursor: "pointer",
          whiteSpace: "nowrap",
          padding: "10px 15px",
          margin: "0px",
          marginRight: router.locale != "ar" && "10px",
          marginLeft: router.locale == "ar" && "10px",
          fontWeight: "600",
          fontSize: "0.8rem",
          lineHeight: "1",
          backgroundColor: link == router.pathname && "primary.main",
          borderRadius: "15px 0px",
          color: link == router.pathname ? "primary.main" : "onBackgound.dark",
          "&:hover": {
            borderRadius: "15px 0px",
            color: theme?.onPrimaryColor,
            backgroundColor: "primary.main",
          },
        }}
        disableElevation
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        endIcon={<KeyboardArrowDown />}
      >
        {label}
      </Button>
      <Popover
        id="mouse-over-popover"
        open={isOpen}
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          onMouseEnter: popoverEnter,
          onMouseLeave: popoverLeave,
        }}
        disableScrollLock
      >
        {children.map((page, index) => (
          <Link key={index} href={page.link || "/"} passHref>
            <Typography
              variant="subtitle2"
              onClick={popoverLeave}
              component="h6"
              sx={{
                cursor: "pointer",
                whiteSpace: "nowrap",
                padding: "4px",
                margin: "5px",
                my: 1,
                fontWeight: "400",
                color: "onBackground.main",
                "&:hover": {
                  color: theme.primaryColor,
                },
              }}
            >
              {page.label}
            </Typography>
          </Link>
        ))}
      </Popover>
    </Fragment>
  );
};

export default SubMenuNavItem;
