import React, { useState } from "react";
import "./Pendants.css";
import Pendentimage from "../../../Assets/Images/multiplesliderImage/Pendant.jpg";
import Productcard from "../../../Components/ProductCard/Productcard";
import ProductPageTemplate from "../../../Components/ProductPageTemplate/ProductPageTemplate";

const Pendants = () => {
  return (
    <ProductPageTemplate>
      <Productcard image={Pendentimage} price="₹ 20,000.00" />
      <Productcard image={Pendentimage} price="₹ 20,000.00" />
      <Productcard image={Pendentimage} price="₹ 20,000.00" />
      <Productcard image={Pendentimage} price="₹ 20,000.00" />
      <Productcard image={Pendentimage} price="₹ 20,000.00" />
      <Productcard image={Pendentimage} price="₹ 20,000.00" />
    </ProductPageTemplate>
  );
};

export default Pendants;
