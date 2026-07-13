import React from 'react'
import { useState } from 'react'
// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   const [count,setCount]=useState(1)
//   function increase(){
//     setCount(count+1);
//   }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increase} className='bg-amber-800 text-blue-800'>increment</button>
    
      
//     </>
//   )
// }
/// example of the useEffect
// export default App
// setIntervale is used to repeatedly execute a function or a code snippet at fixed time intervals

import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  function increase(){
    setCount(count+1);
  }
  const[seconds,setSeconds]=useState(0);
  const[running,setRunning]=useState(false)
  useEffect(()=>{
    let timer;
    if(running){
      timer=setInterval(()=>{
        setSeconds((prev)=> prev+1);

      },1000)
    }
    return()=> clearInterval(timer)


  },[running]) 
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increase} className='bg-amber-800 text-blue-800'>increment</button>
    
    <h1>{seconds}</h1>
    <button  onClick={()=> setRunning(true)}>start</button>
    <button  onClick={()=> setRunning(false)}>stop</button>

    </>
  )
}