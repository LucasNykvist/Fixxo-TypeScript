import React from 'react'
import ProductBox from '../components/ProductBox'

const FeaturedProduct: React.FC<{ title: string, products: any }> = ({ title, products }) => {

    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>{title}</h1>
                </div>


                <div className='product-boxes'>
                    {
                        products.filter((products: object, index: number) => index < 8).map((products: any, index: React.Key | null | undefined) => <ProductBox key={index} product={products} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct