import React from 'react'
import CreateForm from '../components/CreateForm'
import UpdateForm from '../components/UpdateForm'
import UserList from '../components/UserList'

const UserView = () => {
    return (
        <>
            <CreateForm />
            <hr className='my-5' />
            <UserList />
        </>
    )
}

export default UserView