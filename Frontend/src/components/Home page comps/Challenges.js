import { useState } from "react";
import ChallengeDetails from "../ChallengeDetails";

const Challenges = () => {
    const [challenges, setChallenges] = useState(
        [{
            id:"1",
            title: "Quit Smoking",
            description: "smoke only 3 cigarettes per day",
            isDone: false
        },
        {
            id:"2",
            title: "Quit Smoking",
            description: "smoke only 3 cigarettes per day",
            isDone: false
        },
        {
            id:"3",
            title: "Quit Smoking",
            description: "smoke only 3 cigarettes per day",
            isDone: false
        }])
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isDone, setIsDone] = useState(false)

    /*
    implement a logic to get the challenges from backend
    */

    const handleAddButton = () => {

    }
    return ( 
        <div className="challenges-wrapper">
            <form className="challenge-form" onSubmit={handleAddButton}>
                <h1>Add a new challenge !</h1>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                <label htmlFor="description">Description:</label>
                <input 
                    type="text" 
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    />
                <button>Add</button>
            </form>
            <div className="challenge-list">
                {challenges && challenges.map((challenge) => (
                    <div >
                        <ChallengeDetails key={challenge.id} challenge={challenge} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Challenges;