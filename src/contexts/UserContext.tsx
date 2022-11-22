import React, { useState, useContext, createContext } from 'react'
import { User, UserRequest } from '../models/UserModel'
import { UserProviderProps } from '../models/UserProviderPropsModel'

export interface IuserContext {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    users: User[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const UserContext = createContext<IuserContext | null>(null)

export const useUserContex = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }: UserProviderProps) => {
    const baseUrl = "http://localhost:5000/api/users"
    const user_default: User = { id: 0, firstName: "", lastName: "", email: "" }
    const userRequest_default: UserRequest = { firstName: "", lastName: "", email: "", password: "" }


    const [user, setUser] = useState<User>(user_default)
    const [userRequest, setUserRequest] = useState<UserRequest>(userRequest_default)
    const [users, setUsers] = useState<User[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userRequest)
        })
        if (res.status === 201) {
            setUserRequest(userRequest_default)
        }
    }
    const get = async (id: number) => {
        const res = await fetch(`${baseUrl}/${id}`)
        if (res.status === 200) {
            setUser(await res.json())
        }
    }
    const getAll = async () => {
        const res = await fetch(`${baseUrl}`)
        if (res.status === 200) {
            setUsers(await res.json())
        }
    }
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}/${user.id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (res.status === 200) {
            setUser(await res.json())
        }
    }
    const remove = async (id: number) => {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: "delete",
        })
        if (res.status === 204) {
            setUser(user_default)
        }
    }


    return (
        <UserContext.Provider value={{ user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider