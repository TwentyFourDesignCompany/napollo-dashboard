import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navbarData } from "./NavbarData";
import "./SingleNavItem.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const SingleNavItem = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const toggleSubNavState = () => setSubNav(!subNav);

  return (
    <>
      <NavLink
        exact
        className="navBarLink"
        activeClassName="nav-active"
        to={item.path}
        key={item.path}
        onClick={item.subNav && toggleSubNavState}
      >
        <div className="bg-transparent flex flex-row ">
          {item.icon}
          <SingleNavLabel className="font-Medium">{item.title}</SingleNavLabel>
        </div>
        <div className="bg-transparent">
          {item.subNav && subNav ? (
            <FaChevronRight className="bg-transparent text-sm" />
          ) : item.subNav ? (
            <FaChevronDown className="bg-transparent text-sm" />
          ) : null}
        </div>
      </NavLink>
      {subNav &&
        item.subNav.map((item, index) => (
          <NavLink
            onClick={toggleSubNavState}
            exact
            className="sub-nav-cont"
            activeClassName="nav-active sub-nav-acive"
            to={item.path}
            key={index}
          >
            <DropdownLabel className="font-Medium">{item.title}</DropdownLabel>
          </NavLink>
        ))}
    </>
  );
};
// {
//   navView;
// }
export default SingleNavItem;

const SingleNav = styled.div`
  background: transparent;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;

  text-decoration: none;
  list-style: none;
  color: #eee;
  font-size: 18px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  align-items: center;
  &:hover {
    background: #18243b;
    cursor: pointer;
    border-left: 4px solid #f68128;
  }
  .nav-active {
    color: #f68128;
  }
`;

const SingleNavLabel = styled.span`
  margin-left: 20px;
  background: transparent;
`;
const DropDownLink = styled(NavLink)`
  background: #1f2e49;
  width: 100%;
  height: 60px;
  text-decoration: none;
  padding-left: 5rem;
  display: block;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const DropdownLabel = styled.span`
  background: transparent;
  color: #eee;
`;
