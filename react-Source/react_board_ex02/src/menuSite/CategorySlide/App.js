import React from "react";
import Category from "./Category";
import Home from "./Pages/Home";
import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";

const App = () => {
  return (
    <SlideRoutes duration={1000}>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
    </SlideRoutes>
  );
};

export default App;
