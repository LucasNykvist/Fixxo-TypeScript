import React from 'react'
import { useLogin } from '../hooks/useLogin'
import Navbar from '../sections/Navbar'

const LoginView = () => {
    // State variables
    const [message, setMessage] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    // Vad vi behöver från useLogin Hooken
    const { login, error, isLoading } = useLogin()

    // När vi submittar kallar vi på login funktionen från useLogin hooken
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

                    {/* Om error har eller inte har ett värde, visa detta:  */}
                    {!error && (<div className='error-message'>{message}</div>)}
                    {error && (<div className='error-message'>{error}<i className="fa-regular fa-triangle-exclamation"></i></div>)}
                </form>
            </div>
        </>
    )
}

export default LoginView