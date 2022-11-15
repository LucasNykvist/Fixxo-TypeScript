import React from 'react'
import image from '../assets/images/winterClearance.png'
import image2 from '../assets/images/newArrivals.png'
import Button from '../components/Button'

const WinterNew = () => {
    return (
        <div className='WinterClearance-NewArrivals'>
            <div className='container'>
                <div className='Winter-clearance'>
                    <div className='wc-info'>
                        <h1>Winter Clearance Up to 70% Off!</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                        <Button link="/products" />
                    </div>
                    <img src={image} alt="img" />
                </div>
                <div className='new-arrivals'>
                    <div className='na-info'>
                        <h1>New Arrivals</h1>
                        <Button link="/products" />
                    </div>

                    <img src={image2} alt="something" />
                </div>

            </div>
        </div>
    )
}

export default WinterNew