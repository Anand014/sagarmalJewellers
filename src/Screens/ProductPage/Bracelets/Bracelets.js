import React from "react";
import bracelets from "../../../Assets/Images/multiplesliderImage/bracelets.jpg";
import Productcard from "../../../Components/ProductCard/Productcard";
import ProductPageTemplate from "../../../Components/ProductPageTemplate/ProductPageTemplate";

const Bracelets = () => {
  return (
    <ProductPageTemplate>
      <Productcard image={bracelets} price="₹ 20,000.00" />
      <Productcard image={bracelets} price="₹ 20,000.00" />
      <Productcard image={bracelets} price="₹ 20,000.00" />
      <Productcard image={bracelets} price="₹ 20,000.00" />
      <Productcard image={bracelets} price="₹ 20,000.00" />
      <Productcard image={bracelets} price="₹ 20,000.00" />
    </ProductPageTemplate>
  );
};

export default Bracelets;
