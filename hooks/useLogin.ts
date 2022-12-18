import { useState } from "react";
import { useAuthContext } from "../src/contexts/authContext";

// Hook for logging in
export const useLogin = () => {

    // State variables + dispatch from authContext
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const authContext = useAuthContext()

    // Login function - email + password as params
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        // Fetch login backend logic
        const res = await fetch("http://192.168.1.128:5000/api/users/login", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            // We want to convert the input to JSON string
            body: JSON.stringify({ email, password })
        })

        // We save the json response in a variable
        const json = await res.json()

        // If the response status is not ok / not 200 
        // Set Error as message from the backend
        if (res.status !== 200) {
            setIsLoading(false)
            setError(json.message)
        }

        // If status is ok / 200
        if (res.status === 200) {
            // Save user to local storage
            localStorage.setItem("user", JSON.stringify(json))

            // Update AUTH context
            // We call the dispatch, what we want to send as payload to generate JWT is the json response in the logout case
            if (authContext && "dispatch" in authContext) {
                authContext.dispatch({ type: "LOGIN", payload: json })
            }

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}