import { useAuthContext } from "../contexts/AuthContext"

// Logout Hook
export const useLogout = () => {
    const { dispatch } = useAuthContext()

    // Logout Funktion
    // Tar bort  "user" från local storage och dispatch logout från authContext
    const logout = () => {
        // Remove user from storgae
        localStorage.removeItem("user")

        // Dispatch Logout Action
        dispatch({ type: "LOGOUT" })
    }
    return { logout }
}