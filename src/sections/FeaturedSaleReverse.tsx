import React, { useEffect } from 'react'
import BigBox from '../components/BigBox'
import ProductBox from '../components/ProductBox'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'

const FeaturedSaleReverse: React.FC = () => {

    const { fs2Products, getFS2Products } = React.useContext(ProductHandlerContext) as IproductHandlerContext

    useEffect(() => {
        getFS2Products()
    }, [])


    return (
        <div className='featured-sale-reverse'>
            <div className='container'>
                <div className="featured-boxes">
                    {
                        fs2Products.map((products: any, index: React.Key | null | undefined) => <ProductBox key={index} product={products} />)
                    }
                </div>
                <BigBox price="2 FOR USD $49" />
            </div>
        </div>
    )
}

export default FeaturedSaleReverse