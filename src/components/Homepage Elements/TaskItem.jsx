import React, { useState } from 'react'
import PopupTaskItem from './Tasks Elements/PopupTaskItem';

const TaskItem = ({ task,handleComplete, handleNavigate ,readOnly}) => {
  const [open,setOpen]=useState(false);

  /*
  This component is only responsible for displaying info & activate PopupTaskItem.
  
  */


  return (<>
      <button className={` lg:Body_04 xl:Body_03 2xl:Body_02 lg:p-[1%] lg:py-[2%] rounded-xl hover:scale-95 duration-100 border border-[--text] shadow-2xl ${task.complete? "bg-[--body-bg-color]" :" bg-[--secondary]"}`} onClick={()=>{setOpen(true)}}>
        {task.title}
      </button>
      {open && <PopupTaskItem  task={task} readOnly={readOnly} handleComplete={handleComplete} handleNavigate={handleNavigate}  setClose={setOpen} />}
    </>
  )
}

export default TaskItem