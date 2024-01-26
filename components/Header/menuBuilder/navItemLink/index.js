import Link from "next/link";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const NavItem = ({ theme, navItem }) => {
  const { title, link, children } = navItem;
  const router = useRouter();

  return (
    <Link href={link || "/"} passHref>
      <Typography
        variant="subtitle2"
        component="h6"
        sx={{
          cursor: "pointer",
          whiteSpace: "nowrap",
          margin: "5px 10px",
          borderBottom: "2px solid",
          borderColor: router.asPath == link ? "primary.main" : "transparent",
          fontStyle: "normal",
          lineHeight: "40px",
          color: router.asPath == link ? "primary.main" : "#A1A8A8",
          fontFamily: "Roboto",
          fontWeight: "500",
          fontSize: "0.85rem",
          "&:hover": {
            borderColor: "primary.main",
            color: "backgound.light",
            transition: ".9s",
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default NavItem;
