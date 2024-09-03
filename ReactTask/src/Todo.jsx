import React, { useState } from 'react'



const todo = () => {
// const [tasks,setTasks]=useState([])

// const [taskInput, setTaskInput] = useState('');

//     const handleInputchange=(e)=>{
//         setTaskInput(e.target.value)
//     }


//     const handleAddtask=()=>{
//         if(taskInput.trim()){
//             setTasks([...tasks,{
//                 text:taskInput,completed:false}]);
         

//         }

//     }

//   return (
//     <div>
//       <input type="text" value={taskInput} onChange={handleInputchange}/>
//       <button onClick={handleAddtask}>Add Task</button>
//       <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>{task}</li>
//                 ))}
//             </ul>
//     </div>
//   )
// }import React, { useState } from 'react';


    const [taskInput, setTaskInput] = useState(''); // State to track input
    const [tasks, setTasks] = useState([]); // State to track tasks

    const HandleTaskInput=(e)=>{
        setTaskInput(e.target.value)
    }

    // Function to add a new task
    const handleAddTask = () => {
        if (taskInput.trim()) { // Check if input is not empty
            setTasks([...tasks, taskInput]); // Add new task
            setTaskInput(''); // Clear the input
        }
    };

const onDelete=(index)=>{
    const newTask=tasks.filter((_,i)=>index);
    setTasks(newTask)
}
    

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" value={taskInput} onChange={HandleTaskInput} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} <button  onClick={()=>onDelete(index)}> delete</button></li>
                ))}
            </ul>
        </div>
    );
}



export default todo
