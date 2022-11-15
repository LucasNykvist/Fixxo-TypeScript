import React, { useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import NavIcon from '../components/NavIcon'

const Navbar = () => {
    const [showNavMenu, setShowNavMenu] = useState(false)

    const toggleNavMenu = () => {
        setShowNavMenu(!showNavMenu)
    }
    return (
        <nav className='__navbar'>
            <div className='container d-flex justify-content-between'>
                <NavLink data-testid="logo" to="/">
                    <img src={Logo} alt='' />
                </NavLink>
                <div className={`nav-links ${!showNavMenu ? "d-none d-md-flex" : ""}`}>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/categories" end>Categories</NavLink></li>
                    <li><NavLink to="/products" >Products</NavLink></li>
                    <li><NavLink to="/contacts" end>Contacts</NavLink></li>
                </div>

                <div className='shopping-icons'>
                    <NavIcon icon="fa-solid fa-magnifying-glass position-relative" link="/search" />
                    <NavIcon hideOnMobile={true} icon="fa-light fa-code-compare position-relative" link="/compare" />
                    <NavIcon hideOnMobile={true} icon="fa-light fa-heart position-relative" link="/wishlist" value="1" />

                    <button className="nav-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                        <i className='fa-light fa-bag-shopping position-relative'></i>
                        <span data-testid="quantity" className='quantity badge rounded-pill'>cartQuantity</span>
                    </button>

                    <button onClick={toggleNavMenu} className='d-md-none nav-icon btn-menu-icon'><i className='fa-solid fa-bars'></i></button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar