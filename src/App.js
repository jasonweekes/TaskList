import './App.css';
import AddTask from './AddTask';
import Task from './Task';
import React, { useState } from 'react';


function App() {
  const initialTasks = [
    { id: 1, description: "Walk the dog", importance: "medium" },
    { id: 2, description: "Paint the fence", importance: "low" },
    { id: 3, description: "Eat ice cream", importance: "high" }
  ]
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(newTask){
    let updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks)
  }
  function removeTask(taskId){
    let updatedTasks = [...tasks]; // gives us a copy of state that we can modify

    let index = updatedTasks.findIndex(task => task.id === taskId);

    updatedTasks.splice(index, 1); // remove task from our copy

    setTasks(updatedTasks); // set state to new array w/o the removed task
  }

  return ( 
    <div className="container">
    <div className="row">
    <div className="col-12">
      <h1>Task List</h1>
      
      <AddTask addTask={ addTask } lastId={ tasks.length }/>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <ol>{ tasks.map( (task) => <Task key={task.id} task={task} removeTask={removeTask} />) } </ol>
    </div>
  </div>
</div>
   );
}

export default App;
