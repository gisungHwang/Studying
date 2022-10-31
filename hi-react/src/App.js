import React from "react";
import ReactDOM from "react-dom";
import "swiper/css/bundle";
import Swiperss from "./Swiperss";
import "./App.css";

const App = () => {
  var divisor = document.getElementById("divisor"),
    slider = document.getElementById("slider");
  function moveDivisor() {
    divisor.style.width = slider.value + "%";
  }

  return;
};

export default App;
