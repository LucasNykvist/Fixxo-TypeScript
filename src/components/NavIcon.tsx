import React from 'react'
import { NavLink } from 'react-router-dom'

interface navType {
    link: string,
    icon: string,
    value?: string,
    hideOnMobile?: boolean
}

const NavIcon: React.FC<navType> = ({ link, icon, value, hideOnMobile }) => {
    return (
        <NavLink className={`nav-icon ${hideOnMobile ? "d-none d-md-flex" : ""}`} to={link} end>
            <i className={icon}><span className='badge rounded-pill'>{value}</span></i>
        </NavLink >
    )
}

export default NavIcon