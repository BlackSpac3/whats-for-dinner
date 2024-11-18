import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";
import { animate, motion } from "framer-motion";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.25,
      },
    },
  };
  return (
    <div className="mt-[30px] phone:mx-[20px]" id="Food-display">
      <h2 className="text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-auto-fill-240 phone:grid-cols-2 mt-[30px] gap-[30px]  gap-y-[50px]">
        {food_list.map((food, index) => {
          if (category === "all" || category === food.category) {
            return (
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <FoodItem
                  key={index}
                  id={food._id}
                  name={food.name}
                  description={food.description}
                  price={food.price}
                  image={food.image}
                />
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default FoodDisplay;
