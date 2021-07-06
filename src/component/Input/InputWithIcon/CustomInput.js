import React, { useState } from "react";
import "./CustomInput.css";
import Image from "../../../assets/images/user.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const IconCont = ({ type, toggle }) => {
  if (type) {
    return (
      <button className="icon-btn" onClick={() => toggle()}>
        <FaRegEye className="text-white-main " />
      </button>
    );
  } else {
    return (
      <button className="icon-btn" onClick={() => toggle()}>
        <FaRegEyeSlash className="text-white-main " />
      </button>
    );
  }
};

const CustomInput = (props) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div
      className={
        props.className
          ? `inputCont w-full flex ${props.className}`
          : `inputCont w-full flex`
      }
    >
      {/* {props.children} */}
      <img src={props.image} alt="Logo" className="mr-3 block" />
      {props.password ? (
        <input
          type={!show ? "password" : "text"}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="customInput font-Regular text-white-dim border-0"
        />
      ) : (
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="customInput font-Regular text-white-dim border-0"
        />
      )}

      {props.showEyeIcon ? <IconCont type={show} toggle={toggleShow} /> : null}
    </div>
  );
};

export default CustomInput;
