import React from "react";
import styled from "styled-components";
import LineChartComponent from "../LineChartComponent";

const LineCharts = (props) => {
  const success = (val) => {
    if (val === "increase") {
      return (
        <SuccessNum className="bg-transparent mt-2 flex flex-row font-Medium">
          +&nbsp;7.5%
        </SuccessNum>
      );
    } else if (val === "decrease") {
      return (
        <DecreaseNum className="bg-transparent mt-2 flex flex-row font-Medium">
          -&nbsp;7.5%
        </DecreaseNum>
      );
    }
  };

  console.log(props, "PROPS");
  return (
    <LineComponent className="bg-primary-light rounded-md mb-3 xl:mb-0">
      <DetailCont className="bg-transparent pl-5 pr-3  pt-3">
        <h6 className="bg-transparent font-Medium text-white-dim capitalize lg:text-sm text-lg">
          {props.title}
        </h6>

        <FlexCont className="bg-transparent flex flex-row ">
          <p className="bg-transparent font-Regular text-white-light md:text-3xl text-4xl mt-2">
            {props.total}
          </p>
          {success(`${props.type}`)}
        </FlexCont>
      </DetailCont>
      <GraphView className="bg-transparent">
        <LineChartComponent
          data={props.data}
          name={props.name}
          height={props.height}
          color={props.color}
        />
      </GraphView>
    </LineComponent>
  );
};

export default LineCharts;

const LineComponent = styled.div`
  width: 100% !important;
  min-height: 170px;
`;

const FlexCont = styled.div`
  justify-content: space-between;
  align-items: center;
`;

const SuccessNum = styled.h6`
  background: #c3f9f3;
  width: 40px;
  height: 20px;
  border-radius: 2px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  color: #1abc9c;
  font-size: 10px;
`;
const DecreaseNum = styled.h6`
  background: #f8d5d7;
  width: 40px;
  height: 20px;
  border-radius: 2px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  color: #e7515a;
  font-size: 10px;
`;

const DetailCont = styled.div`
  //   min-height: 30%;
`;

const GraphView = styled.div`
  min-width: 100%;
    // height: 100%;
  //   background:#f68128
`;

//   <LineComponent className="bg-primary-light rounded-md">
//     <DetailCont className="bg-transparent pl-5 pr-3  pt-3">
//       <h6 className="bg-transparent font-Medium text-white-dim capitalize text-sm">
//         {props.title}
//       </h6>
//       <FlexCont className="bg-transparent flex flex-row ">
//         <p className="bg-transparent font-Regular text-white-light md:text-3xl mt-2">
//           {props.total}
//         </p>
//         {success(`${props.type}`)}
//       </FlexCont>
//     </DetailCont>
//     <GraphView className="bg-transparent">
//       <LineChartComponent
//         data={props.data}
//         name={props.name}
//         height={props.height}
//         color={props.color}
//       />
//     </GraphView>
//   </LineComponent>;
