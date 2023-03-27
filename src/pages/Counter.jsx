import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'


const Counter = () => {
  const[count, setCount] = useState(0);

 const decriment=()=>{
  if (count>0) {
    setCount(count-1)
  }else{
    setCount(0)
  }
 }
  return (
       <>
          <Button className='btn btn-danger mx-2' onClick={decriment}>-1</Button>
           <span>{count}</span>
          <Button className='btn btn-success ms-2' onClick={()=>{setCount(count+1)}}>+1</Button>
       </>
  )
}

export default Counter