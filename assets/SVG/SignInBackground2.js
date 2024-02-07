import React from "react";

const SignInBackground2 = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="442"
      height="508"
      viewBox="0 0 442 508"
      fill={fill ?? "none"}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 724C279.927 724 442 561.927 442 362C442 162.073 279.927 0 80 0C-119.927 0 -282 162.073 -282 362C-282 561.927 -119.927 724 80 724ZM80 581C200.95 581 299 482.95 299 362C299 241.05 200.95 143 80 143C-40.9504 143 -139 241.05 -139 362C-139 482.95 -40.9504 581 80 581Z"
        fill={color}
      />
    </svg>
  );
};

export default SignInBackground2;
