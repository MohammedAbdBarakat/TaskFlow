import {  useEffect, useState } from 'react'
import { useTasksContext } from '../../hooks/useTasksContext'
import { useAuthContext } from '../../hooks/useAuthContext'

import TaskDetails from "../TaskDetails";
import WeekSidebar from "./WeekSidebar";

const Journaling = () => {
    const [goodEvent1, setGoodEvent1] = useState("")
    const [goodEvent2, setGoodEvent2] = useState("")
    const [goodEvent3, setGoodEvent3] = useState("")
    const [badEvent1, setBadEvent1] = useState("")
    const [badEvent2, setBadEvent2] = useState("")
    const [badEvent3, setBadEvent3] = useState('')
    const [notes, setNotes] = useState("")

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


    const handleAddButton = () => {
        console.log("asd");
        
    }
    return ( 
        <div className="journaling-wrapper">
            <WeekSidebar />
            <div className="task-list-container">
                {tasks && tasks.map((task) => (
                    <div>
                        <TaskDetails key={task._id} task={task} />
                    </div>
                ))}
            </div>
            <div className="journaling-form-wrapper">
            <form className="journaling-form" onSubmit={handleAddButton}>
                <label>Three Good things happened today:</label>
                <input 
                    type="text"
                    onChange={(e) => setGoodEvent1(e.target.value)}
                    value={goodEvent1}
                />
                <input 
                    type="text"
                    onChange={(e) => setGoodEvent2(e.target.value)}
                    value={goodEvent2}
                />
                <input 
                    type="text"
                    onChange={(e) => setGoodEvent3(e.target.value)}
                    value={goodEvent3}
                />

                <label>Three Bad things happened today:</label>
                <input 
                    type="text"
                    onChange={(e) => setBadEvent1(e.target.value)}
                    value={badEvent1}
                />
                <input 
                    type="text"
                    onChange={(e) => setBadEvent2(e.target.value)}
                    value={badEvent2}
                />
                <input 
                    type="text"
                    onChange={(e) => setBadEvent3(e.target.value)}
                    value={badEvent3}
                />


                <label className='motes'>Notes:</label>
                <input 
                    type="text"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />

                <button>Add</button>
            </form>
            </div>
        </div>
    );
}

export default Journaling;