import React from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import Multipleslider from "../../Components/Multipleslider/Multipleslider";
import trendingImage1 from "../../Assets/Images/trendingProducts/Image1.jpeg";
import trendingImage2 from "../../Assets/Images/trendingProducts/Image2.jpeg";
import trendingImage3 from "../../Assets/Images/trendingProducts/Image3.jpeg";
import trendingImage4 from "../../Assets/Images/trendingProducts/Image4.jpeg";
import homeVideo from "../../Assets/Videos/homeVideo1.mp4";
import SagarmalLogo from "../../Assets/Images/sagarmallogo.png";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import Topselling from "../../Components/Topselling/Topselling";
import PENDANTS from "../../Assets/Images/multiplesliderImage/Pendant.jpg";
import Bangles from "../../Assets/Images/multiplesliderImage/Bangles.jpg";
import fingerRing from "../../Assets/Images/multiplesliderImage/fingerRing.jpg";

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
                  <img
                    src="https://images.pexels.com/photos/2865977/pexels-photo-2865977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="pexelImage"
                    loading="lazy"
                  />
                </div>
                <div className="gendercardbody">
                  <p>MEN</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img
                    src="https://images.pexels.com/photos/2106685/pexels-photo-2106685.jpeg?cs=srgb&dl=pexels-farddin-protik-2106685.jpg&fm=jpg"
                    alt="pexelImage"
                    loading="lazy"
                  />
                </div>
                <div className="gendercardbody">
                  <p>WOMEN</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img
                    src="https://images.pexels.com/photos/1249306/pexels-photo-1249306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="pexelImage"
                    loading="lazy"
                  />
                </div>
                <div className="gendercardbody">
                  <p>KIDS</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="genderCard">
                <div className="gendercardhead">
                  <img
                    src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?cs=srgb&dl=pexels-kumar-saurabh-1456613.jpg&fm=jpg"
                    alt="pexelImage"
                    loading="lazy"
                  />
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
              <img src={trendingImage1} alt="TrendingImage" loading="lazy" />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt -73.59 gms</span>
            </div>
          </div>
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage2} alt="TrendingImage" loading="lazy" />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt - 106.550 gms</span>
            </div>
          </div>
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage3} alt="TrendingImage" loading="lazy" />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt - 78.680 gms</span>
            </div>
          </div>
          <div className="trendingcard">
            <div className="trendinghead">
              <img src={trendingImage4} alt="TrendingImage" loading="lazy" />
            </div>
            <div className="trendingbody">
              <p>Gold necklace set with earings</p>
              <span>Gold wt - 106.550 gms</span>
            </div>
          </div>
        </div>
        <div className="trendingBtn">
          <PrimaryBtn
            path="#"
            bodyName="View all Products"
            padding="1rem 2rem"
          />
        </div>
      </div>
      <div className="homeVideo">
        <video autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" loading="lazy" />
        </video>
        <img src={SagarmalLogo} />
      </div>

      <div className="topSelling">
        <h1>Top Sellings</h1>
        <p>Our most popular products based on sales</p>
        <div className="topsellingCourosel">
          <Topselling />
        </div>
      </div>
      <div className="shopByCategory">
        <h1>Browse by category</h1>
      </div>
      <div className="category">
        <div className="itemname">
          <h3>Bangles</h3>
          <div className="itemCategory">
            <div className="itemImg">
              <img src={Bangles} alt="CategoryImage" loading="lazy" />
            </div>
            <div className="categoryBtn">
              <PrimaryBtn
                path="#"
                bodyName="upto ₹ 10,000"
                padding="1rem 4rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 10,000 to ₹ 25,000"
                padding="1rem 2.25rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 25,000 & above"
                padding="1rem 3.1rem"
              />
            </div>
          </div>
        </div>

        <div className="itemname">
          <h3>Pendants</h3>
          <div className="itemCategory">
            <div className="itemImg">
              <img src={PENDANTS} alt="CategoryImage" loading="lazy" />
            </div>
            <div className="categoryBtn">
              <PrimaryBtn
                path="#"
                bodyName="upto ₹ 10,000"
                padding="1rem 4rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 10,000 to ₹ 25,000"
                padding="1rem 2.25rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 25,000 & above"
                padding="1rem 3.1rem"
              />
            </div>
          </div>
        </div>

        <div className="itemname">
          <h3>Finger ring</h3>
          <div className="itemCategory">
            <div className="itemImg">
              <img src={fingerRing} alt="CategoryImage" loading="lazy" />
            </div>
            <div className="categoryBtn">
              <PrimaryBtn
                path="#"
                bodyName="upto ₹ 10,000"
                padding="1rem 4rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 10,000 to ₹ 25,000"
                padding="1rem 2.25rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 25,000 & above"
                padding="1rem 3.1rem"
              />
            </div>
          </div>
        </div>

        <div className="itemname">
          <h3>Earrings</h3>
          <div className="itemCategory">
            <div className="itemImg">
              <img
                src="https://images.pexels.com/photos/2732096/pexels-photo-2732096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="CategoryImage"
                loading="lazy"
              />
            </div>
            <div className="categoryBtn">
              <PrimaryBtn
                path="#"
                bodyName="upto ₹ 10,000"
                padding="1rem 4rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 10,000 to ₹ 25,000"
                padding="1rem 2.25rem"
              />
              <PrimaryBtn
                path="#"
                bodyName="₹ 25,000 & above"
                padding="1rem 3.1rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
