import React from "react";
import "./CustomBtn.css";

const CustomBtn = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick ? () => props.onClick() : null}
      className={
        props.className ? `custom-btn ${props.className}` : "custom-btn"
      }
    >
      {props.children}
    </button>
  );
};

export default CustomBtn;
