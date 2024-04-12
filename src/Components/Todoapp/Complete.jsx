import React from 'react'

const Complete = ({completed}) => {
    console.log("complete:",completed);
  return (

   <>
   
   {/* <h1>completed</h1>
    {complete.map((completed,index)=>(
        
        <div className='input-container' key={index}>
         
        <h1>{completed}</h1>

    </div>

    ))} */}
    <div className='list-task'>
        
            {completed}
            
        </div>
   </>
    
  )
}

export default Complete