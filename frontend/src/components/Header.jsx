import { delay, motion } from "framer-motion";

const Header = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.5 * index,
      },
    }),
  };

  return (
    <div
      id="header"
      className="h-[34vw] z-[-1] phone:h-[50vh] my-[30px] phone:mt-0 mx-auto bg-header bg-no-repeat bg-cover relative rounded-[15px] phone:rounded-none"
    >
      <div
        id="header-contents"
        className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] for-tab:max-w-[45%] for-tab-s:max-w-[55%] phone-s:max-w-[80%] bottom-[15%] for-tab-s:bottom-[20%] left-[6vw]  "
      >
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
          className="font-medium text-white text-[max(4.5vw,24px)]/tight phone:text-[40px]"
        >
          Order your <br /> favourite food here
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
          className="text-white text-[1vw] for-tab-s:hidden"
        >
          Choose from a diverse menu featuring a delecate array of dishes
          crafted with the finest ingredients and culnary expertise. Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time
        </motion.p>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6 * 3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="border-none bg-white text-[#747474] text-[1vw] font-medium py-[1vw] px-[2.3vw] rounded-full for-tab-s:text-[1.5vw] phone:hidden"
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
export default Header;
