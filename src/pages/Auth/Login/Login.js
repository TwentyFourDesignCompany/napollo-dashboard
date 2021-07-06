import React, { useState, useEffect } from "react";
import "./Login.css";
import VerifyImage from "../../../assets/images/verify.png";
import CustomText from "../../../component/GradientText/CustomText";
// import {} from "react-icons/fa";
import CustomInput from "../../../component/Input/InputWithIcon/CustomInput";
import UserImage from "../../../assets/images/user.svg";
import Padlock from "../../../assets/images/padlock.svg";
import CustomBtn from "../../../component/Button/GradientBtn/CustomBtn";
import CustomCheckBox from "../../../component/CheckBox/CustomCheckBox";
import LoadingAnime from "../../../component/Animations/LoadingAnimation/LoadingAnime";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  stay_Logged_In,
  stay_Logged_Out,
} from "../../../redux/actions/auth/loginActions";
import { loadFromStorage } from "../../../utils/localStorage";
import ToastContainer from "../../../component/Toasts/index";
import { toast } from "react-toastify";
import { CLEAR_ADMIN_ERROR } from "../../../redux/constants";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const stayLoggedIn = useSelector((state) => state.stayLoggedIn);
  const { loggedIn } = stayLoggedIn;
  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error } = adminLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyErr, setEmptyErr] = useState("");

  console.log("EMPTY ERROR", emptyErr);

  // useEffect(() => {
  //   const token = loadFromStorage("adminToken");
  //   if (token && token !== "") {
  //     history.push("/");
  //   } else {
  //     return null;
  //   }
  // }, []);

  const toggleSaveLogin = () => {
    if (loggedIn === false) {
      dispatch(stay_Logged_In());
    } else {
      dispatch(stay_Logged_Out());
    }
  };
  const Errortoasts = (error) =>
    toast.error(<ToastContainer title={error} error />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const Errortoasts2 = (error) =>
    toast.error(<ToastContainer title={error} error />, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    dispatch({ type: CLEAR_ADMIN_ERROR });
    if (error && error !== "") {
      return Errortoasts(error);
    } else if (emptyErr && emptyErr !== "") {
      return Errortoasts2(emptyErr);
    }
  }, [error, emptyErr]);

  const submitHandler = (e) => {
    // alert("Hello");    
    setEmptyErr("");
    e.preventDefault();
    setEmail("");
    setPassword("");
    if (email !== "" || password !== "") {
      dispatch(login(email, password));
    } else {
      setEmptyErr("Email and password are required");
      setTimeout(() => {
         setEmptyErr("");
      },500)
    }
  };

  return (
    <div className="container fluid w-full h-full bg-primary-bg login-main lg:grid grid-cols-2 gap-5">
      {loading === true && <LoadingAnime />}

      <div className="login1 w-full h-full ">
        <img src={VerifyImage} alt="Verify" className="login-img block" />
      </div>
      <div className="login2  w-full h-full p-10">
        {/* Header */}
        <div className="w-full">
          <CustomText type="h2" className="font-Light text-white-main text-4xl">
            Login to&nbsp;
            <CustomText
              type="span"
              gradient
              className="font-Bold text-white-main text-4xl"
            >
              Napollo
            </CustomText>
          </CustomText>
        </div>
        {/* FORMS */}
        <div className="w-full">
          <form
            className="block w-full mt-24 lg:pr-20"
            onSubmit={submitHandler}
          >
            <CustomInput
              className="mb-14"
              placeholder="Username"
              image={UserImage}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              image={Padlock}
              showEyeIcon
              password
            />
            <CustomText
              type="p"
              className="text-secondary-light text-xs text-right mt-2 cursor-pointer"
            >
              Forgot Password
            </CustomText>
            <CustomBtn
              // type="submit"
              // onClick={submitHandler}
              className="font-Regular login-btn  mt-24 animate-bounce"
            >
              Login
            </CustomBtn>
          </form>
          <CustomCheckBox
            className="mt-10"
            check={loggedIn}
            checked={toggleSaveLogin}
          >
            Keep me logged in
          </CustomCheckBox>
        </div>
      </div>
    </div>
  );
};

export default Login;
