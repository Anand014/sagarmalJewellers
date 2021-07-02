import React, { useState } from "react";
import Slider from "rc-slider";
import "./Filter.css";
import "rc-slider/assets/index.css";
import { GrFormAdd } from "react-icons/gr";

const { Range } = Slider;

const Filter = () => {
  const [filter, setFilter] = useState({
    value: [1, 100],
  });
  const [showPrice, setShowPrice] = useState(true);
  const [showCheckbox, setShowCheckbox] = useState(false);

  const onSliderChange = (value) => {
    setFilter({
      value,
    });
  };

  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="filterSlider">
        <div className="filterLabel" onClick={() => setShowPrice(!showPrice)}>
          <h4>Price</h4>
          <GrFormAdd size={25} />
        </div>
        {showPrice && (
          <>
            <div className="filterSliderValue">
              <i>₹ {filter.value[0]} k</i>
              <i>₹ {filter.value[1]} k</i>
            </div>
            <Range
              allowCross={false}
              value={filter.value}
              onChange={onSliderChange}
            />
          </>
        )}
      </div>
      <div className="Filterdropdown">
        <div
          className="filterLabel"
          onClick={() => setShowCheckbox(!showCheckbox)}
        >
          <h4>Purity</h4>
          <GrFormAdd size={25} />
        </div>
        {showCheckbox && (
          <div className="filterCheckbox">
            <div className="filterFlexbox">
              <label>14.00</label>
              <input type="checkbox" />
            </div>
            <div className="filterFlexbox">
              <label>18.00</label>
              <input type="checkbox" />
            </div>
            <div className="filterFlexbox">
              <label>22.00</label>
              <input type="checkbox" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
