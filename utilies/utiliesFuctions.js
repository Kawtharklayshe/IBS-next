import cookie from "cookie";
import Cookies from "js-cookie";
import { arabicCountries } from "../constants/arabicCountryCodes";
import { MENU_ITEM_TYPES } from "../constants/enums";
// function for parsing cookie to http request
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

// function for save cuurent language in the cookie (client side)
// NEXT_LOCALE = en; the name of cookie you have to use for save current value
export function setCurrentLanguagePref(langCode) {
  Cookies.set("NEXT_LOCALE", langCode);
}

///function for checking if the detected country code related to arabic country from a pre-built specific list
export function isArabicCountry(countryCode) {
  return arabicCountries.some((country) => country.code === countryCode);
}

// function for save current Currency in the cookie (client side)
// CURRENCY = USD|UAE|DRH....; the name of cookie you have to use for save current value
export function setCurrentCurrencyPref(currency) {
  Cookies.set("CURRENCY", JSON.stringify(currency));
}

/// function for checking of document status if all the images within it are loaded
// if true swap custom loader status to false(hidden)
export async function checkLoadImages(setLoading) {
  if (typeof window == "object") {
    await Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
        return new Promise((resolve) => {
          img.addEventListener("load", () => resolve(true));
          img.addEventListener("error", () => resolve(false));
        });
      })
    ).then((results) => {
      if (results.every((res) => res)) setLoading(false);
      else setLoading(false);
    });
  }
}

/// function for checking of page meta keywords and return list of keys for SEO princibles
export function getSEOKeywordsContent(list = []) {
  let content = "";
  if (list.length > 0) {
    content += list.join(", ");
    return content;
  }
  return content;
}

/// function for handling query params in shop page
export function handlePathFilters(filtersArray = null) {
  let tempUrl = "",
    queryParamsPath = "";
  // checking of current path params and adding each param to temp url
  if (filtersArray)
    Object.entries(filtersArray).map(([key, value]) => {
      switch (key) {
        case "catId": // CategoryId
          tempUrl = tempUrl + `Categories=${value}&`;
          queryParamsPath = queryParamsPath + `catId=${value}&`;
          break;
        case "manuId": // ManufactureId
          tempUrl = tempUrl + `ManufactureId=${value}&`;
          queryParamsPath = queryParamsPath + `manuId=${value}&`;
          break;
        case "originId": // OriginId
          tempUrl = tempUrl + `OriginId=${value}&`;
          queryParamsPath = queryParamsPath + `originId=${value}&`;
          break;
        case "brandId": // BrandId
          tempUrl = tempUrl + `BrandId=${value}&`;
          queryParamsPath = queryParamsPath + `brandId=${value}&`;
          break;
        case "PaN": // PageNumber
          tempUrl = tempUrl + `PageNumber=${value}&`;
          queryParamsPath = queryParamsPath + `PaN=${value}&`;
          break;
        case "PaS": // PageSize
          tempUrl = tempUrl + `PageSize=${value}&`;
          queryParamsPath = queryParamsPath + `PaS=${value}&`;
          break;
        case "PN": // ProductName
          tempUrl = tempUrl + `Name=${value}&`;
          queryParamsPath = queryParamsPath + `PN=${value}&`;
          break;
        case "PrMin": // MinPrice
          tempUrl = tempUrl + `Price.Min=${value}&`;
          queryParamsPath = queryParamsPath + `PrMin=${value}&`;
          break;
        case "PrMax": // MaxPrice
          tempUrl = tempUrl + `Price.Max=${value}&`;
          queryParamsPath = queryParamsPath + `PrMax=${value}&`;
          break;
        case "RT": // RateType
          tempUrl = tempUrl + `Rates=${value}&`;
          queryParamsPath = queryParamsPath + `RT=${value}&`;
          break;
        case "ST": // SortType
          tempUrl = tempUrl + `SortType=${value}&`;
          queryParamsPath = queryParamsPath + `ST=${value}&`;
          break;
        default:
          break;
      }
    });
  if (tempUrl.length) {
    return {
      httpRequestParams: tempUrl.substring(0, tempUrl.length - 1),
      browserUrlParams: queryParamsPath.substring(
        0,
        queryParamsPath.length - 1
      ),
    };
  }
  return {
    httpRequestParams: tempUrl,
    browserUrlParams: queryParamsPath,
  };
}

