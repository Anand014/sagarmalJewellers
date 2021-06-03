import React from "react";
import "./Topselling.css";
import Swiper from "react-id-swiper";
import earrings from "../../Assets/Images/topSelling/earrings.jpg";
import pendant from "../../Assets/Images/topSelling/pendant.jpg";
import necklaceSet from "../../Assets/Images/topSelling/necklaceSet.jpg";
import bangles from "../../Assets/Images/topSelling/bangles.jpg";
import earrings2 from "../../Assets/Images/topSelling/earrings2.jpg";

const Topselling = () => {
  const params = {
    slidesPerView: 6,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // loop: true,
    effect: "slide",
    breakpoints: {
      1400: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className="topselling">
      <Swiper {...params}>
        <div className="topsellingcard">
          <img src={earrings} />
          <p>₹ Price</p>
        </div>
        <div className="topsellingcard">
          <img src={pendant} />
          <p>₹ Price</p>
        </div>
        <div className="topsellingcard">
          <img src={bangles} />
          <p>₹ Price</p>
        </div>
        <div className="topsellingcard">
          <img src={earrings2} />
          <p>₹ Price</p>
        </div>
        <div className="topsellingcard">
          <img src={necklaceSet} />
          <p>₹ Price</p>
        </div>
        <div className="topsellingcard">
          <img src={earrings} />
          <p>₹ Price</p>
        </div>
        <div className="topsellingcard">
          <img src={bangles} />
          <p>₹ Price</p>
        </div>
      </Swiper>
    </div>
  );
};

export default Topselling;