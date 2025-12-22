import React from 'react'
import Child from './Child'

const Parent = () => {
    const name = "Rajesh Patil"
  return (
    <div>
        <Child name={name}/>
    </div>
  )
}

export default Parent