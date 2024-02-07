const hoistNonReactStatics = require("hoist-non-react-statics");
module.exports = {
  locales: ["en", "de", "ar"],
  defaultLocale: "en",
  // localeDetection: false,
  pages: {
    "*": ["common"],
  },
  staticsHoc: hoistNonReactStatics,
};
