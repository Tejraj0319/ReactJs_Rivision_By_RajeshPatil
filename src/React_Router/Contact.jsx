import React from "react";
import { Link, useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={()=>navigate(-1)}>GO BACK</button>
      
      <Link to="/"><button>GO TO HOME</button></Link>
      
      <Link to="/about"><button>GO TO ABOUT</button></Link>
    </div>
  );
};

export default Contact;
