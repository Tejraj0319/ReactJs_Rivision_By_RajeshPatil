import React, { useCallback, useState } from "react";

const UseCallbackWithout = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const incrementWith = useCallback(()=>{
    console.log("Incrementing (WITH useCallback)...");
    setCount(count + 1)
  },[])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Without useCallback</h1>
      <h2>Count: {count}</h2>

      <button onClick={incrementWith}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br /><br />

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

export default UseCallbackWithout;
