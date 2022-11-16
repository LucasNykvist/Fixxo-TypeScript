import React from 'react'
import DetailedProduct from '../sections/DetailedProduct'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const ProductDetailsView = () => {

    // window.top.document.title = "Product | Fixxo"



    return (
        <>
            <Navbar />
            <DetailedProduct />
            <Footer />
        </>
    )
}

export default ProductDetailsView