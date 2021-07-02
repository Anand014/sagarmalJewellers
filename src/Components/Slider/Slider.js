import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "./Slider.css";
import image1 from "../../Assets/Images/sliderImage/image1.jpg";
import image2 from "../../Assets/Images/sliderImage/image2.jpg";
import image3 from "../../Assets/Images/sliderImage/image3.jpg";
import image4 from "../../Assets/Images/sliderImage/image4.jpg";
import image5 from "../../Assets/Images/sliderImage/image5.jpg";

const HeroSliderConfigs = {
  spaceBetween: 30,
  loop: true,
  effect: "slide",
  autoplay: {
    delay: 2500,
  },
  lazy: true,
};

const Slider = () => {
  return (
    <Swiper {...HeroSliderConfigs}>
      <div className="hero-slide">
        <img src={image1} alt="image1" className="swiper-lazy" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div className="hero-slide">
        <img src={image2} alt="image2" className="swiper-lazy" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div className="hero-slide">
        <img src={image3} alt="image3" className="swiper-lazy" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div className="hero-slide">
        <img src={image4} alt="image4" className="swiper-lazy" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
      <div className="hero-slide">
        <img src={image5} alt="image5" className="swiper-lazy" />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      </div>
    </Swiper>
  );
};

export default Slider;
