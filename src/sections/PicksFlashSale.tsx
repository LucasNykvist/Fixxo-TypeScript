import React from 'react'
import topPicksImg from '../assets/images/topPick.png'
import flashSaleImg from '../assets/images/flashSale.png'
import ButtonFlashSale from '../components/ButtonFlashSale'
import ButtonLight from '../components/ButtonLight'

const PicksFlashSale = () => {
    return (
        <div className='picksFlashSale'>
            <div className='container'>
                <div className='top-picks'>
                    <img className='top-picks-image' src={topPicksImg} alt=".." />
                    <div className='picks-info'>
                        <h1>Pamela Reif's Top Picks</h1>
                        <ButtonLight />
                    </div>
                </div>
                <div className='flash-sale'>
                    <div className='flash-info'>
                        <h1>Let's Be Conscious</h1>
                        <ButtonFlashSale />
                    </div>
                    <img className='flash-sale-image' src={flashSaleImg} alt="s" />
                </div>
            </div>
        </div>
    )
}

export default PicksFlashSale