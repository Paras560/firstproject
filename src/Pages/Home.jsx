import React, { useContext, useEffect, useRef } from "react";
import Login from "./Login";
import { RiFacebookCircleFill, RiMailLine, RiPhoneFill } from "react-icons/ri";
import { RxClock } from "react-icons/rx";
import logo from "./../assets/logo.png";
import Image from "./../assets/image.jpg";
import { UserContext } from "../App";

function Home() {
  const input = useRef();
  const contextValue = useContext(UserContext);

  console.log(contextValue);

  return (
    <div
      style={{
        backgroundColor: contextValue ? "black" : "white",
      }}
      className="h-[200vh]"
      onClick={() => {
        console.log(input.current.value);
      }}
    >
      <input ref={input} />
      <div className="bg-red-600 flex flex-row justify-between pl-10 pr-10 h-8 items-center">
        <div className="flex flex-row gap-8">
          <div className="flex items-center">
            <RiFacebookCircleFill size={20} color="white" />
          </div>
          <div className="flex flex-row items-center text-white gap-3">
            <div>
              <RiMailLine size={20} color="white" />
            </div>
            <div>criptyinnovation@gmail.com</div>
          </div>
          <div className="flex flex-row items-center gap-3 text-white">
            <div>
              <RiPhoneFill size={18} color="white" />
            </div>
            <div>+977-9856062641</div>
          </div>
        </div>
        <div className="flex flex-row items-center text-white gap-3">
          <div>
            <RxClock size={20} color="white" />
          </div>
          <div>Sun - Fri 6:30 A.M- 1:00 P.M</div>
        </div>
      </div>
      <div className="flex flex-row justify-between  h-24 ">
        <div className=" flex h-24 pl-20 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row gap-6 items-center justify-start text-[25px] font-normal text-black text-start ">
          <div>Home</div>
          <div>About Us</div>
          <div>Team</div>
          <div>Gallery</div>
          <div>FAQ</div>
          <div>Contact Us</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div>
            <button className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
              Online Enquiry
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex h-60vh w-fit  justify-center pl-32">
          <div>
            <img src={Image} alt="image" />
          </div>
        </div>
      </div>
      <div className="text-black font-bold text-[25px]  text-center">
        Thank You !
      </div>
    </div>
  );
}

export default Home;
