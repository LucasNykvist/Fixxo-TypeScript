import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import Navbar from '../sections/Navbar'

const LoginView = () => {
    // State variables
    const [message, setMessage] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    // What we need from the useLogin hook
    const { login, error, isLoading } = useLogin()

    // We use the navigate function from useNavigate hook do re-direct upon signup
    const Navigate = useNavigate()

    // When we submit we call the login function from useLogin hook
    // We send the email and password state variables - Their values are the target values (Duh)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await login(email, password)
        setMessage("Success")
    }



    return (
        <>
            <Navbar></Navbar>
            <div className="log-sign-container container ">
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-2" noValidate>
                    <h3>Login</h3>

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

export default LoginView