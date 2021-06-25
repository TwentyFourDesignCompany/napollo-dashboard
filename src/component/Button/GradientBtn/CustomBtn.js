import React from "react";
import "./CustomBtn.css";

const CustomBtn = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className={
        props.className ? `custom-btn ${props.className}` : "custom-btn"
      }
    >
      {props.children}
    </button>
  );
};

export default CustomBtn;
