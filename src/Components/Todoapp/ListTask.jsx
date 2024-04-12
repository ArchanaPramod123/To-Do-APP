import React from 'react'

const ListTask = ({task,index,removeTask,finished}) => {
  return (
    <>
        <div className='list-task'>
            {task}
            <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>
            <button onClick={()=>{finished(index)}} className='delete-btn'>Complete</button>
        </div>
    </>
  )
}

export default ListTask