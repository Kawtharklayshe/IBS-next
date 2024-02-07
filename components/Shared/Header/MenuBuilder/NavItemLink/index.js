import Link from "next/link";
import { Typography } from "@mui/material";
import useStyles from "./style";

const NavItem = ({ theme, navItem }) => {
  const { title, link, children } = navItem;
  const classes = useStyles();
  return (
    <Link href={link || "/"} passHref>
      <Typography
        variant="subtitle2"
        component="h6"
        className={classes.navItemTitle}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default NavItem;
