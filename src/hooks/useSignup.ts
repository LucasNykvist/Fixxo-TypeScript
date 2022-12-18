import { useReducer, useState } from "react";
import { authReducer, useAuthContext } from "../contexts/AuthContext"

// Signup Hook
export const useSignup = () => {
    // State variables + dispatch från authContext
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    // Registrerings funktion - Email and password som parametrar
    const signup = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        // Fetch signup endpoint
        const res = await fetch("http://localhost:5000/api/users/signup", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        // Spara API json response i en variabel
        const json = await res.json()

        // Om inte 200 - Set error message som error som skickats som res från backend
        if (res.status !== 200) {
            setIsLoading(false)
            setError(json.message)
        }

        // Om OK 
        if (res.status === 200) {
            // Spara user till local storage
            localStorage.setItem("user", JSON.stringify(json))

            // Uppdatera AUTH context
            dispatch({ type: "LOGIN", payload: json })


            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}

