import React from 'react'
import { useProductContext } from '../contexts/productsContext'
import FeaturedProduct from '../sections/FeaturedProduct'
import FeaturedSale from '../sections/FeaturedSale'
import FeaturedSaleReverse from '../sections/FeaturedSaleReverse'
import Footer from '../sections/Footer'
import LatestBestTop from '../sections/LatestBestTop'
import Navbar from '../sections/Navbar'
import OurSpecialty from '../sections/OurSpecialty'
import PicksFlashSale from '../sections/PicksFlashSale'
import SeventyOff from '../sections/SeventyOff'
import Showcase from '../sections/Showcase'
import Support from '../sections/Support'
import WinterNew from '../sections/WinterNew'

const HomeView: React.FC = () => {

    const { products } = useProductContext()

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
            <LatestBestTop products={products} />
            <Support />
            <Footer />
        </>
    )
}

export default HomeView