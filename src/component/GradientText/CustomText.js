import React from "react";
import "./Text.css";

const textFunc = (props) => {
  switch (props.type) {
    case "h1":
      return (
        <h1
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </h6>
      );
    case "p":
      return (
        <p
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </p>
      );
    case "span":
      return (
        <span
          className={
            props.gradient
              ? `gradient-text ${props.className}`
              : `${props.className}`
          }
        >
          {props.children}
        </span>
      );

    default:
      return null;
  }
};

const CustomText = (props) => {
  return textFunc(props);
};

export default CustomText;
