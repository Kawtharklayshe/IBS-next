import { createTheme } from "@mui/material/styles";

const getContrast50 = (hexcolor) => {
  return parseInt(hexcolor, 16) > 0xffffff / 2 ? "black" : "white";
};

export const themeGenerator = (Router, themeData) => {
  const themeConfiguration = {
    direction: Router.locale == "ar" ? "rtl" : "ltr",
    palette: {
      mode: themeData?.mode ?? "light",
      primary: {
        main: `${themeData?.primaryColor || "#eee"}`,
        light: `${themeData?.primaryColor}`.concat("a6"),
      },
      onPrimary: { main: `${themeData?.onPrimaryColor}` || "black" },
      background: {
        main: themeData?.mode == "dark" ? "black" : themeData?.backgroundColor,
      },
      onBackground: {
        light:
          themeData?.mode == "dark"
            ? "#ffffff".concat("a6")
            : themeData?.onBackgroundColor.concat("a6"),
        main:
          themeData?.mode == "dark" ? "white" : themeData?.onBackgroundColor,
        dark:
          themeData?.mode == "dark"
            ? "#ffffff".concat("e5")
            : themeData?.onBackgroundColor.concat("e5"),
      },
      card: {
        main: themeData?.mode == "dark" ? "#2D2B2D" : themeData?.cardColor,
      },
      onCard: {
        light:
          themeData?.mode == "dark"
            ? "#ffffff".concat("a6")
            : themeData?.onCardColor.concat("a6"),
        main: themeData?.mode == "dark" ? "white" : themeData?.onCardColor,
        dark:
          themeData?.mode == "dark"
            ? "#ffffff".concat("e5")
            : themeData?.onCardColor.concat("e5"),
      },
      dividerColor: `${themeData?.dividerColor}`,
    },
    typography: {
      fontFamily: themeData?.fontFamily,
      fontSize: 14 * themeData?.fontScale,
    },
    shape: {
      cardElevation: themeData?.elevation,
      cardRadius: themeData?.radius,
    },
  };

  return createTheme(themeConfiguration);
};
