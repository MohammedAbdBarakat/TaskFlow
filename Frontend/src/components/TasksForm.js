import {useState} from 'react'
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'

const TasksForm = () => {
    const {dispatch} = useTasksContext()
    const { user } = useAuthContext()


    const [title, setTitle] = useState('') 
    const [description, setDescription] = useState('') 
    const [importance, setImportance] = useState("") 
    const [startDate, setStartDate] = useState("") 
    const [startHour, setStartHour] = useState("") 
    const [type, setType] = useState('') 
    const [error, setError] = useState(null)


    const handleTypeSelectChange = (e) => {
        setType(e.target.value)
    }

    const handleImportanceSelectChange = (e) => {
        setImportance(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const startDateTime = new Date(`${startDate}T${startHour}`);

        console.log("startDate:", startDate);
        console.log("startHour:", startHour);
        console.log("startDateTime:", startDateTime);

        const task = { title, description, importance, type, startDateTime };

        if (!user) {
            setError('You must be logged in')
            return
        }

        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        
        if (!response.ok){
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setImportance('')
            setType('')
            setError(null)
            console.log("new task added", json)
            dispatch({type: 'CREATE_TASK', payload: json})
        }
    }
    


    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    id="title"
                    onChange={(e) => {setTitle(e.target.value)}}
                    value={title}
                    />

                <label htmlFor="description">Description:</label>
                <input 
                    type="text"
                    id="description"
                    onChange={(e) => {setDescription(e.target.value)}}
                    value={description}
                    />

                <label htmlFor="date">Start Date:</label>
                <input 
                    type="date"
                    id="startDate"
                    onChange={(e) => {setStartDate(e.target.value)}}
                    value={startDate}
                    />
                <label htmlFor="date">Start Hour:</label>
                <input 
                    type="time"
                    id="startHour"
                    onChange={(e) => {setStartHour(e.target.value)}}
                    value={startHour}
                    />

                <label htmlFor="importance">Importance:</label>
                <select id="importance" value={importance} onChange={handleImportanceSelectChange}>
                    <option value=""> </option>
                    <option value="Urgent & Important">Urgent & Important</option>
                    <option value="Not Urgent & Important">Not Urgent & Important</option>
                    <option value="Urgent & Not Important">Urgent & Not Important"</option>
                    <option value="Not Urgent  & Not Important">Not Urgent  & Not Important</option>
                </select>

                <label htmlFor="type">Type:</label>
                <select id="type" value={type} onChange={handleTypeSelectChange}>
                    <option value=""> </option>
                    <option value="Education">Education</option>
                    <option value="Sport">Sport</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Work">Work</option>
                    <option value="Life">Life</option>
                    <option value="Other">Other</option>
                </select>

                <button>Add Task</button>
            {error &&
                    <div className='error'>
                        {error}
                    </div>
                }
            </form>
        </div>
    );
}

export default TasksForm