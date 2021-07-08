import React from "react";
import styled from "styled-components";
import { FaPlus, FaCheck, FaPastafarianism } from "react-icons/fa";

const ActivityComponent = (props) => {
  const selectIcon = (props) => {
    switch (props) {
      case "success":
        return (
          <MainIconCont className="flex flex-col  pr-2">
            <IconCont className="flex flex-row mr-2">
              <FaCheck className="text-base text-white-main" />
            </IconCont>
            <Divider className="flex flex-row my-3" />
          </MainIconCont>
        );

      case "crash":
        return (
          <MainIconCont className="flex flex-col mr-1 pr-2">
            <CrashIconCont className="flex flex-row">
              <FaPastafarianism className="text-base text-white-main" />
            </CrashIconCont>
            <Divider className="flex flex-row my-3 " />
          </MainIconCont>
        );
      case "new":
        return (
          <MainIconCont className="flex flex-col mr-1 pr-2">
            <NewIconCont className="flex flex-row mr-2">
              <FaPlus className="text-base text-white-main" />
            </NewIconCont>
            <Divider className="flex flex-row my-3 " />
          </MainIconCont>
        );

      default:
        return (
          <MainIconCont className="flex flex-col mr-1 pr-2">
            <DefaultIconCont className="flex flex-row mr-2">
              <FaCheck className="text-base text-white-main" />
            </DefaultIconCont>
            <Divider className="flex flex-row my-3 " />
          </MainIconCont>
        );
    }
  };

  const selectDetails = (props, title, desc) => {
    switch (props) {
      case "success":
        return (
          <DetailCont className="">
            <p className="text-white-light text-sm font-Medium mr-1 w-full">
              {title}
            </p>
            <p className="text-white-dim text-xs  font-Medium mt-1 w-full">12 july,2021</p>
          </DetailCont>
        );

      default:
        return (
          <DetailCont className="">
            <p className="text-white-light text-sm font-Regular mr-1 w-full">
              {title}:
            </p>
            <Desc className="text-white-light text-xs w-full font-Regular mr-1">
              {desc}
            </Desc>
            <p className="text-white-dim text-xs  font-Medium mt-1 w-full">
              12 july,2021
            </p>
          </DetailCont>
        );
    }
  };

  return (
    <>
      <MyComponent className="w-full flex flex-row">
        {selectIcon(props.type)}
        {selectDetails(props.type, props.title, props.desc)}
      </MyComponent>
    </>
  );
};

export default ActivityComponent;

const MyComponent = styled.div`
  //   align-items: center;
`;

const IconCont = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: #579288;
  border-radius: 30px;
`;
const DefaultIconCont = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: #465485;
  border-radius: 30px;
`;
const CrashIconCont = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: #2b50f4;
  border-radius: 30px;
`;

const NewIconCont = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: #c86362;
  border-radius: 30px;
`;

const Divider = styled.div`
  width: 1px;
  height: 23px;
  background-color: #3c3f58;
  align-self: center;
`;

const DetailCont = styled.div`
  align-items: center;
  width: 90%;
`;

const Desc = styled.p`
  color: #579288;
`;

const MainIconCont = styled.div``;
