import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
const Content = ({ items, setItems, Tog ,setCount}) => {
  const del = (id)=>{{/* Deleting from the list*/}
    let cnt = 0 ;
    let all = 0;
    const newList = []
     items.forEach((item)=>{
        if(item.id !== id){
          all++;
          item.id = all;
          cnt += !(item.checked);
          newList.push(item);
        }
    });
    setItems(newList);
    setCount(cnt);
    localStorage.setItem('Items',JSON.stringify(newList));
    localStorage.setItem('cnt',cnt);
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.id}</p>
            <p style={item.checked ? { textDecoration: 'line-through' } : null}>{item.item}</p>
            <button onClick={() => Tog(item.id)}>{item.checked ? "check" : "uncheck"}</button>
            <div className='itt'>
              <AiOutlineDelete className='itt' style={{fontSize : '2rem' }} onClick={()=>del(item.id)}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Content
