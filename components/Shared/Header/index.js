import { Fragment, useState } from "react";
import { MAIN_HEADER_TYPES } from "../../../constants/enums";
import EcommerceHeader from "./EcommerceHeader";
import FolioHeader from "./FolioHeader";
import AlertNotificationsSection from "./AlertNotificationsSection";
import useStyles from "./style";

const Header = (props) => {
  const {
    mainHeaderType,
    pages,
    theme,
    defaultFontScale,
    devicesCategory,
    headerType,
    socialMediaLinks,
    currencyOptions,
    notifications,
    eventTypes,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // for close the notification slider
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      {notifications?.alerts?.length > 0 && (
        <AlertNotificationsSection
          open={open}
          handleClose={handleClose}
          notifications={notifications}
        />
      )}
      {mainHeaderType === MAIN_HEADER_TYPES.Folio ? (
        <FolioHeader
          pages={pages}
          theme={theme}
          defaultFontScale={defaultFontScale}
          devicesCategory={devicesCategory}
          headerType={headerType}
          socialMediaLinks={socialMediaLinks}
          currencyOptions={currencyOptions}
          eventTypes={eventTypes}
        />
      ) : (
        <EcommerceHeader
          pages={pages}
          theme={theme}
          defaultFontScale={defaultFontScale}
          devicesCategory={devicesCategory}
          headerType={headerType}
          socialMediaLinks={socialMediaLinks}
          currencyOptions={currencyOptions}
        />
      )}
    </Fragment>
  );
};

export default Header;
