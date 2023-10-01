import React, { useContext, useRef, useState } from "react";
import Cart from "./Cart";
import { MyContext } from "../App";
import { useNavigate } from "react-router";
import Slider from "react-slick";

function SaleSite() {
  const navigate = useNavigate();
  const { number, setNumber } = useContext(MyContext);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  var settings = {
    dots: true,
  };
  //aaaaa

  const ref = useRef();

  console.log(ref);

  return (
    <div className="h-[100vh] w-[100vw] bg-green-100 flex flex-col  justify-center items-center">
      {/* <div className="h-40 w-32 ">
        <img
          src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
          className="h-full w-full"
        ></img>
      </div>
      <>burger</>
      <div className="flex justify-between cursor-pointer w-32 ">
        <div onClick={increment}>+</div>
        <div>{number}</div>
        <div onClick={decrement}>-</div>
      </div>
      <div onClick={() => navigate("/cart")}>Add To cart</div> */}

      <Slider ref={ref} {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div className="w-40 h-40 bg-black">
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div className="w-40 h-40 bg-black">
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div className="w-40 h-40 bg-black">
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>

      <div onClick={() => ref.current.slickNext()}>next</div>
      <div>Prev</div>
    </div>
  );
}

export default SaleSite;
