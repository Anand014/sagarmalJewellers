import React from "react";
import "./SortBy.css";
import Select from "react-select";

const SortBy = () => {
  const options = [
    { value: "", label: "None" },
    { value: "Price_high", label: "Price Low" },
    { value: "Price_low", label: "Price High" },
    { value: "New_arrivals", label: "New Arrivals" },
  ];

  return (
    <div className="SortBy">
      <Select options={options} />
    </div>
  );
};

export default SortBy;
