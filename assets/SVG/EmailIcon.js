const EmailIcon = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      width="26"
      height="19"
      viewBox="0 0 26 19"
      fill={fill ?? "none"}
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.64103 0.227539C2.12363 0.227539 0.801025 1.36536 0.801025 2.85552V15.6234C0.801025 17.1135 2.12363 18.2514 3.64103 18.2514H22.361C23.8784 18.2514 25.201 17.1135 25.201 15.6234V2.85552C25.201 1.36536 23.8784 0.227539 22.361 0.227539H3.64103ZM1.80103 2.85552C1.80103 2.0049 2.58442 1.22754 3.64103 1.22754H22.361C23.4176 1.22754 24.201 2.0049 24.201 2.85552V15.6234C24.201 16.474 23.4176 17.2514 22.361 17.2514H3.64103C2.58442 17.2514 1.80103 16.474 1.80103 15.6234V2.85552ZM13.0017 10.3053L22.3617 4.9854V2.85742L13.0017 8.17736L3.64172 2.85742V4.9854L13.0017 10.3053Z"
        fill={color}
      />
    </svg>
  );
};

export default EmailIcon;
