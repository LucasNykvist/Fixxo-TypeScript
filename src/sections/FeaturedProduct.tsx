import React, { useEffect } from 'react'
import ProductBox from '../components/ProductBox'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'

const FeaturedProduct: React.FC<{ title: string }> = ({ title }) => {

    const { getFeaturedProducts, featuredProducts } = React.useContext(ProductHandlerContext) as IproductHandlerContext


    useEffect(() => {
        getFeaturedProducts()
    }, [])


    return (
        <div className='featured-product'>
            <div className='container'>
                <div className='product-header'>
                    <h1>{title}</h1>
                </div>


                <div className='product-boxes'>
                    {
                        featuredProducts.filter((products: object, index: number) => index < 8).map((products: any, index: React.Key | null | undefined) => <ProductBox key={index} product={products} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct