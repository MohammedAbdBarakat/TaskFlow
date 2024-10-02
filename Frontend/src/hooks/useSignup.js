import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (firstName, lastName, userName,email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({firstName, lastName, userName,email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            //save the user into the local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    

    return {signup, error, isLoading}
}