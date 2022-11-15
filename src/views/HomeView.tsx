import React from 'react'
import Navbar from '../sections/Navbar'
import OurSpecialty from '../sections/OurSpecialty'
import PicksFlashSale from '../sections/PicksFlashSale'
import Showcase from '../sections/Showcase'
import WinterNew from '../sections/WinterNew'

const HomeView = () => {


    return (
        <>
            <Navbar />
            <Showcase />
            <WinterNew />
            <PicksFlashSale />
            <OurSpecialty />
        </>
    )
}

export default HomeView