import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import { useAuthContext } from '../hooks/useAuthContext'


const TasksSortedByTypeDetails = ({ task }) => {
    const { dispatch } = useTasksContext();
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({ ...task });

    const { user } = useAuthContext()


    const handleDeleteClick = async () => {

        if (!user) {
            return
        }

        const response = await fetch(`/api/tasks/${task._id}`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${user.token}`}
        });
        const json = await response.json();


        if (response.ok) {
            dispatch({ type: 'DELETE_TASK', payload: json });
        }
    };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask({ ...updatedTask, [name]: value });
    };

    const handleSaveClick = async () => {
        if (!user) {
            return;
        }
    
        try {
            const response = await fetch(`/api/tasks/${task._id}`, {
                method: 'PATCH',
                body: JSON.stringify(updatedTask),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
            });
    
            const json = await response.json();
            console.log('Response from API:', json); // Log the response from the API
    
            if (response.ok) {
                dispatch({ type: 'UPDATE_TASK', payload: json });
                setIsEditing(false);
            } else {
                console.error('Failed to update task:', json);
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };
    
    

    return (
        <div className="task-item">
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
                            <select id="importance"  name="importance" value={updatedTask.importance} onChange={handleInputChange}>
                                <option value="Urgent & Important">Urgent & Important</option>
                                <option value="Not Urgent & Important">Not Urgent & Important</option>
                                <option value="Urgent & Not Important">Urgent & Not Important"</option>
                                <option value="Not Urgent  & Not Important">Not Urgent  & Not Important</option>
                            </select>
                        </li>
                    </ul>
                    <span onClick={handleSaveClick} className="material-symbols-outlined">Check</span>
                </>
            ) : (
                <>
                    <h4>{task.title}</h4>
                    <ul>
                        <li><p><b>Description:</b> {task.description}</p></li>
                        <li><p><b>Importance:</b> {task.importance}</p></li>
                    </ul>
                    <span className="material-symbols-outlined" onClick={handleUpdateClick}>Create</span>
                    <span className="material-symbols-outlined" onClick={handleDeleteClick}>Delete</span>
                </>
            )}
        </div>
    );
};
export default TasksSortedByTypeDetails;
