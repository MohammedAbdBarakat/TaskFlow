import TasksSortedByImportanceDetails from "./TasksSortedByImportanceDetails";

const TasksSortedByImportance = ({ tasks }) => {
    const groupedTasks = tasks ? tasks.reduce((acc, task) => {
        (acc[task.importance] = acc[task.importance] || []).push(task);
        return acc;
    }, {}) : {};

    return (
        <div className="task-list">
            {Object.keys(groupedTasks).map(type => (
                <div key={type} className="task-group">
                    <h4>Task Importance: {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                    {groupedTasks[type].map(task => (
                        <TasksSortedByImportanceDetails task={task} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TasksSortedByImportance;
