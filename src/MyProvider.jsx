import React, { useState } from "react";

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState(initialState);

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};
