import { useEffect, useState } from 'react';
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'

import Xarrow from "react-xarrows";
//components
import TasksForm from "../components/TasksForm";
import TasksSortedByType from '../components/TasksSortedByType';
import TasksSortedByImportance from '../components/tasksSortedByImportance';

const Create = () => {
    const { tasks, dispatch } = useTasksContext()
    const [sort, setSort] = useState("importance")

    const { user } = useAuthContext()



    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch("/api/tasks", {
                headers: {'Authorization': `Bearer ${user.token}`}
            });

            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_TASKS', payload: json})
            }
        };

        if (user) {
            fetchTasks()
        }
    }, [dispatch, user]);


    const handleTypeButton = () => {
        setSort("type")
        
    }
    const handleImportanceButton = () => {
        setSort("importance")
        
    }
    return (
        <div className="create">
            <Xarrow start={'create-div'} end={'task-container'} color='#694F83' path='smooth' headShape={'arrow1'} animateDrawing={true} />
            <div className="create-first-phase">
                <div id="create-div" className="create-div">
                    <h3>First, let's add all of your weekly tasks</h3>
                    <div className="tasksForm-Container">
                        <TasksForm />
                    </div>
                </div>
                <div id="task-container" className="task-container">
                    <h3>Sort by</h3>
                    <button className='sort-button' onClick={handleTypeButton} >Type</button>
                    <button  className='sort-button' onClick={handleImportanceButton} >Importance</button>
                    {(sort === "type" ) ? <TasksSortedByType tasks={tasks} /> : <TasksSortedByImportance tasks={tasks} />}
                </div> 
            </div>
            <br />
            <br />
            
        </div>
    );
};

export default Create;
