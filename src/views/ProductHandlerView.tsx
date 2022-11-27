import React from 'react'
import Navbar from '../sections/Navbar'
import ProductHandling from '../sections/ProductHandling'

const ProductHandlerView = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Product Handler</h1>
            </div>
            <ProductHandling />
        </>
    )
}

export default ProductHandlerView