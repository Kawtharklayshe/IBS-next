import { Fragment } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import SingleNavItem from "./navItemLink";
import SubMenuTypeDown from "./SubMenuTypeDown";
import MoreItemsMenuTypeDown from "./MoreItemsMenuTypeDown";
import usePartialAnimiStyles from "../../../styles/header/partialAnimation";
import { useEffect } from "react";
import { useState } from "react";

const MenuBuilder = ({ theme, navList = [], isReadyToAnimate }) => {
  const Router = useRouter();
  let { t } = useTranslation("common");
  const classes = usePartialAnimiStyles();
  const [tempList, setTempList] = useState(navList);
  const [restMenuItems, setRestMenuItems] = useState([]);
  const isShown = tempList.length < navList.length;

  let delay = 0.5;

  /**
   *  function for calculating current available width and display nav items
   */
  const calculateWidthAndReArrang = () => {
    if (document.getElementById("navParentContainer")) {
      let newMenuItems = [],
        newRestMenuItems = [],
        tempWidth = 0;
      const navParentContainerNodeWidth =
        document.getElementById("navParentContainer").clientWidth;
      const langNodewidth = document.getElementById(
        "socialMediaSectionContainer"
      ).offsetWidth;
      const availableWidth =
        navParentContainerNodeWidth - langNodewidth - 15 - 85; // 15 is the gab between language box and nav box and 85 is thye width of More submenu
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      id="webNavList"
    >
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

        // const delay = 0.5 + Number(`0.0${index}`);
        delay += 0.04;

        return (
          <div
            style={{ animationDelay: `${delay}s` }}
            key={index}
            className={isReadyToAnimate() ? classes.root : undefined}
          >
            {Component}
          </div>
        );
      })}
      {isShown && (
        <div
          style={{ animationDelay: `${delay + 0.04}s` }}
          className={isReadyToAnimate() ? classes.root : undefined}
        >
          <MoreItemsMenuTypeDown theme={theme} list={restMenuItems} />
        </div>
      )}
    </Box>
  );
};

export default MenuBuilder;
