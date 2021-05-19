import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SagarmalLogo from "../../Assets/Images/sagarmallogo.png";
import SagarmalLogoMin from "../../Assets/Images/sagarmallogomin.png";
import { GrLocation } from "react-icons/gr";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [pageDown, setPageDown] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  useEffect(() => {
    if (offset >= 200) {
      setPageDown(true);
    }
    if (offset < 200) {
      setPageDown(false);
    }
  });
  console.log(offset);
  console.log(pageDown);

  return (
    <div className="navBar">
      <div
        className="navFirst"
        style={
          !pageDown
            ? {
                opacity: "1",
                transform: "scale(1)",
                transition: "1s",
                visibility: "visible",
                height: "auto",
              }
            : {
                opacity: "0",
                transform: "scale(0)",
                transition: "1s",
                visibility: "hidden",
                height: "0",
              }
        }
      >
        <div className="navTitle">
          <div className="navRate">
            <a>GOLD RATE</a>
            <div>
              <GrLocation style={{ marginRight: "5px" }} />
              <a>BOUTIQUE LOCATOR</a>
            </div>
          </div>
          <div className="navSocial">
            <div className="navNumber">
              <div>
                <HiOutlineDeviceMobile style={{ marginRight: "5px" }} />
                <a>1234567890</a>
              </div>
              <div>
                <FaWhatsapp style={{ marginRight: "5px" }} />
                <a>1234567890</a>
              </div>
            </div>
            <div className="socialMedia">
              <FiInstagram size={15} />
              <FaFacebook size={15} />
              <AiFillYoutube size={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="navSecond">
        <div className="navLinks">
          <img
            className={!pageDown ? "logomin out" : "logomin active"}
            src={SagarmalLogoMin}
            style={{ marginTop: "1.5rem" }}
          />
          <a>PENDANTS</a>
          <a>BRACELETS</a>
          <a>WATCHES</a>
          <a>RINGS</a>
          <img
            className={pageDown ? "logo out" : "logo active"}
            src={SagarmalLogo}
          />
          <a>EARRINGS</a>
          <a>ACCESSORIES</a>
          <a>CUSTOM PIECES</a>
          <a>CHAINS</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
