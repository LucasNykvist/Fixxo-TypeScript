import React from 'react'

const Breadcrumb: React.FC<{ icon: string, where: string }> = ({ icon, where }) => {
    return (
        <div className='breadcrumb'>
            <div className='container'>
                <i className={icon}></i>
                {where}
            </div>
        </div>
    )
}

export default Breadcrumb