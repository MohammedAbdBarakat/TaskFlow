const TaskDetails = ({task}) => {
    return ( 
        <div className="task">
            <h4>{ task.title }</h4>
            <p> <strong>Type: </strong> { task.type }</p>
            <p> <strong>Description: </strong> { task.description }</p>
            <p> <strong>Importance: </strong> { task.importance }</p>
            <span className="material-symbols-outlined"  onClick={handleClick} >Delete</span>
        </div>
    );
}

export default TaskDetails;