import React from "react";
import "./Multipleslider.css";
import PENDANTS from "../../Assets/Images/multiplesliderImage/Pendant.jpg";
import goldCoins from "../../Assets/Images/multiplesliderImage/goldCoins.jpg";
import earrings from "../../Assets/Images/multiplesliderImage/earrings.jpg";
import fingerRing from "../../Assets/Images/multiplesliderImage/fingerRing.jpg";
import Bangles from "../../Assets/Images/multiplesliderImage/Bangles.jpg";
import giftCard from "../../Assets/Images/multiplesliderImage/giftCard.jpg";
import chains from "../../Assets/Images/multiplesliderImage/chains.jpg";
import mangalsutra from "../../Assets/Images/multiplesliderImage/mangalsutra.jpeg";
import neckWearset from "../../Assets/Images/multiplesliderImage/neckWearset.jpeg";
import neckwear from "../../Assets/Images/multiplesliderImage/neckwear.jpg";
import nosePin from "../../Assets/Images/multiplesliderImage/nosePin.jpg";
import bracelets from "../../Assets/Images/multiplesliderImage/bracelets.jpg";

import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";

const Multipleslider = () => {
  const params = {
    slidesPerView: 6,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
            <img src={earrings} />
          </div>
          <div className="cardbody">
            <Link to="#">EARRINGS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={fingerRing} />
          </div>
          <div className="cardbody">
            <Link to="#">FINGER RINGS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={Bangles} />
          </div>
          <div className="cardbody">
            <Link to="#">BANGLES</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={giftCard} />
          </div>
          <div className="cardbody">
            <Link to="#">GIFT CARD</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={chains} />
          </div>
          <div className="cardbody">
            <Link to="#">CHAINS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={mangalsutra} />
          </div>
          <div className="cardbody">
            <Link to="#">MANGALSUTRA</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={neckwear} />
          </div>
          <div className="cardbody">
            <Link to="#">NECKWEAR</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={neckWearset} />
          </div>
          <div className="cardbody">
            <Link to="#">NECKWEAR SET</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={nosePin} />
          </div>
          <div className="cardbody">
            <Link to="#">NOSE PINS</Link>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">
            <img src={bracelets} />
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
