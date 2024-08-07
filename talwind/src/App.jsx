import { useState } from 'react'
import Card from './card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black paddong-4'>tyuioppoiuy</h1>
     <Card username='tom'  btnText="click me"/>
     <Card username='holland'btnText="visit me"/>
     
</>
    
  )
}


export default App
