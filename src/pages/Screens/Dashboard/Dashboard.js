import React, { useEffect } from "react";
import "./Dashboard.css";
import MyDiv from "../../../component/Common/Container";
import { FaEllipsisH } from "react-icons/fa";
import { motion } from "framer-motion";
import { loadFromStorage } from "../../../utils/localStorage";
import LineCharts from "../../../component/Charts/Dashboard/LineCharts";
import {
  visitData,
  streamsData,
  signupData,
  downloadsData,
  deviceData,
} from "../../../data";
import styled from "styled-components";
import BarChartComponent from "../../../component/Charts/BarChartComponent";
import ActivityComponent from "../../../component/Charts/Dashboard/ActivityComponent";

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
    <MyDiv className="">
      <section className=" min-w-full pb-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-5 pr-3">
        <LineCharts
          title="Daily visits"
          color="#f68128"
          name="visits"
          height={150}
          data={visitData}
          total="453,267"
          type="increase"
        />
        <LineCharts
          title="Daily Streams"
          color="#DC8D09"
          name="streams"
          height={150}
          data={streamsData}
          total="853,267"
          type="decrease"
        />
        <LineCharts
          title="Daily Downloads"
          color="#E7515A"
          name="downloads"
          height={150}
          data={downloadsData}
          total="1,853,267"
          type="increase"
        />
        <LineCharts
          title="Daily SignUps"
          color="#566DC9"
          name="signups"
          height={150}
          data={signupData}
          total="453,267"
          type="decrease"
        />
      </section>
      <section className="w-full pb-10 gap-3 lg:grid grid-cols-3 pr-3">
        <BarChartCont className="bg-primary-light rounded-md py-5  col-span-2 w-full">
          <BarHeader className="w-full flex flex-row px-8 pb-5">
            <p className="text-white-light font-Medium text-lg">
              Type of Devices
            </p>
            <FaEllipsisH className="text-white-dim" />
          </BarHeader>
          <BarChartComponent data={deviceData} height={350} />
        </BarChartCont>
        <div className="bg-primary-light rounded-md py-5 col-span-1 w-full">
          <BarHeader className="w-full flex flex-row px-8 pb-5">
            <p className="text-white-light font-Medium text-lg">Activity</p>
            <FaEllipsisH className="text-white-dim" />
          </BarHeader>
          {/* CONTENT */}
          <div className="w-full py-5 pl-10 pr-2">
            <ActivityComponent type="success" title="Server Logs Updatedy" />
            <ActivityComponent
              // type="success"
              title="ClickUp Updated"
              desc="Media APIs uploaded"
            />
            <ActivityComponent
              type="crash"
              title="Crash Report"
              desc="Sent to frontend team"
            />
            <ActivityComponent
              type="new"
              title="New Project Created"
              desc="Admin Dashboard"
            />
          </div>
        </div>
      </section>
    </MyDiv>
  );
};

export default Dashboard;

const BarChartCont = styled.div`
  min-height: 400px;
`;

const BarHeader = styled.div`
  border-bottom: 1px dashed #444;
  justify-content: space-between;
  align-items: center;
`;
