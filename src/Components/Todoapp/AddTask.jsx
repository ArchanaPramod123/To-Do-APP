import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setValue]=useState("")
    // const addItem=()=>{
    //     addTask(value)
    //     setValue("")
        
    // }
  return (
    <>
        <div className='input-container'>
            <input className='input' type="text" placeholder='Add a new Task' value={value} onChange={(e)=>{ 
              
              console.log(e.target.value)
              setValue(e.target.value)
              }} />
            <button onClick={()=>{
              addTask(value)
              setValue("")
            }} className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask