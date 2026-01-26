import React from 'react'
import ControlledComponents from './Components/ControlledComponents'
import UncontrolledComponents from './Components/UncontrolledComponents'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
import AppRoutes from './React_Router/AppRoutes'
import Grid from './Grid'
import ContextApi from './ContextAPI/ContextApi'
import UseContext from './Hooks/UseContext'
import ChildToParentDataPass from './praticalQuestions/ChildToParentDataPass'
import Child from './props/Child'
import Parent from './props/Parent'


const App = () => {
  return (
    <div>
      {/* <ControlledComponents/> */}
      {/* <UncontrolledComponents/> */}
      {/* <Parent/> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <UseContext/> */}
      {/* <UseMemo/> */}
      <UseCallback/>
      {/* <AppRoutes/> */}
      {/* <Grid/> */}
      {/* <ContextApi/> */}
      {/* <ChildToParentDataPass/> */}
    </div>
  )
}

export default App