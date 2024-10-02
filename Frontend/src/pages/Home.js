import {  useEffect } from 'react'
import Day from '../components/Day'
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
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
        <div className="home-container">
            <div className="side-nav">
                <details className="day-container" name="day">
                    <summary>Saturday</summary>
                    <div className="day-wrapper">
                        <Day tasks= {tasks} />
                    </div>
                </details>

                <details  className="day-container" name="day">
                    <summary>Sunday</summary>
                    <div className="day-wrapper">
                        <Day tasks= {tasks} />
                    </div>
                </details>

                <details  className="day-container" name="day">
                    <summary>Monday</summary>
                    <div className="day-wrapper">
                        <Day tasks= {tasks} />
                    </div>
                </details>

                <details  className="day-container" name="day">
                    <summary>thursday</summary>
                    <Day tasks= {tasks} />
                </details>

                <details  className="day-container" name="day">
                    <summary>wednesday</summary>
                    <div className="day-wrapper">
                        <Day tasks= {tasks} />
                    </div>
                </details>

                <details  className="day-container" name="day"> 
                    <summary>Tuesday</summary>
                    <div className="day-wrapper">
                        <Day tasks= {tasks} />
                    </div>
                </details>

                <details  className="day-container" name="day">
                    <summary>Friday</summary>
                    <div className="day-wrapper">
                        <Day tasks= {tasks} />
                    </div>
                </details>
            </div>
        </div>
    );
}

export default Home;