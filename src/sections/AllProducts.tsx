import React from 'react'
import { useProductContext } from '../contexts/productsContext'
import ProductBox from '../components/ProductBox'

const AllProducts = () => {

    const { products } = useProductContext()

    return (
        <div className="container all">
            <div className="all-products">
                {
                    products.map((products, index) => <ProductBox key={index} product={products} />)
                }
            </div>
        </div>
    )
}

export default AllProducts