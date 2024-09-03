import React from 'react'
import { useState,useRef } from 'react';




const stopWatch = () => {


const [seconds , setSecond] = useState(0);
const [start, setstart] = useState(false);
const intervalRef=useRef(null);

const StartWatch=()=>{
    if(!start)
        setstart(true);
    intervalRef.current=setInterval(() => {
        setSecond(prev=>prev+1)
    }, 1000);




}
  return (
    <div>
      <button onClick={StartWatch}>click here</button>
      <p>{seconds}</p>
    </div>
  )
}

export default stopWatch
