import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

// Hook for logging in
export const useLogin = () => {

    // State variables + dispatch från authContext
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    // Login funktion - email + password som params
    const login = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        // Fetch login backend logik
        const res = await fetch("http://localhost:5000/api/users/login", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        // Vi sparar json response i en variabel
        const json = await res.json()

        // Om inte okej / 200
        // Sätt Error som meddelande från backend
        if (res.status !== 200) {
            setIsLoading(false)
            setError(json.message)
        }

        // Om statusen är okej
        if (res.status === 200) {
            // Spara anv till local storage
            localStorage.setItem("user", JSON.stringify(json))

            // Uppdatera AUTH context
            dispatch({ type: "LOGIN", payload: json })


            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}