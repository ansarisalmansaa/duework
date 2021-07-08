import { Link } from "react-router-dom";
import "./HomeButton.css";
import React from "react";

const HomeB = () => (
  <div className="homeButton">
    <Link to="/" id="hButton">Home</Link>
  </div>
);

export default HomeB;
