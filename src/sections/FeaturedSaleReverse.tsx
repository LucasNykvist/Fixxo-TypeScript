import React from 'react'
import BigBox from '../components/BigBox'
import ProductBox from '../components/ProductBox'

const FeaturedSaleReverse: React.FC<{ products: any }> = ({ products }) => {
    return (
        <div className='featured-sale-reverse'>
            <div className='container'>
                <div className="featured-boxes">
                    {
                        products.filter((products: any, index: number) => index > 8 && index < 13).map((products: any, index: React.Key | null | undefined) => <ProductBox key={index} product={products} />)
                    }
                </div>
                <BigBox price="2 FOR USD $49" />
            </div>
        </div>
    )
}

export default FeaturedSaleReverse