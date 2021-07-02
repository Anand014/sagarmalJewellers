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
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const [pageDown, setPageDown] = useState(false);
  const [hamburgerShow, setHamburgerShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    hamburgerShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  });

  useEffect(() => {
    if (offset >= 200) {
      setPageDown(true);
    }
    if (offset < 200) {
      setPageDown(false);
    }
  });

  const routeToHome = () => {
    history.push("/");
  };

  const animateMobileList = {
    hidden: { y: -1000, transition: { duration: 1 } },
    show: { y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <nav className="navBar">
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
              <Link>
                {" "}
                <GrLocation /> STORE LOCATOR
              </Link>
              <Link to="/login">LOGIN</Link>
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
              onClick={routeToHome}
            />
            <Link to="/pendants">PENDANTS</Link>
            <Link to="/bracelets">BRACELETS</Link>
            <Link to="/watches">WATCHES</Link>
            <Link to="/rings">RINGS</Link>
            <img
              className={pageDown ? "logo out" : "logo active"}
              src={SagarmalLogo}
              onClick={routeToHome}
            />
            <Link to="/earrings">EARRINGS</Link>
            <a>ACCESSORIES</a>
            <a>CUSTOM PIECES</a>
            <Link to="/chains">CHAINS</Link>
          </div>
        </div>
        <div className="navMobile">
          <div className="navMobileRate">
            <a>GOLD RATE</a>
          </div>
          <div className="navMobileLinks">
            <img
              className="logoMobile"
              src={SagarmalLogo}
              onClick={routeToHome}
            />
            <div className="navMobileElements">
              <Link to="/login">LOGIN</Link>
              <Link>REGISTER</Link>
              <GiHamburgerMenu
                size={40}
                onClick={() => setHamburgerShow(!hamburgerShow)}
                style={
                  hamburgerShow ? { display: "none" } : { display: "block" }
                }
              />
              <AiOutlineClose
                size={40}
                onClick={() => setHamburgerShow(!hamburgerShow)}
                style={
                  !hamburgerShow ? { display: "none" } : { display: "block" }
                }
              />
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        className="navMobileList"
        variants={animateMobileList}
        initial="hidden"
        animate={hamburgerShow ? "show" : "hidden"}
      >
        <div className="navMobileListLink">
          <div className="navMobileCategories">
            <Link
              to="/pendants"
              onClick={() => setHamburgerShow(!hamburgerShow)}
            >
              PENDANTS
            </Link>
            <Link
              to="/bracelets"
              onClick={() => setHamburgerShow(!hamburgerShow)}
            >
              BRACELETS
            </Link>
            <Link
              to="/watches"
              onClick={() => setHamburgerShow(!hamburgerShow)}
            >
              WATCHES
            </Link>
            <Link to="/rings" onClick={() => setHamburgerShow(!hamburgerShow)}>
              RINGS
            </Link>
            <Link
              to="/earrings"
              onClick={() => setHamburgerShow(!hamburgerShow)}
            >
              EARRINGS
            </Link>
            <Link
              to="/accessories"
              onClick={() => setHamburgerShow(!hamburgerShow)}
            >
              ACCESSORIES
            </Link>
            <Link
              to="/custom-pieces"
              onClick={() => setHamburgerShow(!hamburgerShow)}
            >
              CUSTOM PIECES
            </Link>
            <Link to="chains" onClick={() => setHamburgerShow(!hamburgerShow)}>
              CHAINS
            </Link>
          </div>
          <div className="navMobileOthers">
            <FiInstagram
              size={30}
              onClick={() => setHamburgerShow(!hamburgerShow)}
            />
            <FaFacebook
              size={30}
              onClick={() => setHamburgerShow(!hamburgerShow)}
            />
            <AiFillYoutube
              size={30}
              onClick={() => setHamburgerShow(!hamburgerShow)}
            />
            <div>
              <HiOutlineDeviceMobile style={{ marginRight: "5px" }} />
              <a>1234567890</a>
            </div>
            <div>
              <FaWhatsapp style={{ marginRight: "5px" }} />
              <a>1234567890</a>
            </div>
            <Link to="#" onClick={() => setHamburgerShow(!hamburgerShow)}>
              {" "}
              <GrLocation /> STORE LOCATOR
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
