// import React from "react";
// import ControlledComponents from "./Components/ControlledComponents";
// import UncontrolledComponents from "./Components/UncontrolledComponents";
// import UseState from "./Hooks/UseState";
// import UseEffect from "./Hooks/UseEffect";
// import UseRef from "./Hooks/UseRef";
// import UseMemo from "./Hooks/UseMemo";
// import UseCallback from "./Hooks/UseCallback";
// import AppRoutes from "./React_Router/AppRoutes";
// import Grid from "./Grid";
// import ContextApi from "./ContextAPI/ContextApi";
// import UseContext from "./Hooks/UseContext";
// import ChildToParentDataPass from "./praticalQuestions/ChildToParentDataPass";
// import Child from "./props/Child";
// import Parent from "./props/Parent";
// import SearchAndFilter from "./praticalQuestions/Searchable & Filterable List/SearchAndFilter";
// import ChildHoc from "./HOC/ChildHoc";
// import ParentHoc from "./HOC/ParentHoc";
// import ParentCallback from "./callback/ParentCallback";

import ParentCompForSib from "./pass_data_bwt_sibling_comp/ParentCompForSib";

const App = () => {
  // const HocFunc = ParentHoc(ChildHoc);

  // const user = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //   },
  // ];

  return (
    <div>
      {/* <ControlledComponents/> */}
      {/* <UncontrolledComponents/> */}
      {/* <Parent/> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <UseContext/> */}
      {/* <UseMemo /> */}
      {/* <UseCallback/> */}
      {/* <AppRoutes/> */}
      {/* <Grid/> */}
      {/* <ContextApi/> */}
      {/* <HocFunc user={user} /> */}
      {/* <ParentCallback /> */}
      <ParentCompForSib/>
    </div>
  );
};

export default App;
