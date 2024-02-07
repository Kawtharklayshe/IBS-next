import React from "react";

const SignInBackground1 = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="749"
      height="675"
      viewBox="0 0 749 675"
      fill={fill ?? "none"}
      className={className}
    >
      <path
        d="M257 93C121.4 105.8 29.1667 5 0 -47L864 -43.5V674.5H767.5C468.7 636.5 519 485 581.5 414C618 364.167 684 244.1 656 162.5C621 60.5 426.5 77 257 93Z"
        fill={color}
      />
    </svg>
  );
};

export default SignInBackground1;
