import { motion } from "framer-motion";

import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      id="explore-menu"
      className="flex flex-col gap-[20px] pt-[20px] phone:mx-[20px]"
    >
      <h1 className="text-[#262626] font-medium text-[max(2vw,20px)]">
        Explore our menu
      </h1>
      <p
        id="explore-menu-text"
        className="max-w-[60%] text-[#808080] for-tab:max-w-[100%] for-tab:text-[14px]"
      >
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div
        id="explore-menu-list"
        className="flex min-w-0 justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll"
      >
        {menu_list.map((menu, index) => (
          <div
            id={`explore-menu-list-item-${index}`}
            onClick={() =>
              setCategory((prev) =>
                prev === menu.menu_name ? "all" : menu.menu_name
              )
            }
            key={index}
            className=""
          >
            <img
              src={menu.menu_image}
              alt={menu}
              style={{}}
              className={`${
                category === menu.menu_name
                  ? "border-solid border-4 border-primary "
                  : ""
              }w-[7.5vw] p-[2px] min-w-[80px] cursor-pointer rounded-full delay-[0.2s]`}
            />
            <p className="mt-[10px] text-[#747474] text-[max(1.4vw,14px)]">
              {menu.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};
export default ExploreMenu;
