import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TaskListItem = ({task}) => {
  const location= useLocation();
  let content=
  <section>
      <details className="Details text-white ">
        <summary className="Summary bg-teal-800 text-white">{task.title}</summary>
        <ul className="px-2 pb-4">
          <li>Date: {(task.date==='' ||task.date===undefined) ? "No Date"  : task.date} {task.time}</li>
          <li>Completed : {task.completed ? "Yes" :"No"} </li>
          <li className="flex justify-center items-center "><Link to={`/task/${task._id}`} state={{from:location}} replace className="w-20 text-center rounded border-solid border-black border-2 bg-white bg-opacity-80  text-teal-800 hover:bg-teal-800 hover:text-white hover:text-opacity-80 active:bg-teal-500 dark:border-none">Display</Link></li>
          
          </ul>
      </details>
  </section>
  return (
    task.title ?  content : ""
    )
}

export default TaskListItem