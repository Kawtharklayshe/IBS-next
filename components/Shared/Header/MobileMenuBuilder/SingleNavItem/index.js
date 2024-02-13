import Link from "next/link";
import { Typography } from "@mui/material";
import useStyles from "./style";

const SingleNavItem = ({ navItem, toggle }) => {
  
  // navItem properties : {name, title, subTitle, link, children}
  const { title, link } = navItem;
  const classes = useStyles();
  return (
    <Link href={link || "/"}>
      <Typography
        variant="subtitle1"
        component="h2"
        className={classes.title}
        onClick={toggle}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default SingleNavItem;
