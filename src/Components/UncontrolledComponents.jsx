import React, { useRef } from "react";

const UncontrolledComponents = () => {
  const nameRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    console.log(name, password);
  };

  const handleRef = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passRef.current.value;
    console.log(name, password);
  };
  return (
    <div>
      <h1>UncontrolledComponents:</h1>
      <p>
        Components in which you are handling input field values without using
        state is know as uncontrolled components!
      </p>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="name" />
        <br />
        <br />
        <input type="text" id="password" placeholder="Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>


      <hr />


      <h1>UncontrolledComponents:</h1>
      <p>
        Components in which you are handling input field values without using
        state is know as uncontrolled components!
      </p>
      <form action="" onSubmit={handleRef}>
        <input type="text" ref={nameRef} id="nameRef" placeholder="name" />
        <br />
        <br />
        <input type="text" ref={passRef} id="passwordRef" placeholder="Password"/>
        <br />
        <br />
        <button>Submit on ref</button>
      </form>
    </div>
  );
};

export default UncontrolledComponents;
