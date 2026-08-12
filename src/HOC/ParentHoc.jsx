// HOC(higher order component) takes other comp as parameter and returns new component
import React from "react";

const ParentHoc = (Callbackfunction) => {
  // return new component
  return function NewFunc(props) {
    return (
      <div>
        <Callbackfunction {...props} />
      </div>
    );
  };
};

export default ParentHoc;
