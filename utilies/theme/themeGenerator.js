import { createTheme } from "@mui/material/styles";

export const themeGenerator = (Router, themeData) => {
  const themeConfiguration = {
    direction: Router.locale == "ar" ? "rtl" : "ltr",
    palette: {
      primary: {
        main: `${themeData?.primaryColor || "#eee"}`,
        light: `${themeData?.primaryColor}`.concat("a6"),
      },
      onPrimary: { main: `${themeData?.onPrimaryColor}` || "black" },
      background: { main: `${themeData?.backgroundColor}` || "black" },
      onBackground: {
        light: `${themeData?.onBackgroundColor}`.concat("a6"),
        main: `${themeData?.onBackgroundColor}`,
        dark: `${themeData?.onBackgroundColor}`.concat("e5"),
      },
      card: { main: `${themeData?.cardColor}` } || "black",
      onCard: {
        light: `${themeData?.onCardColor}`.concat("a6") || "black",
        main: `${themeData?.onCardColor}`,
        dark: `${themeData?.onCardColor}`.concat("e5") || "black",
      },
      dividerColor: `${themeData?.dividerColor}`,
    },
    typography: {
      fontFamily: themeData?.fontFamily,
      fontSize: 14 * themeData?.fontScale,
    },
  };

  return createTheme(themeConfiguration);
};
