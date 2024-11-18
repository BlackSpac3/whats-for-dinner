import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]"
    >
      <div
        id="footer-content"
        className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px] for-tab-s:flex for-tab-s:flex-col for-tab-s:gap-[35px] "
      >
        <div
          id="footer-content-left"
          className="flex flex-col items-start gap-[20px]"
        >
          <img src={assets.logo} alt="" className="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi
            quas quia quisquam dignissimos, nemo totam adipisci obcaecati sint
            suscipit deleniti enim fugit aliquid illum quaerat vero sed sapiente
            eum!
          </p>
          <div id="footer-social-icons" className="flex">
            <img
              src={assets.facebook_icon}
              alt="facebook"
              className="w-[40px] mr-[15px]"
            />
            <img
              src={assets.twitter_icon}
              alt="twitter"
              className="w-[40px] mr-[15px]"
            />
            <img
              src={assets.linkedin_icon}
              alt="linkedIn"
              className="w-[40px] mr-[15px]"
            />
          </div>
        </div>
        <div
          id="footer-content-center"
          className="flex flex-col items-start gap-[20px]"
        >
          <h2 className="text-white font-semibold">COMPANY</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About Us</li>
            <li className="mb-[10px] cursor-pointer">Deliovery</li>
            <li className="mb-[10px] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div
          id="footer-content-right"
          className="flex flex-col items-start gap-[20px]"
        >
          <h2 className="text-white font-semibold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">+234-904-031-9206</li>
            <li className="mb-[10px] cursor-pointer">
              contact@whatsfordinner.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] mt-[20px] bg-[#808080] border-none" />
      <p id="footer-copyright" className="for-tab-s:text-center">
        Copyright 2024 © Whatsfordinner.com - All Right Reserved.
      </p>
    </div>
  );
};
export default Footer;
