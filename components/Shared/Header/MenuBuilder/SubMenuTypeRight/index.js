import Link from "next/link";
import { useRef, useState, Fragment } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography, Button, Popover } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import useStyles from "./style";

const SubMenuTypeRight = ({ theme, navItem }) => {
  const { title, link, children } = navItem;
  let { t, lang } = useTranslation("common");
  const router = useRouter();
  const popoverAnchor = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  /// functions for handling popover status wheather it's open or not
  const popoverEnter = ({ currentTarget }) => {
    setIsOpen(true);
  };
  const popoverLeave = ({ currentTarget }) => {
    setIsOpen(false);
  };

  const handleNavigate = (route) => router.push(route);

  return (
    <Fragment>
      <Button
        ref={popoverAnchor}
        aria-owns={isOpen ? `mouse-over-popover` : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        variant="text"
        className={classes.menuBtn}
        disableElevation
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        onClick={() => handleNavigate(link)}
        endIcon={lang == "ar" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      >
        {title}
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
          vertical: "top",
          horizontal: lang == "ar" ? "left" : "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: lang == "ar" ? "right" : "left",
        }}
        PaperProps={{
          onMouseEnter: popoverEnter,
          onMouseLeave: popoverLeave,
        }}
        disableScrollLock
      >
        {children.map((page, index) => {
          const { title, link, children } = page;
          if (children.length == 0)
            return (
              <Link key={index} href={link || "/"} passHref>
                <Typography
                  variant="subtitle2"
                  component="h6"
                  className={classes.singleItemTitle}
                  onClick={popoverLeave}
                >
                  {title}
                </Typography>
              </Link>
            );
          else return <SubMenuTypeRight navItem={page} theme={theme} />;
        })}
      </Popover>
    </Fragment>
  );
};

export default SubMenuTypeRight;
