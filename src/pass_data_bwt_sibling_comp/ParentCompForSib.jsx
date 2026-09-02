// Passing data between sibling components using a react router
import { Routes, Route } from "react-router-dom";
import SibCompOne from "./SibCompOne";
import SibCompTwo from "./SibCompTwo";

const ParentCompForSib = () => {
  return (
    <div>
      <Routes>
        <Route path="/sibcompone" element={<SibCompOne />} />
        <Route path="/sibcomptwo" element={<SibCompTwo />} />
      </Routes>
    </div>
  );
};

export default ParentCompForSib;
