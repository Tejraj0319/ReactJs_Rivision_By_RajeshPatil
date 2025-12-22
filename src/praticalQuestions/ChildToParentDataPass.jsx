import React from "react";
import Child1 from "./Child1";

const ChildToParentDataPass = () => {
  function userName(str) {
    console.log(str);
  }
  return (
    <div>
      <Child1 userName={userName} />
    </div>
  );
};

export default ChildToParentDataPass;
