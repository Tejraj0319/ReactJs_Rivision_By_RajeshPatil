import React, { createContext, useContext } from "react";
import Child3 from "./Child3";

export const UserContext = createContext();

const UseContext = () => {
  const data = "Rajesh";
  const age = 24
  return (
    <div>
      <UserContext.Provider value={[data, age]}>
        <Child3 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;
