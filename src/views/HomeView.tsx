import React from 'react'
import FeaturedProduct from '../sections/FeaturedProduct'
import FeaturedSale from '../sections/FeaturedSale'
import FeaturedSaleReverse from '../sections/FeaturedSaleReverse'
import Navbar from '../sections/Navbar'
import OurSpecialty from '../sections/OurSpecialty'
import PicksFlashSale from '../sections/PicksFlashSale'
import SeventyOff from '../sections/SeventyOff'
import Showcase from '../sections/Showcase'
import WinterNew from '../sections/WinterNew'

const HomeView: React.FC<{ products: any }> = ({ products }) => {

    return (
        <>
            <Navbar />
            <Showcase />
            <WinterNew />
            <FeaturedProduct title='Featured Product' products={products} />
            <PicksFlashSale />
            <OurSpecialty />
            <FeaturedSale products={products} />
            <FeaturedSaleReverse products={products} />
            <SeventyOff />
        </>
    )
}

export default HomeView