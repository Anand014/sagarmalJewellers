import React from "react";
import "./Productcard.css";

const Productcard = (props) => {
  return (
    <div className="productCard">
      <div className="productCardHead">
        <img src={props.image} />
      </div>
      <div className="productCardbody">
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Productcard;
