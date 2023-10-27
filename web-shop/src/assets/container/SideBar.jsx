// Bismillah
import "../container/SideBar.css";
import React from "react";
const SideBar = () => {
  return (
    <div className="sideBar_wrapper container">
      <div className="category_wrapper">
        <div className="category">
          <h3>Category</h3>
        </div>
        <div className="items">
          <ul className="category_list">
            <li className="category_item">Mobile accessory</li>
            <li className="category_item">Electronics</li>
            <li className="category_item">Smartphones</li>
            <li className="category_item">Modern Tech</li>
            <li>
              <a href="#">See all</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="brands_wrapper">
        <div className="brands">
          <h3>Brands</h3>
        </div>
        <div className="brands_items">
          <ul className="brands_list">
            <li className="brands_item">
              <input type="checkbox" name="" id="" />
              Samsung
            </li>
            <li className="brands_item">
              <input type="checkbox" name="" id="" />
              Huawei
            </li>
            <li className="brands_item">
              <input type="checkbox" name="" id="" />
              Pocco
            </li>
            <li className="brands_item">
              <input type="checkbox" name="" id="" />
              Lenovo
            </li>
            <li>
              <a href="#">See all</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="brands_wrapper">
        <div className="features">
          <h3>Features</h3>
        </div>
        <div className="features_items">
          <ul className="features_list">
            <li className="features_item">
              <input type="checkbox" name="" id="" />
              Metallic
            </li>
            <li className="features_item">
              <input type="checkbox" name="" id="" />
              Plastic cover
            </li>
            <li className="features_item">
              <input type="checkbox" name="" id="" />
              8GB Ram
            </li>
            <li className="features_item">
              <input type="checkbox" name="" id="" />
              Super power
            </li>
            <li className="features_item">
              <input type="checkbox" name="" id="" />
              Large Memory
            </li>
            <li>
              <a href="#">See all</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
