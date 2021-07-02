import React from "react";
import ear from "../../../Assets/Images/multiplesliderImage/earrings.jpg";
import Productcard from "../../../Components/ProductCard/Productcard";
import ProductPageTemplate from "../../../Components/ProductPageTemplate/ProductPageTemplate";

const Earrings = () => {
  return (
    <ProductPageTemplate>
      <Productcard image={ear} price="₹ 20,000.00" />
      <Productcard image={ear} price="₹ 20,000.00" />
      <Productcard image={ear} price="₹ 20,000.00" />
      <Productcard image={ear} price="₹ 20,000.00" />
      <Productcard image={ear} price="₹ 20,000.00" />
      <Productcard image={ear} price="₹ 20,000.00" />
    </ProductPageTemplate>
  );
};

export default Earrings;
