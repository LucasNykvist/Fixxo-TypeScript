import React from 'react'
import ProductCreation from '../components/ProductCreation'
import { ProductList } from '../components/ProductList'
import Navbar from './Navbar'

const ProductHandling: React.FC = () => {
    return (
        <>
            <Navbar />
            <ProductCreation />
            <ProductList />
        </>
    )
}

export default ProductHandling