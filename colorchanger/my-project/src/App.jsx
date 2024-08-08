import { useState } from "react"

function App() {
 const [Color, SetColor] = useState("olive")

  return (



    <div>
      {/* <h1>cvbnm,.nbv</h1> */}
      <div className="w-ful h-screen w-screen bg-white" style={{backgroundColor:Color}}>
        <div className=" text-center items-center">
      <button  onClick={()=>SetColor('red')}className="bg-red-700 margin-1 padding-2 gtext-white font-serif text-center"style={{backgroundColor: "red"}}> red</button>
      <button onClick={()=>SetColor('green')}className="bg-green-700 text-white font-serif text-center"style={{backgroundColor: "green"}}> green</button>
      <button onClick={()=>SetColor('blue')}className="bg-blue-700 text-white font-serif text-center"style={{backgroundColor: "blue"}}> blue</button>
      <button onClick={()=>SetColor('white')}className="bg-black-700 text-black font-serif text-center"style={{backgroundColor: "white"}}> black</button>
      </div>

    </div>
    </div>
  )
}

export default App
