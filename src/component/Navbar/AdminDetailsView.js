import React from "react";
import styled from "styled-components";
import NotificationIcon from "../../component/Icons/Notifications";
import MenuDown from "../../component/Icons/Menu-down";

const AdminDetailsView = () => {
  return (
    <MyCustomDiv>
      {window.innerWidth <= 768 ? (
        <></>
      ) : (
        <div className="not-cont mr-14">
          <NotificationIcon className="bg-transparent" />
        </div>
      )}

      <div className="admin bg-transparent w-full">
        <div className="admin-img-cont">
          <p className="admin-thunbnail bg-transparent text-base font-Bold text-white-dim uppercase mr-1">
            A
          </p>
          <p className="admin-thunbnail bg-transparent text-base font-Bold text-white-dim uppercase">
            d
          </p>
        </div>
        <div className="admin-name-details bg-transparent ml-3">
          <h4 className="bg-transparent font-Regular capitalize text-sm text-white-main">
            Loto Mary
          </h4>
          <div className="bg-transparent flex flex-row">
            <h4 className="bg-transparent font-Light capitalize text-xs text-secondary-main mr-2">
              Administrator
            </h4>
            <MenuDown className="bg-transparent text-white-dim" />
          </div>
        </div>
      </div>
    </MyCustomDiv>
  );
};

export default AdminDetailsView;

const MyCustomDiv = styled.div`
  background: #101725;
  width: 100%;
  min-height: 65px !important;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  .not-cont {
    width: 10%;
    min-height: 65px !important;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    background: transparent;
  }
  .admin {
    min-height: 65px !important;
    // justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    background: transparent;
    width: 95%;
    // align-self: flex-end;
    .admin-img-cont {
      background: #444;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
    }
  }
`;
