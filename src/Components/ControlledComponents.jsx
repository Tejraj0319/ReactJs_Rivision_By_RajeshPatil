import React, { useState } from "react";

const ControlledComponents = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div>
      <h1>Controlled Components :</h1>
      <h3>
        Controlled components are the components whose input fields are managed / controlled
        by the state.
      </h3>
      <form action="">
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
        <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <button onClick={()=>{setName('');setPassword('');setEmail('')}}>clear</button>
      </form>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default ControlledComponents;
