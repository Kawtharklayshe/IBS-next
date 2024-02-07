import React from "react";

const CartIcon = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => (
  <svg
    width="20"
    height="25"
    viewBox="0 0 25 25"
    fill={fill ?? "none"}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M18.3763 21.2732H6.35701C6.03287 21.2735 5.718 21.1651 5.46274 20.9653C5.20748 20.7655 5.02658 20.4859 4.94897 20.1712L2.24514 9.34568C2.21875 9.24029 2.21676 9.13028 2.23931 9.024C2.26185 8.91773 2.30835 8.81799 2.37525 8.7324C2.44215 8.6468 2.5277 8.57759 2.62539 8.53005C2.72307 8.4825 2.83031 8.45786 2.93895 8.45801H21.7944C21.903 8.45786 22.0103 8.4825 22.1079 8.53005C22.2056 8.57759 22.2912 8.6468 22.3581 8.7324C22.425 8.81799 22.4715 8.91773 22.494 9.024C22.5166 9.13028 22.5146 9.24029 22.4882 9.34568L19.7844 20.1712C19.7067 20.4859 19.5258 20.7655 19.2706 20.9653C19.0153 21.1651 18.7005 21.2735 18.3763 21.2732V21.2732Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.1219 3.21387L7.16296 8.45829"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.285 3.21387L17.2542 8.45829"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CartIcon;
