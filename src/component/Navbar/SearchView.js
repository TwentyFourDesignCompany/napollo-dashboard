import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import CustomBtnWithIcon from "../Button/GradientBtnWithIcon/CustomBtnWithIcon";
import PencilIcon from "../../component/Icons/Pencil";

const SearchView = () => {
  return (
    <Content className="w-full h-full bg-primary-light flex flex-row">
      <MyInputCont>
        <input
          type="text"
          placeholder="Search..."
          className="myInput font-Medium"
        />
        <div className="nav-icon-cont">
          <FaSearch className="nav-input-icon bg-transparent" />
        </div>
      </MyInputCont>
      <BtnView>
        <CustomBtnWithIcon title="Create report" className="navbar-btn">
          <PencilIcon className="text-white-main bg-transparent mr-2" />
        </CustomBtnWithIcon>
      </BtnView>
    </Content>
  );
};

export default SearchView;

const Content = styled.div`
  min-height: 65px !important;
  justify-content: flex-end;
  align-items: center;
`;

const MyInputCont = styled.div`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #636363;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 45px;
  min-width: 50%;
  margin-right: 40px;

  .myInput {
    background: transparent;
    width: 85%;
    min-height: 45px;
    border: 0px !important;
    outline: none !important;
    font-size: 15px;
    color: #636363;
    &::placeholder {
      color: #636363;
    }
    &:focus {
      outline: none !important;
      border: 0px !important;
    }
  }
  .nav-icon-cont {
    background: #636363;
    min-height: 45px;
    width: 15%;
    justify-content: center;
    align-items: center;
    display: flex;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    flex-direction: row;
    .nav-input-icon {
      color: #f68128;
      font-size: 20px;
    }
  }
`;

const BtnView = styled.div`
  min-height: 40px;
  min-width: 18%;
  background: transparent;
  .navbar-btn {
    min-height: 40px;
  }
`;
