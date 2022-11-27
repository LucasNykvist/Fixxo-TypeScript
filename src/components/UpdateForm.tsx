import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext, IuserContext } from '../contexts/UserContext'

const UpdateForm = () => {
    const { id } = useParams()
    const { user, setUser, update } = React.useContext(UserContext) as IuserContext


    return (
        <>
            <Link to="/users">Go Back</Link>
            <form onSubmit={() => update(id)} className="d-grid mb-5">
                <h3 className='display-6 mb-4'>Update User: {id}</h3>
                <input type="hidden" value={id} />
                <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update First Name' />
                <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Update Last Name' />
                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" className='form-control py-2 mb-3' placeholder='Update E-mail' />
                <button type='submit' className='btn btn-success py-2 mt-3'>Update User</button>
            </form>
        </>
    )
}

export default UpdateForm