import React, { useEffect } from "react";
import "./Dashboard.css";
import MyDiv from "../../../component/Common/Container";
import { motion } from "framer-motion";
import { loadFromStorage } from "../../../utils/localStorage";

const Dashboard = ({ match, location, history }) => {
  // useEffect(() => {
  //   const token = loadFromStorage("adminToken");
  //   if (token && token !== "") {
  //     return null;
  //   } else {
  //     history.push("/dashboard/login");
  //   }
  // }, []);

  return (
    <motion.div
      className="container"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MyDiv className="main-dashboard container  bg-primary-bg">
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboards</h1>
        <h1 className="text-white-main">Dashboardsssssssss</h1>
      </MyDiv>
    </motion.div>
  );
};

export default Dashboard;
