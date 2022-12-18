import { useAuthContext } from "../contexts/AuthContext"

// Logout Hook
export const useLogout = () => {
    const { dispatch } = useAuthContext()

    // Logout Function
    // Removes the item "user" from local storage and dispatch logout from the authContext
    const logout = () => {
        // Remove user from storgae
        localStorage.removeItem("user")

        // Dispatch Logout Action
        dispatch({ type: "LOGOUT" })
    }
    return { logout }
}