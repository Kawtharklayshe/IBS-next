import React from "react";

const HeartIcon = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7353 2.50735C15.8939 1.54223 14.7525 1 13.5623 1C12.3722 1 11.2308 1.54223 10.3894 2.50735L9.52478 3.49865L8.66018 2.50735C6.9078 0.498217 4.06665 0.498217 2.31428 2.50735C0.561907 4.51649 0.561907 7.77394 2.31428 9.78307L3.17889 10.7744L9.52478 18.0501L15.8707 10.7744L16.7353 9.78307C17.5771 8.81841 18.05 7.50977 18.05 6.14521C18.05 4.78065 17.5771 3.47201 16.7353 2.50735Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
