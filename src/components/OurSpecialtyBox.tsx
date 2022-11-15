import React from 'react'

interface text {
    text: string
}

const OurSpecialtyBox: React.FC<text> = ({ text }) => {
    return (
        <div className='specialty-box'>
            <div className='box-text'>
                <h3>{text}</h3>
                <a href='#'>Get Started &gt;</a>
            </div>
            <div className='box-image'></div>
        </div>
    )
}

export default OurSpecialtyBox