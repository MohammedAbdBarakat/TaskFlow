import TasksSortedByTypeDetails from "./TaskSortedByTypeDetails";

const TasksSortedByType = ({ tasks }) => {
    const groupedTasks = tasks ? tasks.reduce((acc, task) => {
        (acc[task.type] = acc[task.type] || []).push(task);
        return acc;
    }, {}) : {};
    
    return (
        <div className="task-list">
            {Object.keys(groupedTasks).map(type => (
                <div key={type} className="task-group">
                    <h4>Task Type: {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                    {groupedTasks[type].map(task => (
                        <TasksSortedByTypeDetails key={task._id} task={task} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TasksSortedByType;
