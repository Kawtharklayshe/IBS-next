import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useRef, useState, Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Popover } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
    padding: "5px",
  },
}));
const SubMenuTypeRight = ({ theme, navItem }) => {
  const { title, link, children } = navItem;
  let { t } = useTranslation("common");
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
        sx={{
          cursor: "pointer",
          whiteSpace: "nowrap",
          borderRadius: "0px",
          margin: "0px",
          padding: "0px 10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          textTransform: "none",
          lineHeight: "25px",
          borderBottom: "2px solid",
          borderColor: router.asPath == link ? "primary.main" : "transparent",
          color: router.asPath == link ? "primary.main" : "#A1A8A8",
          fontFamily: "Roboto",
          fontWeight: "500",
          fontSize: "0.85rem",
          "&:hover": {
            borderColor: "primary.main",
            color: "backgound.light",
            transition: ".9s",
          },
          "& .muirtl-9tj150-MuiButton-endIcon": {
            margin: "0px 10px",
          },
        }}
        disableElevation
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        onClick={() => handleNavigate(link)}
        endIcon={<KeyboardArrowRight />}
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
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
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
                  onClick={popoverLeave}
                  component="h6"
                  sx={{
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    margin: "5px 10px",
                    color: router.asPath == link ? "primary.main" : "#A1A8A8",
                    borderBottom: "2px solid",
                    borderColor:
                      router.asPath == link ? "primary.main" : "transparent",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "0.85rem",
                    "&:hover": {
                      color: theme.primaryColor,
                    },
                  }}
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
