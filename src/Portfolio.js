import React from "react";
import "./Styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="header-container">
        <h1 className="header-title">Portfolio</h1>
      </div>
      <div className="category-bts">
        <button className="category-btn">All</button>
        <button className="category-btn">Projects</button>
        <button className="category-btn">Web</button>
        <button className="category-btn">Graphic Design</button>
        <button className="category-btn">Digital Marketing</button>
        <button className="category-btn">Art</button>
      </div>
    </div>
  );
};

export default Portfolio;
