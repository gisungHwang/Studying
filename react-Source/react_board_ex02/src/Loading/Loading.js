import React from "react";
// import { Background, LoadingText } from "./Styles";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import loadingIcon from "./loading.svg";
import "./Loading.css";
import "./Bee.css";

export const Loading = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/login");
  }, 4000);

  return (
    <div className="loadingform">
      <div></div>
      <div class="wrap">
        <div class="wrap2">
          <div class="body"></div>
          <div class="wing1"></div>
          <div class="wing2"></div>
          <div class="stinger"></div>
          <div class="hat"></div>
          <div class="eyes">
            <div class="pupil"></div>
          </div>
        </div>
        <div class="cloud1"></div>
        <div class="cloud2"></div>
        <div class="cloud3"></div>

        <div class="debri1"></div>
        <div class="debri2"></div>
        <div class="debri3"></div>
        <div class="debri4"></div>
        <div class="debri5"></div>
        <div class="debri6"></div>
      </div>
    </div>
  );
};

export default Loading;
