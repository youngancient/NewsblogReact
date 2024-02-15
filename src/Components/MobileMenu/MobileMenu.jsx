import { PopupVariant, slideVariants } from "../animation";
import "./style.css";
import { motion } from "framer-motion";


const MobileMenu = ({clicked, closeMenu}) => {
  return (
    <motion.div className={`popup mobile`}
    variants={PopupVariant}
      initial="initial"
      animate="final"
      exit= "exit"
    >
      <div className="nothing" onClick={closeMenu}></div>
      <motion.div className={`slidein`}
      variants={slideVariants}
      initial="right"
      animate="final"
      exit= "exit"
      >
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
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
