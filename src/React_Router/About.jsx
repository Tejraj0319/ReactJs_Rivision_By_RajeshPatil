import React from "react";
import { Link, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=>navigate("/")}>GO TO HOME</button>

      <button onClick={()=>navigate(-1)}>GO BACK</button>

      <button onClick={()=>{navigate(1)}}>MOVE FOREWORD</button>
      
      <Link to="/contact"><button>GO TO CONTACT</button></Link>
    </div>
  );
};

export default About;
