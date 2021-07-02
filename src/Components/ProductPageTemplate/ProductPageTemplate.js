import React, { useState } from "react";
import "./ProductPageTemplate.css";
import Filter from "../Filter/Filter";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import SortBy from "../SortBy/SortBy";

const ProductPageTemplate = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <div className="sortBySection">
        <div className="filterShow">
          {showFilter ? (
            <FaArrowAltCircleLeft
              size={25}
              onClick={() => setShowFilter(!showFilter)}
            />
          ) : (
            <FaArrowAltCircleRight
              size={25}
              onClick={() => setShowFilter(!showFilter)}
            />
          )}
        </div>
        <div></div>
        <div className="sortElement">
          <h2>Sort By:</h2>
          <SortBy />
        </div>
      </div>
      <div className="pendantPage">
        <div
          className="filterSection"
          style={showFilter ? { left: "0" } : { left: "-50rem" }}
        >
          <Filter />
        </div>
        <div className="allProducts">{props.children}</div>
      </div>
    </>
  );
};

export default ProductPageTemplate;
