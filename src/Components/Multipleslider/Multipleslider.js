import React from "react";
import "./Multipleslider.css";
import PENDANTS from "../../Assets/Images/multiplesliderImage/Pendant.jpg";
import goldCoins from "../../Assets/Images/multiplesliderImage/goldCoins.jpg";

import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";

const Multipleslider = () => {
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
    <div>
      <Swiper {...params}>
        <div className="card">
          <div className="cardhead">
            <img src={PENDANTS} />
          </div>
          <div className="cardbody">
            <Link to="#">PENDANTS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={goldCoins} />
          </div>
          <div className="cardbody">
            <Link to="#">GOLD COINS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">EARRINGS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">FINGER RINGS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">BANGLES</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">GIFT CARD</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">CHAINS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">MANGALSUTRA</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">NECKWEAR</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">NECKWEAR SET</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">NOSE PINS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="cardbody">
            <Link to="#">BRACELETS</Link>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Multipleslider;
