export const baseURL = process.env.NEXT_PUBLIC_BACK_END_PUBLIC_PATH;
export const alternativeBaseURL =
  process.env.NEXT_PUBLIC_BACK_END_PUBLIC_PATH_SECONDARY; // In case the "baseURL" in not working, then you can use it[http with IP/PORT]
export const GET_HOME_INFO = `${baseURL}/web/home`;
export const GET_THEME = `${baseURL}/web/GlobalTheme/new`;
export const GET_GALLERY = `${baseURL}/web/gallery?limit=30`;
export const GET_NEWS = (pageCount, pageSize) =>
  `${baseURL}/web/news?PageNumber=${pageCount}&PageSize=${pageSize}`;
export const GET_CATEGORIES = (slug) => `${baseURL}/web/Category/slug/${slug}`;
export const GET_CONTACT = `${baseURL}/web/AboutUs/contact-us`;
export const GET_PROJECTS = (pageCount, pageSize) =>
  `${baseURL}/web/project?PageNumber=${pageCount}&PageSize=${pageSize}`;
export const GET_SERVICES = (pageCount, pageSize) =>
  `${baseURL}/web/service?PageNumber=${pageCount}&PageSize=${pageSize}`;
export const GET_NEWS_DETAILS = (id) => `${baseURL}/web/News/${id}`;
export const GET_TEAM = `${baseURL}/web/AboutUs/our-team`;
export const FOOTER = `${baseURL}/web/footer`;
export const PROJECT_DETAIL = (id) => `${baseURL}/web/project/${id}`;
export const SERVICE_DETAILS = (id) => `${baseURL}/web/SubService/${id}`;
export const AboutUS = `${baseURL}/web/aboutUs/details`;
export const SubServicesAPI = (id, pageCount, pageSize) =>
  `${baseURL}/web/service/${id}/sub-services?PageNumber=${pageCount}&PageSize=${pageSize}`;
export const PostFooterSubscribe = `${baseURL}/web/about-us/subscriber`;
export const PostSendEmail = `${baseURL}/web/about-us/contact-us/sendEmail`;
export const GETFAQ = `${baseURL}/web/Faq`;
export const GET_DYNAMIC_PAGE = (slug) => `${baseURL}/web/Page/${slug}`;
export const POST_NEW_USER = `${baseURL}/web/Account/Register`;
export const POST_CONFORM = `${baseURL}/Web/Account/ConfirmAccount`;
export const FORGET_PASSWORD = `${baseURL}/Web/Account/ForgetPassword`;
export const LOGIN = `${baseURL}/web/Account/Login`;
export const RESENDCODE = `${baseURL}/web/Account/ResendCode`;
export const CHECKFORGETCODE = `${baseURL}/Web/Account/CheckCode`;
export const POSTNEWPASSWORD = `${baseURL}/Web/Account/ConfirmForgetPassword`;
////////////////////////////////////////////////////////////////////////////////////////

///// Ecommerce Endpoints
export const ServerSideGetShopProductsList = (filtersPath) =>
  `${baseURL}/web/Item/list?${filtersPath}`;
export const ClientSideGetShopProductsList = (filtersPath) =>
  `${baseURL}/web/Item/list?${filtersPath}`;
export const ClientSideGetSearchedProductsOptions = (searchedValue) =>
  `${baseURL}/web/Item/list?Name=${searchedValue}`;
export const GetShopFiltersList = `${baseURL}/web/Item/filters`;
export const GetSpecificItemDetails = (itemSlug) =>
  `${baseURL}/web/Item/${itemSlug}/details`;
export const GetRelatedItemsListForSpecificItem = (itemSlug) =>
  `${baseURL}/web/Item/${itemSlug}/relatedBySlug`;
export const GetAllWishlistItems = `${baseURL}/web/Wishlist`;
export const GetWishlistItems = (pageNumber = 1, pageSize = 10) =>
  `${baseURL}/web/Wishlist?PageNumber=${pageNumber}&PageSize=${pageSize}`;
export const AddItemToWishlist = `${baseURL}/web/Wishlist`;
export const DeleteSpecificWishlistItem = (itemId) =>
  `${baseURL}/web/Wishlist/${itemId}`;

export const GetAllCartItems = `${baseURL}/web/Cart`;
export const AddItemToCart = `${baseURL}/web/Cart`;
export const UpdateCartItemQty = (cartItemId) =>
  `${baseURL}/web/Cart/${cartItemId}`;
export const DeleteSpecificCartItem = (cartItemId) =>
  `${baseURL}/web/Cart/${cartItemId}`;

export const GetItemReviewList = (itemSlug, pageNumber = 1, pageSize = 4) =>
  `${baseURL}/web/ItemReview/${itemSlug}/bySlug?PageNumber=${pageNumber}&PageSize=${pageSize}`;
export const AddNewItemReview = `${baseURL}/web/ItemReview`;

export const GetUserOrdersList = (pageNumber, pageSize = 10) =>
  `${baseURL}/Ecommerce/Order?PageNumber=${pageNumber}&PageSize=${pageSize}`;

export const GetSpecificUserOrder = (orderId) =>
  `${baseURL}/Ecommerce/Order/${orderId}`;

export const GetUserAddressesList = `${baseURL}/Ecommerce/Address`;
export const AddNewAddress = `${baseURL}/Ecommerce/Address`;
export const UpdateSpecificAddress = (addressId) =>
  `${baseURL}/Ecommerce/Address/${addressId}`;
export const DeleteSpecificAddress = (addressId) =>
  `${baseURL}/Ecommerce/Address/${addressId}`;

export const GetAreasList = `${baseURL}/Ecommerce/Area`;

export const AddNewInitialPaymentOrder = `${baseURL}/Ecommerce/Order/IntialPayment`;

export const AddNewOrder = `${baseURL}/Ecommerce/Order`;

export const GetServicesPageInfo = `${baseURL}/web/Category`;

export const AddNewItemReport = `${baseURL}/web/ItemReport`;
export const GetItemReportPaageInfo = `${baseURL}/web/ItemReport`;

export const GetLearningVideosListItems = (pageNumber = 1, pageSize = 10) =>
  `${baseURL}/web/LearningVideo?PageNumber=${pageNumber}&PageSize=${pageSize}`;

export const GetFieldExperimentsListItems = (pageNumber = 1, pageSize = 10) =>
  `${baseURL}/web/FieldExperiment?PageNumber=${pageNumber}&PageSize=${pageSize}`;

export const GetBuyingAndShippingInfo = `${baseURL}/web/BuyingShippingPage`;

export const AddNewPageReview = `${baseURL}/Client/PageRate`;

/////////////////////////////////////////////////////////////////////////////
/// Detect And Get Current User Connection Info
export const Get_Current_User_Connection_Info = "https://ip.nf/me.json";

///// Chat Endpoints
export const AddGuestUserUrl = `${process.env.NEXT_PUBLIC_CHAT_SERVER_PATH}/api/V1/Public/Account/AddGuestUser`;
export const roomMessagesUrl = `${process.env.NEXT_PUBLIC_CHAT_SERVER_PATH}/api/V1/Public/ChatSupport/GetRoomMessages`;
export const roomUnreadMessagesUrl = `${process.env.NEXT_PUBLIC_CHAT_SERVER_PATH}/api/V1/Public/ChatSupport/GetRoomUnreadMessagesCount`;
