import React, { createContext } from 'react'
import Child from './Child'


export const UserContext = createContext();

const ContextApi = () => {
  const data = "This is context API. ";
  const definition = "It is used to send data across multiple components without passing props manually at every level"
  return (
  //  <UserContext.Provider value={[data, definition]}>
  //   <Child/>
  //  </UserContext.Provider>
  //  or
  <UserContext.Provider value={{data, definition}}>
    <Child/>
   </UserContext.Provider>
  )
}

export default ContextApi
