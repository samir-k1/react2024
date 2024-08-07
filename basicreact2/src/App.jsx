import { useState } from "react";

const UpdateValue = () => {
  const [Value, UpdateIt] = useState(15);

  const handleClick = () => {
    UpdateIt(Value + 1);
  };

  const DeleteClick=()=>{
    UpdateIt(Value-1);
  }


  return (
    <>
      <h1>chai or code</h1>
      <h1>counter value: {Value}</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={DeleteClick}>delete me</button>
    </>
  );
};

 export default UpdateValue;

