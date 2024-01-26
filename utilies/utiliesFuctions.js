import { MENU_ITEM_TYPES } from "../constants/enums";
/// function for checking of document status if all the images within it are loaded
// if true swap custom loader status to false(hidden)
export function checkLoadImages(setLoading) {
  if (typeof window == "object") {
    Promise.all(
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

// function for adding event types as children to event menu item
export function appendChildrenToEventMewuItem(
  eventTypesList = [],
  menuList = []
) {
  let newList = menuList.map((menuItem) => {
    const { link, type, children, ...rest } = menuItem;
    if (link === "/events") {
      let newChildren = eventTypesList.map((eventType) => ({
        link: `/events/${eventType.slug}`,
        children: [],
        type: MENU_ITEM_TYPES.static,
        title: eventType.title,
        description: eventType.description,
      }));
      return { link, type, children: [...children, ...newChildren], ...rest };
    } else return menuItem;
  });
  return newList;
}
