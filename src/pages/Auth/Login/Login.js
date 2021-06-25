import React, { useState } from "react";
import "./Login.css";
import VerifyImage from "../../../assets/images/verify.png";
import CustomText from "../../../component/GradientText/CustomText";
// import {} from "react-icons/fa";
import CustomInput from "../../../component/Input/InputWithIcon/CustomInput";
import UserImage from "../../../assets/images/user.svg";
import Padlock from "../../../assets/images/padlock.svg";
import CustomBtn from "../../../component/Button/GradientBtn/CustomBtn";
import CustomCheckBox from "../../../component/CheckBox/CustomCheckBox";

const Login = () => {
  const [saveLogin, setSaveLogin] = useState(false);
  const toggleSaveLogin = () => {
    setSaveLogin(!saveLogin);
  };
  return (
    <div className="container fluid w-full h-full bg-primary-bg login-main lg:grid grid-cols-2 gap-5">
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
          <form className="block w-full mt-24 pr-20">
            <CustomInput
              className="mb-14"
              placeholder="Username"
              image={UserImage}
            />
            <CustomInput placeholder="Password" image={Padlock} showEyeIcon />
            <CustomText
              type="p"
              className="text-secondary-light text-xs text-right mt-2 cursor-pointer"
            >
              Forgot Password
            </CustomText>
            <CustomBtn className="font-Regular login-btn  mt-24 animate-bounce">
              Login
            </CustomBtn>
          </form>
          <CustomCheckBox
            className="mt-10"
            check={saveLogin}
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
