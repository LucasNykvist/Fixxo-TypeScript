import React, { useEffect } from 'react'
import { IuserContext, UserContext } from '../contexts/UserContext'
import { User } from '../models/UserModel'

const UserList = () => {

    const { users, getAll } = React.useContext(UserContext) as IuserContext

    useEffect(() => {
        getAll()
    }, [getAll])

    return (
        <>
            <h3 className='display-6 mb-4'>List of Users</h3>
            {
                users.map((user: User) => (<div key={user.id} className="mb-3">
                    {user.firstName}
                    {user.lastName}
                    {user.email}
                    {user.id}
                </div>))
            }
        </>
    )
}

export default UserList