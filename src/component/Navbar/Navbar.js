import React, { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTimes, FaStream } from "react-icons/fa";
import MainLogo from "../../assets/images/verify.png";
import SearchView from "./SearchView";
import AdminDetailsView from "./AdminDetailsView";
import SingleNavItem from "./SingleNavItem";
import { navbarData } from "./NavbarData";
import Logout from "../../component/Icons/Logout";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(!sideBar);
  };
  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <div className="navbar">
      <div
        className={
          sideBar ? "nav1 bg-primary-light active" : "nav1 bg-primary-light "
        }
      >
        <div className="nav1-header w-full py-2 px-4 flex flex-row">
          <img src={MainLogo} className="main-logo" />
          <h2 className="font-Medium bg-transparent text-white-main text-2xl ml-3">
            Napollo
          </h2>
        </div>
        {window.innerWidth <= 768 && (
          <div className="nav-close-btn bg-transparent w-full ">
            <FaTimes
              className="bg-transparent text-white-main text-2xl cursor-pointer"
              onClick={closeSideBar}
            />
          </div>
        )}

        <div className="nav1-links lg:mt-16 bg-transparent">
          <nav className="navbar-links bg-transparent ">
            {navbarData.map((item, index) => (
              <SingleNavItem
                item={item}
                key={index}
                closeSideBar={closeSideBar}
              />
            ))}
            {/* <SingleNavItem /> */}
          </nav>
        </div>
        {/* Logout */}
        <div className="logout bg-transparent flex flex-row absolute bottom-0 left-0 ">
          <Logout className="bg-transparent mr-5" />
          <p className="logout-text bg-transparent font-Medium">Logout</p>
        </div>
      </div>
      <div className="nav2  bg-primary-light flex flex-row  md:pl-5 pl-5 ">
        <div className="sub-nav2-1 block bg-transparent">
          <FaStream
            className="text-white-main text-2xl block bg-transparent"
            onClick={openSideBar}
          />
        </div>
        <div className="sub-nav2-2 bg-primary-light h-full">
          {window.innerWidth <= 768 ? (
            <div className="details-cont">
              <AdminDetailsView />
            </div>
          ) : (
            <>
              <div className="input-cont ">
                <SearchView />
              </div>
              <div className="details-cont">
                <AdminDetailsView />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const SideNav = styled.nav``;
