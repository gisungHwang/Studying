import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>배달BEE</h1>
      <Link to="/category">카테고리</Link>
    </div>
  );
};

export default Home;
