import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Cookies from "js-cookie";
import React, { useState, useEffect, Fragment } from "react";
import { FILTER_OPTIONS } from "../../../constants/enums";
import {
  Box,
  Typography,
  Button,
  Switch,
  FormGroup,
  Badge,
  Popover,
  Tooltip,
  Modal,
} from "@mui/material";
import {
  AccessibilityNew,
  Close,
  Check,
  ModeNight,
  TextDecrease,
  TextIncrease,
  TextFormat,
} from "@mui/icons-material";
import { ChromePicker } from "react-color";
import useStyles from "./style";

const ClientThemeModal = ({ globalThemeConfig, defaultFontScale }) => {
  let { t } = useTranslation("common");
  const router = useRouter();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [currentConfig, setCurrentConfig] = useState({
    primaryColor: globalThemeConfig.primaryColor,
    fontScale: defaultFontScale,
    mode: "light",
    effectId: -1,
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenColorPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseColorPopover = () => {
    setAnchorEl(null);
  };

  const toggle = () => setIsOpen(!isOpen);

  const fontSizeOptions = [
    {
      id: 1,
      label: "",
      value: (Number(defaultFontScale) - 0.2).toFixed(1),
      icon: <TextDecrease />,
    },
    {
      id: 2,
      label: t("Default"),
      value: Number(defaultFontScale).toFixed(1),
      icon: <TextFormat />,
    },
    {
      id: 3,
      label: "",
      value: (Number(defaultFontScale) + 0.2).toFixed(1),
      icon: <TextIncrease />,
    },
  ];

  const isApplyed = Cookies.get("THEMEPREF") ? true : false;

  const handleChangeFontScale = (value) => {
    setCurrentConfig((prev) => ({ ...prev, fontScale: value }));
  };

  const handleChangeMode = () => {
    setCurrentConfig({
      ...currentConfig,
      mode: currentConfig.mode == "light" ? "dark" : "light",
    });
  };
  const handleChangeFilter = (filterId) => {
    const isApplied = currentConfig.effectId == filterId;
    if (isApplied)
      setCurrentConfig({
        ...currentConfig,
        effectId: -1,
      });
    else
      setCurrentConfig({
        ...currentConfig,
        effectId: filterId,
      });
  };

  const handleApplyChanges = () => {
    const themePref = { ...currentConfig };
    Cookies.set("THEMEPREF", JSON.stringify(themePref, null, 2));
    router.reload();
  };

  const handleResetTheme = () => {
    Cookies.remove("THEMEPREF");
    router.reload();
  };

  useEffect(() => {
    if (typeof window === "object") {
      const currentTheme = JSON.parse(Cookies.get("THEMEPREF") || null);
      if (currentTheme) setCurrentConfig(currentTheme);
      else
        setCurrentConfig({
          primaryColor: globalThemeConfig.primaryColor,
          fontScale: defaultFontScale,
          mode: "light",
          effectId: -1,
        });
    }
  }, [isOpen]);

  return (
    <Box>
      <Badge
        // badgeContent={isApplyed && <Check />}
        className={classes.badge}
      >
        <AccessibilityNew onClick={toggle} className={classes.accessibleIcon} />
      </Badge>
      <Modal open={isOpen} onClose={toggle} disableScrollLock>
        <Box className={classes.innerContainer}>
          <Box className={classes.headerContainer}>
            <Typography variant="h6" className={classes.headerTitle}>
              {t("Settings")}
            </Typography>
            <Close onClick={toggle} className={classes.closeIcon} />
          </Box>
          <Box className={classes.contentContainer}>
            <Box className={classes.contentSection}>
              <Typography variant="subtitle2">{t("Primary Color")}</Typography>
              <Tooltip title="click to change" placement="top-end">
                <Box
                  aria-describedby="color-popover"
                  className={classes.currentColorBox}
                  sx={{ backgroundColor: currentConfig.primaryColor }}
                  onClick={handleOpenColorPopover}
                />
              </Tooltip>
              <Popover
                id="color-popover"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                onClose={handleCloseColorPopover}
                disableScrollLock
              >
                <ChromePicker
                  color={currentConfig.primaryColor}
                  onChange={(updatedColor) =>
                    setCurrentConfig({
                      ...currentConfig,
                      primaryColor: updatedColor.hex,
                    })
                  }
                />
              </Popover>
            </Box>
            <Box className={classes.contentSection}>
              <Typography variant="subtitle2">{t("Font Scale")}</Typography>
              <Box className={classes.fontActionsContainer}>
                {fontSizeOptions.map((fontOption) => (
                  <Box
                    key={fontOption.id}
                    className={`${classes.fontSizeOption} ${
                      currentConfig.fontScale == fontOption.value
                        ? classes.fontOptionActive
                        : ""
                    }`}
                    onClick={() => handleChangeFontScale(fontOption.value)}
                  >
                    <Typography variant="body1">{fontOption.label}</Typography>
                    {fontOption.icon}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className={classes.contentSection}>
              <Typography
                variant="subtitle2"
                className={classes.nightModeTitle}
              >
                {t("Night Mode")}
                <ModeNight />
              </Typography>{" "}
              <FormGroup>
                <Switch
                  checked={currentConfig.mode == "dark"}
                  onChange={handleChangeMode}
                />
              </FormGroup>
            </Box>
            <Box className={classes.contentSection}>
              <Box className={classes.filtersContainer}>
                {FILTER_OPTIONS.map((filter) => (
                  <Box
                    key={filter.id}
                    className={`${classes.filterOption} ${
                      currentConfig.effectId == filter.id
                        ? classes.filterOptionActive
                        : ""
                    }`}
                    onClick={() => handleChangeFilter(filter.id)}
                  >
                    <Image src={filter.src} width={20} height={20} />
                    <Typography variant="subtitle2">
                      {t(filter.label)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className={classes.actionsContainer}>
            <Button variant="outlined" onClick={handleResetTheme}>
              {t("Restore Original")}
            </Button>
            <Button variant="contained" onClick={handleApplyChanges}>
              {t("Apply Changes")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ClientThemeModal;
