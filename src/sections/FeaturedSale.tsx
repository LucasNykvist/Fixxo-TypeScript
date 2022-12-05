import React, { useEffect } from 'react'
import BigBox from '../components/BigBox'
import ProductBox from '../components/ProductBox'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'



const FeaturedSale: React.FC = () => {

    const { getFS1Products, fs1Products } = React.useContext(ProductHandlerContext) as IproductHandlerContext



    useEffect(() => {
        getFS1Products()
    }, [])


    return (
        <div className='featured-sale'>
            <div className='container'>
                <BigBox price="2 FOR USD $29" />
                <div className="featured-boxes">
                    {
                        fs1Products.map((products: any, index: number) => <ProductBox key={index} product={products} />)
                    }
                </div>


            </div>
        </div>
    )
}

export default FeaturedSale