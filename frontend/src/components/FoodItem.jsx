import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, setCartItems, addToCart, removeFromCart } =
    useContext(StoreContext);
  return (
    <div className="w-[100%] m-auto rounded-[15px] shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-[100%] rounded-[15px] rounded-b-none"
        />
        {!cartItems[id] ? (
          <motion.img
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(id)}
            className="absolute bottom-[15px] right-[15px] w-[35px] cursor-pointer rounded-[50%] "
            src={assets.add_icon_white}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white"
          >
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[25px]"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[25px]"
            />
          </motion.div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex phone:flex-col phone:items-start justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[14px] phone:hidden">{description}</p>
        <p className="font-sans-serif text-primary text-[22px] font-medium my-[10px]">
          ₦{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default FoodItem;
