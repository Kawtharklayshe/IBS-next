import React from "react";

const CartIcon = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5Z"
        fill={color}
      />
      <path
        d="M19.5 38.5C9.00659 38.5 0.5 29.9934 0.5 19.5H-0.5C-0.5 30.5457 8.45431 39.5 19.5 39.5V38.5ZM38.5 19.5C38.5 29.9934 29.9934 38.5 19.5 38.5V39.5C30.5457 39.5 39.5 30.5457 39.5 19.5H38.5ZM19.5 0.5C29.9934 0.5 38.5 9.00659 38.5 19.5H39.5C39.5 8.45431 30.5457 -0.5 19.5 -0.5V0.5ZM19.5 -0.5C8.45431 -0.5 -0.5 8.45431 -0.5 19.5H0.5C0.5 9.00659 9.00659 0.5 19.5 0.5V-0.5Z"
        fill={color + "2A"}
      />
      <g clipPath="url(#clip0_574_8859)">
        <path
          d="M27.0938 24.9688H13.8125L9.90625 8.5625H7.5625M10.6875 11.6875H29.4375L27.0938 21.8438H13.0312L10.6875 11.6875Z"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5312 29.6562C26.3942 29.6562 27.0938 28.9567 27.0938 28.0938C27.0938 27.2308 26.3942 26.5312 25.5312 26.5312C24.6683 26.5312 23.9688 27.2308 23.9688 28.0938C23.9688 28.9567 24.6683 29.6562 25.5312 29.6562Z"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.375 29.6562C16.2379 29.6562 16.9375 28.9567 16.9375 28.0938C16.9375 27.2308 16.2379 26.5312 15.375 26.5312C14.5121 26.5312 13.8125 27.2308 13.8125 28.0938C13.8125 28.9567 14.5121 29.6562 15.375 29.6562Z"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_574_8859">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(8 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CartIcon;
