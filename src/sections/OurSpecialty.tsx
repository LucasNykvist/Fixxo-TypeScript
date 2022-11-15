import React from 'react'
import OurSpecialtyBox from '../components/OurSpecialtyBox'

const OurSpecialty = () => {
    return (

        <div className='our-specialty'>
            <div className='container'>
                <h2>Our Speciality</h2>
                <div className='specialty-boxes'>
                    <OurSpecialtyBox text='Track Your Order' />
                    <OurSpecialtyBox text='Make a Return' />
                    <OurSpecialtyBox text='Request a Price Adjustment' />
                </div>
            </div>
        </div>

    )
}

export default OurSpecialty