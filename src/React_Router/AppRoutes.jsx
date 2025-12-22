import React from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const AppRoutes = () => {
  return (
    <div>
      {/* <Link to="/about"><button>About</button></Link>
      <br /><br />
      <Link to="/contact"><button>Contact</button></Link>
      <br /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
