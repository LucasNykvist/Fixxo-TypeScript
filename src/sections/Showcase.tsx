import React from 'react'
import leftImage from '../assets/images/left-placeholder.svg'
import rightImage from '../assets/images/right-placeholder.svg'
import Button from '../components/Button'

const Showcase = () => {
    return (
        <section className='__showcase'>
            <div className='container'>
                <img className='left-img' src={leftImage} alt="Img" />
                <div className='showcase-header'>
                    <h1 className='showcase-h1'>Sale Up To 50% Off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <Button link='/' />
                </div>
                <img className='right-img' src={rightImage} alt="Img2" />
            </div>
        </section>
    )
}

export default Showcase