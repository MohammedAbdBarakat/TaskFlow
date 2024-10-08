const TaskDetails = ({task}) => {
    return ( 
        <div className="task-details">
            <div>
                <h4><strong>Title: </strong>{ task.title }</h4>
                <p> <strong>Type: </strong> { task.type }</p>
                <p> <strong>Description: </strong> { task.description }</p>
                <p> <strong>Importance: </strong> { task.importance }</p>
            </div>
        </div>
    );
}

export default TaskDetails;