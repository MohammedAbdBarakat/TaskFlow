import { useState } from "react"
import { useAuthContext } from "./useAuthContext" 


export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    

    const login = async (userName, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/api/users/login", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({userName, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if (response.ok) {
            setIsLoading(false)

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            //save the user token in local storage
            localStorage.setItem('user', JSON.stringify(json))
        }
    }

    return { login, isLoading, error }

}