import React, { useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import NavIcon from '../components/NavIcon'
import { useShoppingCart } from '../contexts/shoppingCartContext'
import { useAuthContext } from '../contexts/AuthContext'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const [showNavMenu, setShowNavMenu] = useState(false)
    const { cartQuantity } = useShoppingCart();
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const toggleNavMenu = () => {
        setShowNavMenu(!showNavMenu)
    }

    const handleLogout = () => {
        logout()
        setTimeout(() => {
            window.location.reload()
        })
    }

    return (
        <>
            <div className="userStatus">
                <div className="container d-flex p-1">

                    {
                        user && (<div>
                            Logged in as: <span className='text-success'>{user.email}</span>
                            <button className='btn btn-dark' onClick={handleLogout}>Logout</button>
                        </div>)
                    }
                    {
                        !user && (<div className='d-flex gap-2'>
                            <NavLink className="btn btn-dark" to={"/login"}>Login</NavLink>
                            <NavLink className="btn btn-dark" to={"/register"}>Register</NavLink>
                        </div>
                        )
                    }


                </div>
            </div>
            <nav className='__navbar'>

                <div className='container d-flex justify-content-between'>
                    <NavLink data-testid="logo" to="/">
                        <img src={Logo} alt='' />
                    </NavLink>
                    <div className={`nav-links ${!showNavMenu ? "d-none d-lg-flex" : ""}`}>
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/categories" end>Categories</NavLink></li>
                        <li><NavLink to="/products" >Products</NavLink></li>
                        <li><NavLink to="/contacts" end>Contacts</NavLink></li>
                        <li><NavLink to="/productsHandling" end>Handle Products</NavLink></li>
                    </div>

                    <div className='shopping-icons'>
                        <NavIcon icon="fa-solid fa-magnifying-glass position-relative" link="/search" />
                        <NavIcon hideOnMobile={true} icon="fa-light fa-code-compare position-relative" link="/compare" />
                        <NavIcon hideOnMobile={true} icon="fa-light fa-heart position-relative" link="/wishlist" value="1" />

                        <button className="nav-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#ShoppingCart" aria-controls="ShoppingCart">
                            <i className='fa-light fa-bag-shopping position-relative'></i>
                            <span className='quantity badge rounded-pill'>{cartQuantity}</span>
                        </button>

                        <button onClick={toggleNavMenu} className='d-lg-none nav-icon btn-menu-icon'><i className='fa-solid fa-bars'></i></button>
                    </div>
                </div>
            </nav >
        </>

    )
}

export default Navbar