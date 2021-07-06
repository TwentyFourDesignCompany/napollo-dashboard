import { combineReducers } from "redux";
import {
  adminLoginReducer,
  stayLoggedInReducer,
} from "./reducers/auth/adminLoginReducer";

const rootReducer = combineReducers({
  adminLogin: adminLoginReducer,
  stayLoggedIn: stayLoggedInReducer,
});

export default rootReducer;
