import React from "react";
import "./Footer.css";
import SagarmalLogoMin from "../../Assets/Images/sagarmallogomin.png";
import SagarmalLogo from "../../Assets/Images/sagarmallogo.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { AiFillApple } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer-one">
        <div className="footerFirstElement">
          {/* <img src={SagarmalLogo} alt="Logo" width={80} /> */}
          <h4>Follow us on</h4>
          <div className="footerFirstElementIcons">
            <FaFacebookSquare size={25} color="#3b5998" />
            <FaTwitterSquare size={25} color="#00acee" />
            <FaLinkedin size={25} color="#0e76a8" />
            <FaInstagramSquare size={25} color="orange" />
            <FaYoutubeSquare size={25} color="red" />
          </div>
        </div>
        <div className="footerAbout">
          <h4>About Sagarmal</h4>
          <p>CAREERS</p>
          <p>FIND STORE</p>
          <p>BLOG</p>
        </div>
        <div className="footerHelp">
          <h4>Services</h4>
          <p>Contact</p>
          <p>DELIVERY INFORMATION</p>
          <p>RETURNS</p>
          <p>OFFERS</p>
        </div>
        <div className="footerSubscribe">
          <h3>Subscribe to receive exclusive offers and news</h3>
          <div className="footerInput">
            <input type="text" placeholder="ENTER YOUR EMAIL" />
            <button className="footerbtn">Subscribe</button>
          </div>
          <div className="footerApp">
            <div className="footerAppLogo">
              <IoLogoGooglePlaystore size={25} />
              <AiFillApple size={25} />
            </div>

            <h4>SAGARMAL APP IS COMING SOON...</h4>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="FsectionOne">
          <p>© 2021 Sagarmal Company Limited. All Rights Reserved.</p>
        </div>
        <div className="FsectionTwo">
          <a>Terms and Conditions</a>
          <a>Private Policy</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
