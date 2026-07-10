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
