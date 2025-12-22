import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about"><button>About</button></Link>
      <br /><br />

      <Link to="/contact"><button>Contact</button></Link>
      <br />
      
    </div>
  );
};

export default Home;
