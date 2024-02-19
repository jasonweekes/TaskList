import React, { useState } from 'react';


function AddTask(props) {
    const [uniqueId, setUniqueId] = useState(props.lastId + 1)
    function handleSubmit(e){
        e.preventDefault(); // prevents refreshing the page

        let newId = uniqueId + 1
        setUniqueId(newId); // Sets a unique ID for the next incoming task

        let newTask = {
            id: uniqueId,
            description: e.target.description.value,
            importance: e.target.importance.value
        }

        props.addTask(newTask);

        e.target.description.value = ""; // clear the form input
    }
    return (
        <form onSubmit={handleSubmit}>
    <input type="text" name="description" placeholder="description" required />
    <select name="importance">
      <option value="low"> Low </option>
      <option value="medium"> Medium </option>
      <option value="high"> High </option>
    </select>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
      );
}

export default AddTask;