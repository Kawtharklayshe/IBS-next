import Link from "next/link";
import { Typography } from "@mui/material";

const SingleNavItem = ({ navItem, toggle }) => {
  // navItem properties : {name, title, subTitle, link, children}
  const { title, link } = navItem;
  return (
    <Link href={link || "/"}>
      <Typography
        variant="subtitle1"
        component="h2"
        color="onBackground.dark"
        sx={{ cursor: "pointer" }}
        onClick={toggle}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default SingleNavItem;
