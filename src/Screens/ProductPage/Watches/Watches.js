import React from "react";
import watchimage from "../../../Assets/Images/topSelling/watch.jpg";
import Productcard from "../../../Components/ProductCard/Productcard";
import ProductPageTemplate from "../../../Components/ProductPageTemplate/ProductPageTemplate";

const Watches = () => {
  return (
    <ProductPageTemplate>
      <Productcard image={watchimage} price="₹ 20,000.00" />
      <Productcard image={watchimage} price="₹ 20,000.00" />
      <Productcard image={watchimage} price="₹ 20,000.00" />
      <Productcard image={watchimage} price="₹ 20,000.00" />
      <Productcard image={watchimage} price="₹ 20,000.00" />
      <Productcard image={watchimage} price="₹ 20,000.00" />
    </ProductPageTemplate>
  );
};

export default Watches;
