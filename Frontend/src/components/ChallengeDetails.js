const ChallengeDetails = ({challenge}) => {
    return ( 
        <div className="challenge-details">
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <button>Done </button>
            <p>{challenge.isDone}</p>
        </div>
    );
}

export default ChallengeDetails;