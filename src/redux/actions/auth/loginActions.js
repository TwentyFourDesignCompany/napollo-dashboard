import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_LOGOUT,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  STAY_LOGGED_IN,
  STAY_LOGGED_OUT,
} from "../../constants/index";

import axiosInstance from "../../../utils/axios";
import { saveToStorage } from "../../../utils/localStorage";
import base64 from "base-64";
import axios from "axios";

export const login = (emailAddress, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const {
      stayLoggedIn: { loggedIn },
    } = getState();
    // console.log(getState())
    // const token = base64.encode(`${emailAddress}:${password}`);
    // const token = encodeURIComponent(`${emailAddress}:${password}`);
    const token = base64.encode(`${emailAddress}:${password}`);
    // base64.encode(`${emailAddress}:${password}`);
    const { data } = await axiosInstance.post(`/token`, null, {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data.data,
    });
    // console.log(data.data.accessToken, 'LOGIN TOKEN');
    // if (loggedIn === true) {
    //   saveToStorage("adminToken", data.data.accessToken);
    // } else {
    //   return null;
    // }
    // saveDataToStorage('token', data.data.token);
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.description
          ? error.response.data.description
          : error.message,
    });
  }
};
export const stay_Logged_In = () => {
  return {
    type: STAY_LOGGED_IN,
  };
};
export const stay_Logged_Out = () => {
  return {
    type: STAY_LOGGED_OUT,
  };
};
