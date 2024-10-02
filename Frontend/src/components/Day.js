const { format ,formatDistanceToNow  } = require('date-fns');

const Day = ({tasks}) => {
    return ( 
        <div className="">
            <table>
                {tasks && tasks.map((task) => (
                    <div className="task">
                        <tr key={task._id}>
                            <td><h4>Title</h4> { task.title }</td>
                            <td><h4>Description</h4> { task.description }</td>
                            <td><h4>Type</h4> { task.type }</td>
                            <td><h4>Importance</h4> { task.importance }</td>
                            <td><h4>Date created</h4> {formatDistanceToNow(new Date(task.date), { addSuffix: true })}</td>
                            <td><h4>due day</h4> {format(new Date(task.startDateTime), 'yyyy,MM,dd')} </td>
                            <td><h4>start hour</h4>{format(new Date(task.startDateTime), 'hh:mm a')} </td>
                        </tr>
                    </div>
                ))}
            </table>
        </div>
    );
}

export default Day;