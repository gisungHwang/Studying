import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
import "./App.css";

import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("app"));

var divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider");
function moveDivisor() {
  divisor.style.width = slider.value + "%";
}
