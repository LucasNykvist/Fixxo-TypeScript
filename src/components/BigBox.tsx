import React from 'react'
import ButtonFlashSale from './ButtonFlashSale'

const BigBox: React.FC<{ price: string }> = ({ price }) => {
    return (
        <div className='big-box'>
            <h1>{price}$</h1>
            <ButtonFlashSale />
        </div>
    )
}

export default BigBox