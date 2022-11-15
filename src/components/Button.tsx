import React from 'react'
import { NavLink } from 'react-router-dom'

const Button: React.FC<{ link: string }> = ({ link }) => {
    return (
        <NavLink className='btn-theme' to={link}>
            <div className='btn-theme-left'></div>
            SHOP NOW
            <div className='btn-theme-right'></div>
        </NavLink>
    )
}

export default Button