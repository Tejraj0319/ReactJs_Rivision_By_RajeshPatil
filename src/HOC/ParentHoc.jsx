// HOC(higher order component) takes other comp as parameter and returns new component
import React from "react";

const ParentHoc = (Callbackfunction) => {
  return function newFunc() {
    return (
      <div>
        <Callbackfunction />
      </div>
    );
  };
};

export default ParentHoc;
