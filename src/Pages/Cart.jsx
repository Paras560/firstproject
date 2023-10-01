import React, { useContext } from "react";
import { MyContext } from "../App";

const Cart = () => {
  const { number, setNumber } = useContext(MyContext);

  const minus = () => {
    setNumber((value) => value - 1);
    setNumber(number - 1);
  };

  return (
    <div>
      cart -{number}
      <div onClick={minus}>minus</div>
    </div>
  );
};

export default Cart;
