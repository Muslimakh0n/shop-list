// Bismillah

import React from "react";
import "../components/SideBar.css";
const SideBar = () => {
  return (
    <div className="sideBar_wrapper container">
      <div className="category_wrapper">
        <div className="category">
          <h3>Category</h3>
        </div>
        <div className="items">
          <p>Mobile accessory</p>
          <p>Electronics</p>
          <p>Smartphones</p>
          <p>Modern Tech</p>
          <a href="#">See all</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
