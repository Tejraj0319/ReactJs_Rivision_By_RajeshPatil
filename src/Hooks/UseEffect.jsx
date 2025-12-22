import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(100);

  useEffect(() => {
    console.log(`You Have Decremented The Value! ${dec}`);
  }, [dec]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{inc}</h2>
      <button onClick={() => setInc(inc + 1)}>increment</button><br />
      <h2>{dec}</h2>
      <button onClick={() => setDec(dec - 1)}>decrement</button><br /><br />
      <button onClick={() => {setInc(0);setDec(100)}}>reset</button>
    </div>
  );
};

export default UseEffect;
