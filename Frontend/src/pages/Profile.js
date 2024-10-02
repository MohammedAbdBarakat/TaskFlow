import { useAuthContext } from "../hooks/useAuthContext";
const Profile = () => {
    const {user} = useAuthContext()
    return ( 
        <div>
            <h1>
                {user.userName}
            </h1>
        </div>
    );
}

export default Profile;