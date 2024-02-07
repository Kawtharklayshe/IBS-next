import LowContrast from "../assets/low_contrast.png";
import HighContrast from "../assets/high_contrast.png";
import LowSaturation from "../assets/low_saturation.png";
import HighSaturation from "../assets/high_saturation.png";
import ColorBlindness from "../assets/colorBlindness.png";

// main heaader type enum
export const MAIN_HEADER_TYPES = {
  Folio: 0,
  Ecommerce: 1,
};

// header design type enum
export const headerTypes = {
  colored: 0,
  transparent: 1,
};

/// menu item type enum
export const MENU_ITEM_TYPES = {
  static: 0,
  dynamic: 1,
  link: 2,
};

// language options
export const languages = [
  { name: "English", value: "en" },
  { name: "Deutsch", value: "de" },
  { name: "العربية", value: "ar" },
];

// langauge enum
export const langsEnum = {
  en: "English",
  de: "Deutsch",
  ar: "العربية",
};

/// flag of language enum
export const flagsEnum = {
  en: "us",
  de: "de",
  ar: "ae",
};

/// paymentMethod from back-end side
// {
//   CREDITCARD = 0,
//   WALLET = 1,
//   POD = 2,
// }

/// payment method options
export const PAYMENT_OPTIONS = [
  { label: "CREDIT CARD", value: "CREDITCARD" },
  // { label: "WALLET", value: "WALLET" },
  { label: "COD", value: "POD" },
];

/// payment way enum
export const PAYTMENT_TYPES = {
  credit: "CREDITCARD",
  // wallet:"WALLET",
  pod: "POD",
};

// Accessibilty Filtter Options
export const FILTER_OPTIONS = [
  {
    id: 0,
    label: "Low Contrast",
    src: LowContrast,
    filterValue: "contrast(0.65)",
  },
  {
    id: 1,
    label: "High Contrast",
    src: HighContrast,
    filterValue: "contrast(1.6)",
  },
  {
    id: 2,
    label: "Low Saturation",
    src: LowSaturation,
    filterValue: "saturate(0.5)",
  },
  {
    id: 3,
    label: "High Saturation",
    src: HighSaturation,
    filterValue: "saturate(2)",
  },
  {
    id: 4,
    label: "Color Blindness",
    src: ColorBlindness,
    filterValue: "grayscale(1)",
  },
];

/// Page Rate type enum
export const PAGE_RATE_TYPES = {
  news: "News",
  projects: "Project",
  events: "Event",
  publications: "Publication",
  services: "Service",
};
