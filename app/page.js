"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([]);


  const submitHandler = (e)=>{
      e.preventDefault();
      setMainTask([...mainTask, {title,desc}]);
      settitle("");
      setdesc("");
  }
  
  let renderTask;

  const deleteHandeler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }
  
  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return (
          <li key={i} className='flex items-center justify-between mb-8'>
            <div className='w-2/3'>
              <h5 className='text-2xl font-semibold'>{t.title}</h5>
              <p className='text-xl '>{t.desc}</p>
            </div>
            <button onClick={(i)=>{
              deleteHandeler(i);
            }} className='px-6 py-3 border-red-100 bg-red-600 text-white font-bold rounded-xl'>Delete</button>
          </li>
      );
    });
  }else{
    renderTask = <h2 className='flex items-center justify-center'>No Task Available</h2>
  }
  
  return (
    <>
    <div className='w-full h-50 bg-violet-800 text-white p-10 text-center'>
      <h1 className='text-3xl font-bold font-gilroy'>ToDo List App</h1>
    </div>
    <form onSubmit={submitHandler} className='mt-10 flex items-center justify-center font-gilroy'>
      <input className='m-5 px-10 py-3 border-gray-700 border-2 rounded-xl' type="text" placeholder='Enter Title Here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input className='m-5 px-10 py-3 border-gray-700 border-2 rounded-xl' type="text" placeholder='Enter Description Here' 
      value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button className='m-5 px-10 py-3 bg-violet-950 text-white font-bold rounded-xl'>Add Task</button>

    </form>
    <hr />
    <div className='p-8 bg-violet-400'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
    
  )
}

export default page