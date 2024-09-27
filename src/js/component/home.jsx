
import React, { useState, useEffect } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [inputValue, setInputValue] = useState("");
const [tasks, setTasks] = useState([]);

const handleKeyPress = (event)=>{
  if (event.key === 'Enter'){
    setTasks([...tasks, inputValue]);
    setInputValue("");
  }
}

const handleClick = (index)=>{
  setTasks(tasks.filter((elemento, i)=>i !== index))
}

	return(
    <div className='text-center'>
       <h1 className='mb-1 mt-5 myTitle display-2'>My To Do List</h1>
      <div className='text-start my-2 border mx-auto pb-2' style={{width: 500}}>
       
        <div className='mx-auto' style={{width: 400}}>
          <input type="text" placeholder='Agregar Tarea...' value={inputValue} 
            onChange={e=>setInputValue(e.target.value)} onKeyDown = {handleKeyPress} style={{width: 400}} className='myInput fw-light mt-2'/>
          <ul className='myUl p-0'>{tasks.map((task, index)=>(<li className="d-flex justify-content-between myListElement fw-light" key={index}>{task}
              <button className='myButton' onClick={()=>handleClick(index)}>x</button>
                </li>))}</ul>
        </div>
        <span className='fw-light mySpan m-2'>{tasks.length} Tareas pendientes</span>
    </div>
    </div>
    
  )
};

export default Home;
