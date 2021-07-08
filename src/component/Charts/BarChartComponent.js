import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { visitData, deviceData } from "../../data";

const BarChartComponent = (props) => {
  console.log(window.innerWidth, "Width");
  return (
    // <div>
    // <ResponsiveContainer>
    <BarChart
      width={
        window.innerWidth >= 700 ? 650 : window.innerWidth >= 400 ? 380 : 300
      }
      height={props.height}
      data={props.data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="5 5" color="#c4c4c4" /> */}
      <XAxis dataKey="name" />
      <YAxis />

      <Tooltip
        wrapperStyle={{ background: "#111" }}
        labelStyle={{ fontSize: 16, textAlign: "center", color: "#fff" }}
        contentStyle={{ background: "#111", borderRadius: 5, border: 0 }}
      />
      <Legend />
      <Bar dataKey="PC" fill="#975B54" radius={3} />
      <Bar dataKey="Phones" fill="#526370" radius={3} />
      <Bar dataKey="Tablet" fill="#3D5A95" radius={3} />
    </BarChart>
    // </ResponsiveContainer>
    // </div>
  );
};

export default BarChartComponent;
