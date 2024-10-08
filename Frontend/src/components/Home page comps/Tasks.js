import {  useEffect } from 'react'
import { useTasksContext } from '../../hooks/useTasksContext'
import { useAuthContext } from '../../hooks/useAuthContext'

import WeekSidebar from "./WeekSidebar"
import TaskDetails from '../TaskDetails'

const Tasks = () => {
    const { tasks, dispatch } = useTasksContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch("/api/tasks", {
                headers: {'Authorization': `Bearer ${user.token}`}
            })
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_TASKS', payload: json})
            }
        }

        if (user) {
            fetchTasks()
        }

    },[dispatch, user])
    
    return ( 
        <div className="tasks-page">
            <WeekSidebar />
            <div className="task-list-container">
                {tasks && tasks.map((task) => (
                    <div>
                        <TaskDetails key={task._id} task={task} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tasks;