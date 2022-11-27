import React from 'react'
import CreateForm from '../components/CreateForm'
import UserList from '../components/UserList'
import Navbar from '../sections/Navbar'

const UserView = () => {
    return (
        <>
            <Navbar />
            <div className="title container">
                <h1>USER HANDLING</h1>
            </div>
            <CreateForm />
            <hr className='my-5' />
            <UserList />
        </>
    )
}

export default UserView