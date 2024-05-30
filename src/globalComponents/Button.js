import React from "react";

const Button = ({
  label,
  width,
  background,
  border,
  hover,
  textColor,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${width} p-3 text-sm font-medium text-gray-900 ${background} rounded-lg borde ${border} ${hover} ${textColor}`}
    >
      {label}
    </button>
  );
};

export default Button;
