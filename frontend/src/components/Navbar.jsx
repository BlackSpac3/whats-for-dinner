import { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const links = [
    { name: "menu", id: "explore-menu" },
    { name: "mobile-app", id: "app-download" },
    { name: "contact us", id: "footer" },
  ];

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div
      id="navbar"
      className="py-[20px] phone:px-[20px] flex justify-between items-center"
    >
      <Link to="/">
        <img
          id="logo"
          src={assets.logo}
          alt="logo"
          className="w-[150px] for-tab:w-[120px]"
        />
      </Link>
      <ul
        id="navbar-menu"
        className="flex list-image-none gap-[20px] for-tab:gap[15px] text-[18px] for-tab:text-[17px] text-secondary for-tab-s:hidden"
      >
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""} cursor-pointer`}
        >
          home
        </Link>
        {links.map((link, index) => (
          <a
            href={`#${link.id}`}
            onClick={() => setMenu(link.name)}
            className={`${menu === link.name ? "active" : ""} cursor-pointer`}
          >
            {link.name}
          </a>
        ))}
      </ul>
      <div
        id="navbar-right"
        className="flex items-center gap-[40px] for-tab:gap-[20px]"
      >
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-[max(2vw,25px)] phone-s:hidden"
        />
        <div id="navbar-cart-icon" className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt=""
              className="w-[max(2vw,25px)] phone:w-[30px]"
            />
          </Link>
          <div
            id="dot"
            className={`${getTotalCartAmount() ? "" : "hidden"} absolute min-w-[10px] min-h-[10px] bg-[#ff0000] rounded-full top-[0px] right-[-2px] `}
          ></div>
        </div>
        <motion.button
          onClick={() => setShowLogin(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="text-[16px] for-tab:text-[15px] phone:text-[12px]  text-secondary border-2 border-solid py-[10px] for-tab:py-[7px] px-[30px] phone:px-[15px] phone:py-[3.5px]  for-tab:px-[20px] rounded-full border-current hover:bg-secondary hover:text-white cursor-pointer"
        >
          Sign In
        </motion.button>
      </div>
    </div>
  );
};
export default Navbar;
