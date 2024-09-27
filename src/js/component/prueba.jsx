import React, { useState, useEffect } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const PR = () => {
	const [tasks, setTasks] = useState([]);
 	const [newTask, setNewTask] = useState('');


const handleKeyPress = (event) => {
	if (event.key === 'Enter'){
		setTasks([...tasks, newTask]);
		setNewTask('');
	}
}
const handleDelete = (index)=>{
	setTasks(tasks.filter((task, i)=> i !== index ))
};
const deleteButtonStyle = {
	':hover':{
    display: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
  }};

  return (
    <div>
      <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(event)=> setNewTask(event.target.value)}
		  onKeyDown={handleKeyPress}
          placeholder="Agregar tarea"
        />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}
		  <button  style={{
					display: 'none',
					position: 'absolute',
					right: 0,
					top: 0,
					':hover': {
					display: 'block',
					},
				}} 
				onClick={() => handleDelete(index) }>X</button>
		  </li> 
        ))}
      </ul>
    </div>
  );
};

export default Prueba;
