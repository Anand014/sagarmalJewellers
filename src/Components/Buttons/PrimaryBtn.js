import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const PrimaryBtn = (props) => {
  const { path, bodyName, padding } = props;
  return (
    <div className="primarybtn" style={{ padding: padding }}>
      <Link to={path}>{bodyName}</Link>
    </div>
  );
};

export default PrimaryBtn;
