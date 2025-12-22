import React, { useReducer, useRef } from "react";

const UseRef = () => {
  const nameRef = useRef();
  const passRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passRef.current.value;
    const email = emailRef.current.value;
    console.log(name, password, email);
  };
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop: "50px"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Name" style={{padding:"8px", borderRadius:"10px"}}/>
        <br />
        <br />
        <input type="text" ref={passRef} placeholder="Password" style={{padding:"8px", borderRadius:"10px"}}/>
        <br />
        <br />
        <input type="text" ref={emailRef} placeholder="Enter Email" style={{padding: "8px", borderRadius:"10px"}}/>
        <br />
        <br />
        <button style={{padding:"8px", borderRadius:"10px"}}>Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
