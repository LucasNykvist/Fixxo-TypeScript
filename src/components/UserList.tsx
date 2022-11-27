import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IuserContext, UserContext } from '../contexts/UserContext'
import { User } from '../models/UserModel'

const UserList = () => {

    const { users, getAll, remove } = React.useContext(UserContext) as IuserContext

    useEffect(() => {
        getAll()
    }, [getAll])

    return (
        <>
            <div className="user-list">
                <div className="container">
                    <h3 className='display-6 mb-4'>- ALL USERS -</h3>
                    {
                        users.map((user: User) => (<div key={user.id} className="list-item mb-3">
                            <h2>ID: <span>{user.id}</span></h2>
                            <h2>FIRST NAME: <span>{user.firstName}</span></h2>
                            <h2>LAST NAME: <span>{user.lastName}</span></h2>
                            <h2>EMAIL: <span>{user.email}</span> </h2>
                            <div className="buttons">
                                <Link className='editbtn' to={`/users/update/${user.id}`}><i className="fa-regular fa-pen-to-square"></i></Link>
                                <button onClick={() => remove(user.id)}><i className="fa-regular fa-trash"></i></button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </>
    )
}

export default UserList