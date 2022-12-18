import React from 'react'
import Navbar from '../sections/Navbar'
import { useSignup } from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom'

const RegisterView = () => {
    // State variables
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [message, setMessage] = React.useState("")

    // What we need from the signup hook
    const { signup, error, isLoading } = useSignup()

    // We use the navigate function from useNavigate hook do re-direct upon signup
    const Navigate = useNavigate()

    // We send the user inputs to the signup function
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        await signup(email, password)
        setMessage("Success")
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="log-sign-container container ">
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-2" noValidate>
                    <h3>Register</h3>

                    <label>Email: </label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button type='submit' disabled={isLoading} className='btn btn-dark'>Sign Up!</button>

                    {/* If error variable has a value, display this HTML */}
                    {!error && (<div className='error-message'>{message}</div>)}
                    {error && (<div className='error-message'>{error}<i className="fa-regular fa-triangle-exclamation"></i></div>)}
                </form>
            </div>
        </>
    )
}

export default RegisterView