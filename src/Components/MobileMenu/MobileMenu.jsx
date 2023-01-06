import "./style.css";

const MobileMenu = ({clicked, closeMenu}) => {
  return (
    <div className={`popup mobile ${clicked ? `` : 'hide' }`}>
      <div className="nothing" onClick={closeMenu}></div>
      <div className={`slidein ${clicked ? `` : 'left' }`}>
        <div className="cancel">
          <i className="fa-solid fa-xmark fa-2x" onClick={closeMenu}></i>
        </div>
        <div className="mobile-links">
          <a href="#" style={{ marginTop: "0px" }}>
            Home
          </a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
