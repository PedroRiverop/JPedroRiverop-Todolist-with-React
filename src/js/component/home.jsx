
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
    <div className='d-flex justify-content-center'>
      <div className='text-center my-5 border' style={{width: 500}}>
        <h1 className='mb-3'>My To Do List...</h1>
        <div className='mx-auto' style={{width: 200}}>
          <input type="text" placeholder='Agregar Tarea...' value={inputValue} 
            onChange={e=>setInputValue(e.target.value)} onKeyDown = {handleKeyPress} style={{width: 200}}/>
          <ul className='myUl p-0'>{tasks.map((task, index)=>(<li className='d-flex justify-content-between' key={index}>{task}
              <button className='myButton' onClick={()=>handleClick(index)}>X</button>
                </li>))}</ul>
        </div>
        
    </div>
    </div>
    
  )
};

export default Home;
