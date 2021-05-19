import React from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import Multipleslider from "../../Components/Multipleslider/Multipleslider";
import trendingImage1 from "../../Assets/Images/trendingProducts/Image1.jpeg";
import trendingImage2 from "../../Assets/Images/trendingProducts/Image2.jpeg";
import trendingImage3 from "../../Assets/Images/trendingProducts/Image3.jpeg";
import trendingImage4 from "../../Assets/Images/trendingProducts/Image4.jpeg";
import homeVideo from "../../Assets/Videos/homeVideo.mp4";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="multipleslider">
        <Multipleslider />
      </div>
      <hr style={{ marginTop: "2rem" }} />
      <div className="shopbygender">
        <h1>Shop By Gender</h1>
        <div className="shopbygender-flex">
          <div className="shopbygender-grid">
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img src="https://images.pexels.com/photos/2865977/pexels-photo-2865977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <div className="gendercardbody">
                  <p>MEN</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div className="gendercardbody">
                  <p>WOMEN</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img src="https://images.pexels.com/photos/1249306/pexels-photo-1249306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <div className="gendercardbody">
                  <p>KIDS</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img src="https://images.pexels.com/photos/6462365/pexels-photo-6462365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <div className="gendercardbody">
                  <p>PAIR</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="trendingProducts">
        <h1>Trending Products</h1>
        <div className="trendingProducts-grid">
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage1} />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt -73.59 gms</span>
            </div>
          </div>
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage2} />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt - 106.550 gms</span>
            </div>
          </div>
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage3} />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt - 78.680 gms</span>
            </div>
          </div>
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage4} />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt - 106.550 gms</span>
            </div>
          </div>
        </div>
        <div className="trendingBtn">
          <PrimaryBtn />
        </div>
      </div>
      <div className="homeVideo">
        <video autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <div style={{ marginTop: "5rem" }}></div>
    </div>
  );
};

export default Home;
