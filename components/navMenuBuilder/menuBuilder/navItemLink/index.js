import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Typography } from "@mui/material";
const NavItem = ({ theme, scrollTop, navItem }) => {
  const { label, link, type } = navItem;
  let { t } = useTranslation("common");
  const Router = useRouter();
  return (
    <Link href={link} passHref>
      <a
        style={{
          textDecoration: "none",
          color: scrollTop == true ? `${theme?.onBackgroundColor}` : "inherit",
        }}
      >
        <Typography
          variant="subtitle1"
          component="h6"
          color="onBackgound.dark"
          sx={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            padding: "10px 15px",
            margin: "0px",
            marginRight: Router.locale != "ar" && "10px",
            marginLeft: Router.locale == "ar" && "10px",
            fontWeight: "600",
            fontSize: "0.85rem",
            lineHeight: "1",
            backgroundColor: link == Router.pathname && "primary.main",
            borderRadius: link == Router.pathname && "15px 0px",
            color: link == Router.pathname && "#fff",
            "&:hover": {
              borderRadius: "15px 0px",
              color: theme?.onPrimaryColor,
              backgroundColor: "primary.main",
            },
          }}
        >
          {t(label)}
        </Typography>
      </a>
    </Link>
  );
};

export default NavItem;
