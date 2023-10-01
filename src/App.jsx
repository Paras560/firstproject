import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SaleSite from "./Pages/SaleSite";
import Cart from "./Pages/Cart";

export const MyContext = createContext();

function App() {
  const [number, setNumber] = useState(0);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ number, setNumber }}>
        <Routes>
          <Route path="/sale_site" element={<SaleSite />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route element={<Privateroute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<>Page not found</>} /> */
}
