import React, { useState } from 'react'
import { SlPlus } from 'react-icons/sl';
import { GrPowerReset } from 'react-icons/gr'
function Footer({count , setCount , items , setItems}) {
  const [showadd , setShowadd] = useState(false);{/* To check if we would want to add or not*/}
  const [newTask , setNewTask] = useState("ads");{/* To store the input of the new tasks*/}
  const addTolist = ()=>{
    setShowadd(!showadd);{/* To toggle add */}
  }
  const addTask = ()=>{{/* Creating a new list of tasks while add one more task when called*/}
    const newList = [...items];
    newList.push({
      id :newList.length + 1,
      item : newTask,
      checked : false
    })
    setCount(count + 1);
    setItems(newList);
    localStorage.setItem('Items',JSON.stringify(newList));{/* Updating the local storage to add List*/}
    localStorage.setItem('cnt',count + 1);{/* Updating the local storage for cnt of elements remainging*/}
  }
  return (
    <div>
      <p style={{fontSize : "2rem"}}> Items remaining : { count }</p>
      <div className='icon'>
      <SlPlus className='items' onClick = {addTolist}/>
      </div>
      <div className='icon'>
      <GrPowerReset className='items' style={{color : 'hotpink'}} onClick={()=>{setItems([]); setCount(0)}}/>
      </div>
      {showadd && <div className='frm'>
          <input placeholder='enter you task here' onChange={(event) => {setNewTask(event.target.value)}}/>
           <button onClick = {addTask}>Submit</button>
      </div>}
    </div>
  )
}

export default Footer
