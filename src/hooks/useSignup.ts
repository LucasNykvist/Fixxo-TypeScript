import { useReducer, useState } from "react";
import { authReducer, useAuthContext } from "../contexts/AuthContext"

// Signup Hook
export const useSignup = () => {
    // State variables
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    // User Signup Function - Email and password as params
    const signup = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        // Fetch the signup endpoint
        const res = await fetch("http://localhost:5000/api/users/signup", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        // Save the API json response in a variable
        const json = await res.json()

        // If not 200 - Set error message as the error from backend
        if (res.status !== 200) {
            setIsLoading(false)
            setError(json.message)
        }

        // If OK 
        if (res.status === 200) {
            // Save user to local storage
            localStorage.setItem("user", JSON.stringify(json))

            // Update AUTH context
            dispatch({ type: "LOGIN", payload: json })


            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}

