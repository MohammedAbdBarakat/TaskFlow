import { useState } from "react";
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {login, isLoading, error} = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await login(userName, password)
    }

    return ( 
        <>
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>User name </label>
                <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
                <label> Password</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button disabled = {isLoading}>Login</button>

            </form>
                {error && <div className="error">{error}</div>}
        </div>
        </>
    );
}

export default Login;