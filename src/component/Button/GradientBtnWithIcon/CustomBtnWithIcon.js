import React from "react";
import "./CustomBtnWithIcon.css";

const CustomBtnWithIcon = (props) => {
  return (
    <button
      type={props.type ? props.type : "text"}
      onClick={props.onClick ? () => props.onClick() : null}
      className={
        props.className
          ? `custom-btn2 bg-transparent ${props.className}`
          : "custom-btn2 bg-transparent"
      }
    >
      {props.children}
      <p className="btn-text bg-transparent capitalize font-Medium text-sm">
        {props.title}
      </p>
    </button>
  );
};

export default CustomBtnWithIcon;
