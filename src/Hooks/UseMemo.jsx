import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  (function () {
    console.log("Page is re-rendering!!!");
  })();

  const triple = useMemo(() => {
    console.log("Triple with useMemo......");
    return count * 3;
  }, [count]);

  return (
    <div>
      <h2>{text}</h2>
      <h2>{triple}</h2>

      <input
        type="text"
        placeholder="Enter Text..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default UseMemo;
