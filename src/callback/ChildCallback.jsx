import React from "react";

const ChildCallback = ({ sendData }) => {
  return (
    <div>
      <button onClick={() => sendData("THIS IS EXAMPLE OF CALLBACK COMPONENT")}>
        Send
      </button>
    </div>
  );
};

export default ChildCallback;
