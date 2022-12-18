import React, { createContext, useReducer, useEffect } from 'react'
import { useContext } from 'react'

interface AuthState {
    user: any,
    loading: boolean
}

interface AuthAction {
    type: string,
    payload?: any
}

export interface IauthContext {
    state: AuthState
    dispatch: React.Dispatch<any>
    user: any
}

export const AuthContext = createContext<IauthContext>({
    state: {
        user: null,
        loading: false,
    },
    dispatch: () => { },
    user: null
})

export const useAuthContext = () => {
    return useContext(AuthContext)
}

// Reducer fär in och utloggning
// "LOGIN" case ger user som payload så user blir inloggad
// "LOGOUT" case ger user som null så user blir utloggad
export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }: any) => {
    // Reducer State
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    // Kolla om det finns användare sparat i local storage
    // Om det finns, dispatcha sparad användare så att React vet att en användare är inloggad
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            dispatch({ type: "LOGIN", payload: JSON.parse(user) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider