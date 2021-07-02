import React from "react";
import chain from "../../../Assets/Images/multiplesliderImage/chains.jpg";
import Productcard from "../../../Components/ProductCard/Productcard";
import ProductPageTemplate from "../../../Components/ProductPageTemplate/ProductPageTemplate";

const Chains = () => {
  return (
    <ProductPageTemplate>
      <Productcard image={chain} price="₹ 20,000.00" />
      <Productcard image={chain} price="₹ 20,000.00" />
      <Productcard image={chain} price="₹ 20,000.00" />
      <Productcard image={chain} price="₹ 20,000.00" />
      <Productcard image={chain} price="₹ 20,000.00" />
      <Productcard image={chain} price="₹ 20,000.00" />
    </ProductPageTemplate>
  );
};

export default Chains;
