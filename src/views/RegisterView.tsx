import React from 'react'
import Navbar from '../sections/Navbar'

const RegisterView = () => {
    // State variables
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")







    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <div>RegisterView</div>
            </div>
        </>
    )
}

export default RegisterView