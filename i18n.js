const hoistNonReactStatics = require("hoist-non-react-statics");
module.exports = {
  locales: ["en", "de"],
  defaultLocale: "en",
  localeDetection: false,
  pages: {
    "*": ["common"],
    "/projects": ["projects"],
  },
  staticsHoc: hoistNonReactStatics,
};
