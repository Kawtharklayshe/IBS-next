const isHomePg = (Router) => {
  return Router.pathname === "/" || Router.pathname === `/${Router.locale}`
    ? true
    : false;
};

export default isHomePg;
