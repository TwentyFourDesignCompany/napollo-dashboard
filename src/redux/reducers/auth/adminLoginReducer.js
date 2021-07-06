import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_LOGOUT,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  STAY_LOGGED_IN,
  STAY_LOGGED_OUT,
  CLEAR_ADMIN_ERROR,
} from "../../constants/index";

export const adminLoginReducer = (
  state = { accessToken: "", error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        accessToken: "",
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload,
        error: "",
        loading: false,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        error: payload,
        accessToken: "",
        loading: false,
      };
    case CLEAR_ADMIN_ERROR:
      return {
        ...state,
        error: "",
        loading: false,
      };

    default:
      return state;
  }
};

export const stayLoggedInReducer = (state = { loggedIn: false }, { type }) => {
  switch (type) {
    case STAY_LOGGED_IN:
      return {
        loggedIn: true,
      };

    case STAY_LOGGED_OUT:
      return {
        loggedIn: false,
      };

    default:
      return state;
  }
};
