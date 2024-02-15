import "./style.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isClicked,setClick] = useState(false);
  const toggleMobileMenu = () => setClick(!isClicked);
  
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.svg" alt="newsblog logo" />
        </div>
        <nav className="desktop desktop-nav">
          <div className="desktop-links">
            <a href="#" style={{ marginLeft: "0px" }}>
              Home
            </a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </div>
        </nav>
        <nav className="mobile">
          <div className="burger">
            <i className="fa-solid fa-bars fa-2x menu" onClick={toggleMobileMenu}></i>
          </div>
        </nav>
      </div>
      <AnimatePresence>
      {isClicked && <MobileMenu clicked = {isClicked} closeMenu={toggleMobileMenu} key="kkk" />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
