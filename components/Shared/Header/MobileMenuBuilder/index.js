import { Fragment } from "react";
import { Divider } from "@mui/material";
import CategoriesMenuBuilder from "./CategoriesMenuBuilder";
import SingleNavItem from "./SingleNavItem";
import CollapseNavItem from "./CollapseNavItem";
import useStyles from "./style";

const MobileMenuBuilder = ({ theme, navList, toggle, categories }) => {
  const classes = useStyles();


  const renderNavMenu = navList.map((navItem, index) =>
    navItem.children.length == 0 ? (
      <Fragment key={index}>
        <SingleNavItem navItem={navItem} toggle={toggle} />
        {index != navList.length - 1 && (
          <Divider className={classes.divider1} />
        )}
      </Fragment>
    ) : (
      <Fragment key={index}>
        <CollapseNavItem navItem={navItem} toggle={toggle} />
        {index != navList.length - 1 && (
          <Divider className={classes.divider2} />
        )}
      </Fragment>
    )
  );

  return (
    <Fragment>
      {categories && (
        <Fragment>
          <CategoriesMenuBuilder categories={categories} toggleMenu={toggle} />
          <Divider className={classes.divider2} />
        </Fragment>
      )}
      {renderNavMenu}
    </Fragment>
  );
};

export default MobileMenuBuilder;
