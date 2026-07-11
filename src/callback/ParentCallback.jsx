import React from "react";
import ChildCallback from "./ChildCallback";

const ParentCallback = () => {
  const getData = (data) => {
    console.log("Data from child: ", data);
  };
  return (
    <div>
      <ChildCallback sendData={getData} />
    </div>
  );
};

export default ParentCallback;
