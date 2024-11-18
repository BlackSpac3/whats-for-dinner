import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="m-auto mt-[100px] text-[3vw] text-center font-medium items-center"
    >
      <p className="text-[max(3vw,16px)]">
        For Better Experience Download
        <br />
        Tomato App
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-[40px] max-w-[100%]">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={assets.play_store}
          className="w-[max(20vw,120px)] max-w-l[120px] cursor-pointer duration-0.5 "
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={assets.app_store}
          className="w-[max(20vw,120px)] max-w-l[120px] cursor-pointer duration-0.5"
          alt=""
        />
      </div>
    </div>
  );
};
export default AppDownload;
