import React from "react";
import CustomText from "../GradientText/CustomText";
import "./CustomCheckBox.css";

const CustomCheckBox = (props) => {
  return (
    <div
      className={
        props.className ? `checkbox-btn ${props.className}` : "checkbox-btn"
      }
    >
      <btn
        onClick={() => props.checked()}
        className={props.check === true ? `box active` : `box`}
      >
        {props.check === true ? <div className="checked-box"></div> : null}
      </btn>
      <CustomText
        type="p"
        className={
          props.check === true
            ? "text-secondary-light text-lg"
            : "text-white-dim text-lg"
        }
      >
        {props.children}
      </CustomText>
    </div>
  );
};

export default CustomCheckBox;
