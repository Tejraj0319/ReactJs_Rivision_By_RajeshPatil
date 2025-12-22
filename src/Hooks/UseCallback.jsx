import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");


  // ✅ With useCallback (same function reference reused unless deps change)
  const incrementWith = useCallback(() => {
    console.log("Incrementing (WITH useCallback)...");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useCallback Example</h1>
      <h2>Count: {count}</h2>

      {/* Buttons */}
      <button onClick={incrementWith}>Increment (With useCallback)</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br />
      <br />

      {/* Just to trigger re-renders */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default UseCallback;
