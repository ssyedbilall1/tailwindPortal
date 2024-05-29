import React from "react";

const Button = ({ label, width, background, border, hover }) => {
  return (
    <button
      type="button"
      className={`${width} p-3 text-sm font-medium text-gray-900 ${background} rounded-lg borde ${border} ${hover}`}
    >
      {label}
    </button>
  );
};

export default Button;
