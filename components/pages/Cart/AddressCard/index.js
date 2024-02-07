import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Typography, Box } from "@mui/material";
import useStyles from "./style";

const AddressCard = ({
  tempSelectedAddress,
  address,
  onUpdate,
  onDelete,
  onSelect,
}) => {
  let { t, lang } = useTranslation("common");
  const classes = useStyles({
    tempSelectedAddress,
    addressId: address.id,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      id: 1,
      label: t("Update"),
      action: (data) => {
        onUpdate(data);
        handleClose();
      },
    },
    {
      id: 2,
      label: t("Delete"),
      action: (data) => {
        onDelete(data);
        handleClose();
      },
    },
  ];

  return (
    <Box className={classes.root}>
      <Typography
        variant="subtitle1"
        className={classes.addressTitle}
        onClick={() => onSelect(address.id)}
      >
        {address.address}
      </Typography>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className={classes.moreVertIcon} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            onClick={() =>
              option.id === 2
                ? option.action(address.id)
                : option.action(address)
            }
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AddressCard;
