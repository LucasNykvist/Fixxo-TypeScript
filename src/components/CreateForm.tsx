import React from 'react'
import { UserContext, IuserContext } from '../contexts/UserContext'

const CreateForm = () => {
    const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IuserContext



    return (
        <>
            <div className="form mt-3">
                <div className="container">
                    <form onSubmit={create} className="d-grid mb-5">
                        <h3 className='display-6 mb-4'>Create Account</h3>
                        <input value={userRequest.firstName} onChange={(e) => setUserRequest({ ...userRequest, firstName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Your First Name' />
                        <input value={userRequest.lastName} onChange={(e) => setUserRequest({ ...userRequest, lastName: e.target.value })} type="text" className='form-control py-2 mb-3' placeholder='Enter Your Last Name' />
                        <input value={userRequest.email} onChange={(e) => setUserRequest({ ...userRequest, email: e.target.value })} type="email" className='form-control py-2 mb-3' placeholder='Enter Your E-mail' />
                        <input value={userRequest.password} onChange={(e) => setUserRequest({ ...userRequest, password: e.target.value })} type="password" className='form-control py-2 mb-3' placeholder='Enter Your Password' />
                        <button type='submit' className='btn btn-success py-2 mt-3'>Create User <i className="fa-solid fa-plus"></i></button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateForm