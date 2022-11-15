import React from 'react'
import ProductBox from '../components/ProductBox'
import { useProductContext } from '../contexts/productContext'

const FeaturedProduct: React.FC<{ title: string }> = ({ title }) => {

    const { products } = useProductContext()

    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>{title}</h1>
                </div>


                <div className='product-boxes'>
                    {
                        products.filter((products: any, index: number) => index < 8).map((products: any, index: React.Key | null | undefined) => <ProductBox key={index} product={products} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct