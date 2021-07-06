import React from "react";
import styled from "styled-components";

const Container = (props) => {
  return <MyDiv className="common-container">{props.children}</MyDiv>;
};

export default Container;

const MyDiv = styled.div`
  padding-left: 21%;
  padding-top: 70px;
  @media screen and (max-width: 1000px) {
    padding-left: 3%;
    padding-top: 70px;
  }
`;
