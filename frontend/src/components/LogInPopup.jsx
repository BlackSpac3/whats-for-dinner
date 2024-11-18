import { useState } from "react";
import { assets } from "../assets/assets.js";

const LogInPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const inputStyle = "border-[1px] p-[10px] rounded-[4px] border-[#c9c9c9]";
  const linkStyle = "text-primary font-medium cursor-pointer";
  return (
    <div
      id="login-pop-up"
      className="absolute z-20 w-[100%] h-[100%] bg-[#00000090] grid animate-[fadeIn,1.5s]"
    >
      <form
        action=""
        id="login-popup-container"
        className="place-self-center w-[max(23vw,330px)] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] "
      >
        <div
          id="login-popup-title"
          className="flex justify-between items-center text-black "
        >
          <h2 className="font-bold text-[30px]">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div id="login-popup-input" className="flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className={inputStyle}
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            className={inputStyle}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className={inputStyle}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="p-[10px] rounded-[4px] text-white text-[15px] bg-primary cursor-pointer">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div
          id="login-popup-condition"
          className="flex items-start gap-[8px] mt-[-15px]"
        >
          <input type="checkbox" required className="mt-[5px] accent-primary" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <div className="flex w-[100%] justify-center">
          {currState === "Login" ? (
            <p className="">
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className={linkStyle}
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")} className={linkStyle}>
                Login
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default LogInPopup;
