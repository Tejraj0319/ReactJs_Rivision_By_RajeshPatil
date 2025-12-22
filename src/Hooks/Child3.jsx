import React, { useContext } from "react";
import {UserContext} from "./UseContext";

const Child3 = () => {
 const [user, age] = useContext(UserContext);
  return <h1>My name is "{user}"  and I am {age} years old</h1>;
};

export default Child3;
