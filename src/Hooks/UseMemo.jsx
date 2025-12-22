import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   WITHOUT USEMEMO :-
  // const doubleCount = (() => {
  //   console.log("Calculating double (no useMemo)...");
  //   return count * 2;
  // })();

  //  WITH USEMEMO :-
  const doubleCount = useMemo(() => {
    console.log("Calculating double...");
    return count * 3;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Double: {doubleCount}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br />
      <br />
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

export default UseMemo;
