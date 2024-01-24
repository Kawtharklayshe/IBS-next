import { Box } from "@mui/material";
import SingleNavItem from "./navItemLink";
import SubMenuType1 from "./subMenuNavItemType1";
import SubMenuType2 from "./subMenuNavItemType2";
import SubMenuType3 from "./subMenuNavItemType3";
import usePartialAnimiStyles from "../../../styles/header/partialAnimation";

const MenuBuilder = ({
  theme,
  scrollTop = false,
  navList = [],
  isReadyToAnimate,
}) => {
  const classes = usePartialAnimiStyles();

  let delay = 1.36;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {navList.map((navItem, index) => {
        let Component;

        if (navItem.type === 1)
          Component = (
            <SingleNavItem
              key={index}
              theme={theme}
              navItem={navItem}
              scrollTop={scrollTop}
            />
          );
        else if (navItem.type === 2) {
          if (navItem.menuType === 1 && navItem.children.length > 0)
            Component = (
              <SubMenuType1
                key={index}
                theme={theme}
                navItem={navItem}
                scrollTop={scrollTop}
              />
            );
          else if (navItem.menuType === 2 && navItem.children.length > 0)
            Component = (
              <SubMenuType2
                key={index}
                theme={theme}
                navItem={navItem}
                scrollTop={scrollTop}
              />
            );
          else if (navItem.menuType === 3 && navItem.children.length > 0)
            Component = (
              <SubMenuType3
                key={index}
                theme={theme}
                navItem={navItem}
                scrollTop={scrollTop}
              />
            );
        }

        // const delay = 1.36 + Number(`0.0${index}`);
        delay += 0.04;

        return (
          <div
            style={{ animationDelay: `${delay}s` }}
            className={isReadyToAnimate() ? classes.root : undefined}
          >
            {Component}
          </div>
        );
      })}
    </Box>
  );
};

export default MenuBuilder;
