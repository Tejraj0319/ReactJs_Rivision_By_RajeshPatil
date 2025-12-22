import React from 'react'
import { UserContext } from './ContextApi'

const GrandChild = () => {
  return (
    <UserContext.Consumer>
          {/* {([data, definition]) => <h1>{[data, definition]}</h1>} */}
          
          {/* or */}

          {({data, definition}) => <h1>{data} {definition}</h1>}

    </UserContext.Consumer>
  )
}

export default GrandChild
