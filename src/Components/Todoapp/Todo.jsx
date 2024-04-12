import React, { useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTask from './ListTask'
import { useEffect } from 'react'
import Complete from './Complete'

const Todo = () => {
    const [tasks,setTask]=useState([
        // {title:"learn python"},
        // {title:"learn CSS"},
        // {title:"learn JAVA"}
    ])
    const [count,setCount]=useState(0)
    const [taskCount, setTaskCount]=useState(0)
    const [complete , setComplete]=useState([])
    useEffect(()=>{
        document.title=`you have ${tasks.length} pending`
    })
    // useEffect(()=>{
    //     setCount(tasks.length)
        
    // },[tasks])
    useEffect(()=>{
        setCount(complete.length)
        setTaskCount(tasks.length)
        
    },[complete,tasks])

    // useEffect(()=>{
    //     console.log("working useEff")
       
    // },[tasks])

    // setTaskCount(tasks.length)


    const addTask=(title)=>{
        const newTask=[...tasks,title]
        setTask(newTask)
    }


    const removeTask=(index)=>{
        const newTask=[...tasks]
        newTask.splice(index,1)
        setTask(newTask)

    }

    function finished(index){
        const finishedTask = tasks.filter((_,i) => index === i)
        setComplete((complete) => [...complete,finishedTask])
        setTask(tasks.filter((_, i) => i !== index))
  }

  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <h3>Task : {taskCount}</h3>
        <h3>complete task: {count}</h3>
        <div className='add-task'><AddTask addTask={addTask}/></div>
        <div className='tasks'>
            {tasks.map((task,index)=>(
                <ListTask task={task} removeTask={removeTask} index={index} key={index} finished={finished}/>

            ))}
        </div>

        <h1>Complete Task</h1>
        <div className='tasks'>
            {complete.map((completed,index)=>(
                <Complete completed={completed}  index={index} key={index}/>

            ))}
                {/* <Complete complete={complete} /> */}
        </div>

    </div>
    </>
  )
}

export default Todo