import { Link } from 'react-router-dom'

const MiniNavbar = () => {
    return ( 
        <>
        <div className="mini-nav">
            <div className="container">
                <Link to={"/home/tasks"}> Tasks </Link>
                <Link to={"/home/month"}> Month </Link>
                <Link to={"/home/challenges"}> Challenges </Link>
                <Link to={"/home/journaling"}> Journaling </Link>
            </div>
        </div>
        </>
    );
}

export default MiniNavbar;