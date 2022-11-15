import React from 'react'
import BigBox from '../components/BigBox'
import ProductBox from '../components/ProductBox'



const FeaturedSale: React.FC<{ products: any }> = ({ products }) => {


    return (
        <div className='featured-sale'>
            <div className='container'>
                <BigBox price="2 FOR USD $29" />
                <div className="featured-boxes">
                    {
                        products.filter((products: any, index: number) => index < 20 && index > 15).map((products: any, index: number) => <ProductBox key={index} product={products} />)
                    }
                </div>


            </div>
        </div>
    )
}

export default FeaturedSale