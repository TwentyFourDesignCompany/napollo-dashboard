import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { visitData } from "../../data";

const LineChartComponent = (props) => {
  const LineComponent = styled.div`
    // min-height: ${props.height}px;
    // min-width: 260px;
  `;
  return (
    <LineComponent className="bg-transparent min-w-full h-24">
      <ResponsiveContainer className="bg-transparent">
        <AreaChart
          // data={visitData}
          data={props.data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          className="bg-transparent"
        >
          {/* <CartesianGrid strokeDasharray="1 1" /> */}
          {/* <XAxis dataKey='Page' /> */}
          {/* <YAxis /> */}
          <Tooltip
            labelStyle={{ fontSize: 16, textAlign: "center", color: "#fff" }}
            contentStyle={{ background: "#111", borderRadius: 5, border: 0 }}
          />
          <Area
            type="monotone"
            // dataKey="visits"
            dataKey={props.name}
            // stroke="#f68128"
            // fill="#f68128"
            stroke={props.color}
            fill={props.color}
          />
        </AreaChart>
      </ResponsiveContainer>
    </LineComponent>
  );
};

LineChartComponent.prototype = {
  name: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  data: PropTypes.array,
};
// LineChartComponent.defaultProps = {
//   height: 150,
//   color: "#F68128",
// };

export default LineChartComponent;
