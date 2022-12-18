import { useAuthContext } from "../src/contexts/authContext"

// Logout Hook
export const useLogout = () => {
    const authContext = useAuthContext()

    // Logout Function
    // Removes the item "user" from local storage and dispatch logout from the authContext
    const logout = () => {
        // Remove user from storgae
        localStorage.removeItem("user")

        // Dispatch Logout Action
        if (authContext && "dispatch" in authContext) {
            authContext.dispatch({ type: "LOGOUT" })
        }

    }
    return { logout }
}