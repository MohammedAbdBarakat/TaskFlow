import { TaskContext } from "../context/TasksContext";
import { useContext } from "react";


export const useTasksContext = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw Error("useTasksContext can only be used inside a TaskContextProvider ")
    }

    return context
}