import React from 'react'
import { NavLink } from 'react-router-dom'

const MainButton: React.FC<{ link: string, text: string }> = ({ link, text }) => {
    return (
        <NavLink className='main-button' to={link}>
            <div className='btn-left'></div>
            {text}
            <div className='btn-right'></div>
        </NavLink>
    )
}

export default MainButton