import React from "react";
import fingerring from "../../../Assets/Images/multiplesliderImage/fingerRing.jpg";
import Productcard from "../../../Components/ProductCard/Productcard";
import ProductPageTemplate from "../../../Components/ProductPageTemplate/ProductPageTemplate";

const Rings = () => {
  return (
    <ProductPageTemplate>
      <Productcard image={fingerring} price="₹ 20,000.00" />
      <Productcard image={fingerring} price="₹ 20,000.00" />
      <Productcard image={fingerring} price="₹ 20,000.00" />
      <Productcard image={fingerring} price="₹ 20,000.00" />
      <Productcard image={fingerring} price="₹ 20,000.00" />
      <Productcard image={fingerring} price="₹ 20,000.00" />
    </ProductPageTemplate>
  );
};

export default Rings;
