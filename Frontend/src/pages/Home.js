import {  useEffect } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'
import { useAuthContext } from '../hooks/useAuthContext'
import MiniNavbar from '../components/Home page comps/MiniNavbar'
import WeekSidebar from '../components/Home page comps/WeekSidebar'
import Tasks from '../components/Home page comps/Tasks'

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
            <div className="content">
                
            </div>
        </div>
    );
}

export default Home;