
import React, { useState} from 'react';

//create your first component
const Home = () => {
const [inputValue, setInputValue] = useState("");
const [tasks, setTasks] = useState([]);

const handleKeyPress = (event)=>{
  if (event.key === 'Enter'){
    ((inputValue == "")? alert("Error, debe redactar una tarea."): setTasks([...tasks, inputValue]));
    
    setInputValue("");
  }
}

const handleClick = (index)=>{
  setTasks(tasks.filter((elemento, i)=>i !== index))
}

	return(
    <div className='text-center myBodyCard'>
       <h1 className='mb-1 mt-5 myTitle display-2'>My To Do List</h1>
      <div className='text-start mt-2 mb-0 border mx-auto pb-2 position-relative bg-white' style={{width: 500,}}>
       
      <div className='myDivCard mx-auto bg-white'>
            <input type="text" placeholder='Agregar Tarea...' value={inputValue} 
              onChange={e=>setInputValue(e.target.value)} onKeyDown = {handleKeyPress} className='myInput fw-light mt-2'/>
            <ul className='myUl p-0'>{tasks.map((task, index)=>(<li className="d-flex justify-content-between myListElement fw-light" key={index}>{task}
                <button className='myButton' onClick={()=>handleClick(index)}>x</button>
                  </li>))}</ul>
          </div>
          <span className='fw-light mySpan m-2'>{tasks.length} Tareas pendientes</span>
      </div>
      <div className='variousEffect border mx-auto' style={{width: 485}}><br/></div>
      <div className='variousEffect border mx-auto shadow' style={{width: 470}}><br/></div>
      
    </div>
    
  )
};

export default Home;
