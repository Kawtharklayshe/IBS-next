import React from "react";

const HeartIconWithBorder = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8024 8.23319C17.1745 7.51302 16.3228 7.1084 15.4347 7.1084C14.5466 7.1084 13.6949 7.51302 13.067 8.23319L12.4218 8.9729L11.7767 8.23319C10.469 6.73396 8.34891 6.73396 7.04128 8.23319C5.73364 9.73242 5.73364 12.1632 7.04128 13.6624L7.68645 14.4021L12.4218 19.8313L17.1572 14.4021L17.8024 13.6624C18.4305 12.9425 18.7834 11.966 18.7834 10.9478C18.7834 9.92955 18.4305 8.95303 17.8024 8.23319Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill ?? "none"}
      />
      <circle cx="12.8194" cy="13.0724" r="11.8253" stroke={color} />
    </svg>
  );
};

export default HeartIconWithBorder;
