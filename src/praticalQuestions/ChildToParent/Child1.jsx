import React from "react";

const Child1 = ({ userName }) => {
  return (
    <div>
      <button onClick={() => {userName("You can pass data from child to parent using useCallback!");}}> Send Name</button>
    </div>
  );
};

export default Child1;
