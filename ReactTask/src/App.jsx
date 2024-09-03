
import { useState } from 'react'
import './App.css'
import Todo from './todo'
import StopWatch from './stopWatch'





function App() {



  let [count,setCount]=useState(0)




  
      
   
  const IncreaseCount=()=>{
  
    if(count<10)
      setCount(count+1);
  
}

  
  const DecreaseCount=()=>{
    if (count>0) {
      
    
    setCount(count-1);
  }

}

const ResetBtn=()=>{
  setCount(0)
}
    
  




  return (
    <>

    <h1>{count}</h1>
    <button onClick={IncreaseCount}>+</button>
    <button onClick={DecreaseCount}>-</button>
    <button onClick={ResetBtn}>reset</button>
    <Todo/>
    <StopWatch/>
    


{/* <h1>{ShowCount}</h1> */}
    </>
  )
}


export default App
