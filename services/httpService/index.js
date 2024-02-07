import {
  checkAndUpdateSessionCredintials,
  checkOneAuthWay,
  checkCurrency,
} from "../../utilies/utiliesFuctions";

export async function getFetch(
  url,
  MerchantId,
  locale = "ar",
  detectedCurrency = null
) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        MerchantId: MerchantId,
        "Accept-Language": locale,
        currency: detectedCurrency ?? "",
      },
    });
    return response;
  } catch (e) {
    return null;
  }
}
export async function postFetch(url, MerchantId, body, userID = "") {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        MerchantId: MerchantId,
        UserId: userID,
        currency: checkCurrency(),
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (e) {
    return null;
  }
}
export async function SignUpPost(body, image, url) {
  const data = new FormData();
  data.append(`image`, image);
  for (let key in body) data.append(key, body[key]);
  const requestOptions = {
    method: "POST",
    headers: {
      enctype: "multipart/form-data",
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      MerchantId: process.env.NEXT_PUBLIC_MERCHANT,
      ...checkOneAuthWay(),
      currency: checkCurrency(),
    },
    body: data,
  };
  try {
    const response = await fetch(`${url}`, requestOptions);
    const { headers } = response;
    if (headers.get("sessionid") && headers.get("sessiontoken"))
      checkAndUpdateSessionCredintials(
        headers.get("sessionid"),
        headers.get("sessiontoken")
      );
    return response;
  } catch (e) {
    return null;
  }
}
export async function getAutherisedFetch(url, MerchantId, locale = "ar") {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        MerchantId: process.env.NEXT_PUBLIC_MERCHANT,
        "Accept-Language": locale,
        ...checkOneAuthWay(),
        currency: checkCurrency(),
      },
    });
    const { headers } = response;
    if (headers.get("sessionid") && headers.get("sessiontoken"))
      checkAndUpdateSessionCredintials(
        headers.get("sessionid"),
        headers.get("sessiontoken")
      );
    return response;
  } catch (e) {
    return null;
  }
}
export async function DeleteAuthorizedFetch(url, MerchantId, locale = "ar") {
  try {
    const response = await fetch(url, {
      method: "DElETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": locale,
        MerchantId: MerchantId,
        ...checkOneAuthWay(),
        currency: checkCurrency(),
      },
    });
    const { headers } = response;
    if (headers.get("sessionid") && headers.get("sessiontoken"))
      checkAndUpdateSessionCredintials(
        headers.get("sessionid"),
        headers.get("sessiontoken")
      );
    return response;
  } catch (e) {
    return null;
  }
}
export async function postAuthorizedFetch(url, body, locale = "ar") {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": locale,
        MerchantId: process.env.NEXT_PUBLIC_MERCHANT,
        ...checkOneAuthWay(),
        currency: checkCurrency(),
      },
      body: JSON.stringify(body),
    });
    const { headers } = response;
    if (headers.get("sessionid") && headers.get("sessiontoken"))
      checkAndUpdateSessionCredintials(
        headers.get("sessionid"),
        headers.get("sessiontoken")
      );
    return response;
  } catch (e) {
    return null;
  }
}
export async function putAuthorizedFetch(url, body, locale = "ar") {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": locale,
        MerchantId: process.env.NEXT_PUBLIC_MERCHANT,
        ...checkOneAuthWay(),
        currency: checkCurrency(),
      },
      body: JSON.stringify(body),
    });
    const { headers } = response;
    if (headers.get("sessionid") && headers.get("sessiontoken"))
      checkAndUpdateSessionCredintials(
        headers.get("sessionid"),
        headers.get("sessiontoken")
      );
    return response;
  } catch (e) {
    return null;
  }
}

// Chat http services
export async function postChatFetch(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        WorkspaceKey: process.env.NEXT_PUBLIC_WORK_SPACE_KEY,
      },
      body: JSON.stringify(body),
    });
    const res = await response.json();

    return res;
  } catch (e) {
    return null;
  }
}

export async function getFetchUnreadMsgs(
  url,
  uid //room id
) {
  const finalUrl = `${url}?uid=${uid}`;
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${accessToken}`,
        WorkspaceKey: process.env.NEXT_PUBLIC_WORK_SPACE_KEY,
      },
    });

    const res = await response.json();
    return res;
  } catch (e) {
    return null;
  }
}
export async function getFetchAllMsgs(
  url,
  uid, //room id
  messageId
) {
  const finalUrl = `${url}?PageSize=${10}&uid=${uid}&messageId=${messageId}`;
  const { accessToken } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${accessToken}`,
        WorkspaceKey: process.env.NEXT_PUBLIC_WORK_SPACE_KEY,
      },
    });

    const res = await response.json();
    return res;
  } catch (e) {
    return null;
  }
}

const HttpService = {
  getFetch,
  postFetch,
  SignUpPost,
  getAutherisedFetch,
  DeleteAuthorizedFetch,
  postAuthorizedFetch,
  putAuthorizedFetch,
  postChatFetch,
  getFetchAllMsgs,
  getFetchUnreadMsgs,
};

export default HttpService;
