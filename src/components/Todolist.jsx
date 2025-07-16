import React, { useState } from 'react'

// function Todolist() {
//     const [tasks, setTasks] = useState(["Learn React", "Complete JS Capstone", "Submit JS Capstone" ]);
//     const addTask = () => {
//         setTasks([...tasks, "Revise JS"]);
//     }
//   return (
//     <div>
//         <ul>
//             {tasks.map((task, index) => (
//                <li key={index}>{task}</li>
//             ))}

//             <button onClick={addTask}>Add Task</button>
//         </ul>
//     </div>

//   )
// }

function Todolist(){

  const [tasks, setTasks] = useState(["Learn React" , "Complete JS Capstone", "Submit JS Capstone"  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
           setNewTask (event.target.value);
  }

  function addTask(){

    if(newTask!== ""){
    setTasks(tasks => [...tasks, newTask]);
    setNewTask("");
  }
  }

  function deleteTask(index){
   
    const currentTasks = tasks.filter((_,i) => i !== index);
    setTasks(currentTasks);
  }

  return(
    <div>

      <h1>To Do List</h1>

      <input type="text" placeholder='Enter a Task...' 
      value={newTask}
      onChange={handleInputChange}

      />
      <button onClick={addTask} >Add</button>

     <ol>
      {tasks.map((task,index)=> 
            <li key={index}>
              <div>{task}</div>
              <button 
              onClick={() => deleteTask(index)} >
                Delete
              </button>
            </li>
      )}
     </ol>

    </div>
  )

}

export default Todolist