// function for transforming tree list of Categories into nested options
// with compined titles for Radio button group (recursion)
export const transformListToOptionsListWithCompinedTitles = (
  list = [],
  parentTitle = ""
) => {
  let currentLevel = {
    label: parentTitle,
    options: [],
  };
  let nestedLevel = [];
  list.forEach((el) => {
    if (el.childrenCategories.length == 0) {
      currentLevel.options.push({
        label: el.name,
        value: el.id,
      });
    } else {
      let tempTitle = `${parentTitle && parentTitle + "- "}${el.name}`;
      nestedLevel.push(
        transformListToOptionsListWithCompinedTitles(
          el.childrenCategories,
          tempTitle
        )
      );
    }
  });

  let temp = [...nestedLevel];
  if (currentLevel.options.length) temp.push(currentLevel);

  return temp.flat();
};

/// function for handling pages list and return
//  list of uniqe object [name, title, subTitle, link, children]
export function reshapeNavList(list = []) {
  const temp = list.map((page) => {
    const { link, slugName, type, subPages, ...rest } = page;
    if (type == MENU_ITEM_TYPES.static) {
      return {
        ...rest,
        link: slugName,
        children: reshapeNavList(subPages),
      };
    } else if (type == MENU_ITEM_TYPES.dynamic)
      return {
        ...rest,
        link: `/new_pages/${slugName}`,
        children: reshapeNavList(subPages),
      };
    else
      return {
        ...rest,
        link,
        children: reshapeNavList(subPages),
      };
  });
  return temp;
}

/// function for retriev specific social media data
export function getSocialMediaLink(list = [], targetLabel) {
  const temp = list.find(({ channel }) => channel == targetLabel);
  if (temp) return temp;
  return { channel: null, value: null };
}

/// function for set session id & session token in local storage
export function setSessionCredintials(sessionId, sessionToken) {
  localStorage.setItem("SID", JSON.stringify(sessionId, null, 2));
  localStorage.setItem("STO", JSON.stringify(sessionToken, null, 2));
}

/// function for remove session id & session token from local storage
export function romveSessionCredintials() {
  localStorage.removeItem("SID");
  localStorage.removeItem("STO");
}

/// function for check and update session id & session token in local storage
export function checkAndUpdateSessionCredintials(sessionId, sessionToken) {
  const oldSID = localStorage.getItem("SID");
  const oldSTO = localStorage.getItem("STO");

  if (oldSID && oldSTO) {
    let oldSIDData = JSON.parse(oldSID);
    let oldSTOData = JSON.parse(oldSTO);
    if (oldSIDData != sessionId || oldSTOData != sessionToken)
      setSessionCredintials(sessionId, sessionToken);
    return;
  }
  /// case there is no credintials in local storage
  setSessionCredintials(sessionId, sessionToken);
}

/// function for set user info in local storage
export function setUserInfo(data) {
  localStorage.setItem("UDA", JSON.stringify(data, null, 2));
}

/// function for remove user info from local storage
export function removeUserInfo() {
  localStorage.removeItem("UDA");
}

/// function for set JWT in local storage
export function setJWT(jwt) {
  localStorage.setItem("UTO", JSON.stringify(jwt, null, 2));
}
/// function for set RefreshToken in local storage
export function setRefreshToken(refreshToken) {
  localStorage.setItem("URTO", JSON.stringify(refreshToken, null, 2));
}

/// function for remove RefreshToken from local storage
export function removeRefreshToken() {
  localStorage.removeItem("URTO");
}

/// function for remove JWT from local storage
export function removeJWT() {
  localStorage.removeItem("UTO");
}

/// function for check and return one auth way (JWT or session credintials)
export function checkOneAuthWay() {
  let headers;
  const jwt = JSON.parse(localStorage.getItem("UTO"));

  if (jwt) {
    headers = {
      Authorization: `Bearer ${jwt}`,
    };
    romveSessionCredintials();
    return headers;
  }

  headers = {
    sessionid: JSON.parse(localStorage.getItem("SID")) || "",
    sessiontoken: JSON.parse(localStorage.getItem("STO")) || "",
  };

  return headers;
}

/// function for check and return one currency value
export function checkCurrency() {
  let currency;
  try {
    currency = JSON.parse(Cookies?.get("CURRENCY"))?.value;
  } catch (error) {}
  if (currency) return currency;
  else return "";
}
