import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Box } from "@mui/material";
import SingleNavItem from "./NavItemLink";
import SubMenuTypeDown from "./SubMenuTypeDown";
import MoreItemsMenuTypeDown from "./MoreItemsMenuTypeDown";
import usePartialAnimiStyles from "../CustomAnimation/partialAnimation";
import useStyles from "./style";

const MenuBuilder = ({
  theme,
  navList = [],
  isReadyToAnimate,
  animationDelay,
}) => {
  const Router = useRouter();
  let { t } = useTranslation("common");
  const classes = useStyles();
  const AnimiClasses = usePartialAnimiStyles();
  const [tempList, setTempList] = useState(navList);
  const [restMenuItems, setRestMenuItems] = useState([]);
  const isShown = tempList.length < navList.length;

  let delay = animationDelay;

  /**
   *  function for calculating current available width and display nav items
   */
  const calculateWidthAndReArrang = () => {
    if (document.getElementById("navParentContainer")) {
      let newMenuItems = [],
        newRestMenuItems = [],
        tempWidth = 0;
      const navParentContainerNodeWidth =
        document.getElementById("navParentContainer").offsetWidth;
      const langNodewidth =
        document.getElementById("languageContainer").offsetWidth;
      const availableWidth =
        navParentContainerNodeWidth - langNodewidth - 25 - 65; // 25 is the gab between language box and nav box, and 65 is the width of More nav item
      const currentNavItems = Array.from(
        document.getElementById("webNavList").children
      );
      for (let index = 0; index < currentNavItems.length; index++) {
        const element = currentNavItems[index];
        if (tempWidth + element.offsetWidth < availableWidth) {
          tempWidth += element.offsetWidth;
          newMenuItems.push(navList[index]);
        } else {
          newRestMenuItems = newRestMenuItems.concat(navList.slice(index));
          break;
        }
      }
      setTempList(newMenuItems);
      setRestMenuItems(newRestMenuItems);
    }
  };

  useEffect(() => {
    calculateWidthAndReArrang();
    window.addEventListener("resize", calculateWidthAndReArrang);
    return () =>
      window.removeEventListener("resize", calculateWidthAndReArrang);
  }, []);
  return (
    <Box className={classes.root} id="webNavList">
      {tempList.map((navItem, index) => {
        let Component;

        if (navItem.children.length == 0)
          Component = (
            <SingleNavItem key={index} theme={theme} navItem={navItem} />
          );
        else {
          Component = (
            <SubMenuTypeDown key={index} theme={theme} navItem={navItem} />
          );
        }

        delay += 0.04;

        return (
          <Box
            key={index}
            className={isReadyToAnimate() ? AnimiClasses.root : undefined}
            sx={{ animationDelay: `${delay}s` }}
          >
            {Component}
          </Box>
        );
      })}
      {isShown && (
        <Box
          className={isReadyToAnimate() ? AnimiClasses.root : undefined}
          sx={{ animationDelay: `${delay + 0.04}s` }}
        >
          <MoreItemsMenuTypeDown theme={theme} list={restMenuItems} />
        </Box>
      )}
    </Box>
  );
};

export default MenuBuilder;
