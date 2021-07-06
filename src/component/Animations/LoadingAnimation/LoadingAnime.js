import React from "react";
import Image from "../../../assets/animations/laoding.gif";
import "./LoadingAnime.css";

const LoadingAnime = (props) => {
  return (
    <div className="loadingAnime">
      <img src={Image} className="w-20 h-20  block" />
    </div>
  );
};

export default LoadingAnime;
