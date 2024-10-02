import { useState, useEffect } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import { useAuthContext } from '../hooks/useAuthContext'


const TasksSortedByImportanceDetails = ({task}) => {
    const {dispatch} = useTasksContext()
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({ ...task });

    const { user } = useAuthContext()


    useEffect(() => {
        setUpdatedTask({ ...task });
    }, [task]);


    const handleClick = async () => {

        if (!user) {
            return
        }

        const response = await fetch(`/api/tasks/${task._id}`, {
            method:'DELETE',
            headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: "DELETE_TASK", payload: json})
        }
    }


    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask({ ...updatedTask, [name]: value });
    };

    const handleSaveClick = async () => {

        if (!user) {
            return
        }

        const response = await fetch(`/api/tasks/${task._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(updatedTask),
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_TASK', payload: json });
            setIsEditing(false);
        }
    };

    return ( 
        <div key={task._id} className="task-item">
            {isEditing ? (
                <>
                    <input
                        className="title-input"
                        type="text"
                        name="title"
                        value={updatedTask.title}
                        onChange={handleInputChange}
                    />
                    <ul>
                        <li>
                            <input
                            type="text"
                            name="description"
                            value={updatedTask.description}
                            onChange={handleInputChange}
                            />
                        </li>
                        <li>
                            <select id="type"  name="type" value={updatedTask.type}  onChange={handleInputChange}>
                                <option value="Education">Education</option>
                                <option value="Sport">Sport</option>
                                <option value="Spiritual">Spiritual</option>
                                <option value="Cleaning">Cleaning</option>
                                <option value="Work">Work</option>
                                <option value="Life">Life</option>
                                <option value="Other">Other</option>
                            </select>
                        </li>
                    </ul>
                    <span onClick={handleSaveClick} className="material-symbols-outlined">Check</span>
                </>
            ) : (
                <>
                    <h4>{task.title}</h4>
                    <ul>
                        <li> <p><b> Description: </b> { task.description }</p> </li>
                        <li><p><b> Type: </b>  { task.type }</p> </li>
                    </ul>
                    <span className="material-symbols-outlined" onClick={handleUpdateClick}>Create</span>
                    <span className="material-symbols-outlined"  onClick={handleClick} >Delete</span>
                </>
            )}
        </div>
    );
}

export default TasksSortedByImportanceDetails;