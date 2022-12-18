import React, { useEffect } from 'react'
import ProductBoxesSmall from '../components/ProductBoxesSmall'
import { IproductHandlerContext, ProductHandlerContext } from '../contexts/ProductHandlingContext'


const LatestBestTop: React.FC<{ products: any }> = ({ products }) => {
    const { getBestProducts, getTopProducts, getLatestProducts, latestProducts, bestProducts, topProducts } = React.useContext(ProductHandlerContext) as IproductHandlerContext

    useEffect(() => {
        getLatestProducts()
        getBestProducts()
        getTopProducts()
    }, [])

    return (
        <div className='latest-best-top'>
            <div className='container'>
                <ProductBoxesSmall title="Latest Product" products={latestProducts} />
                <ProductBoxesSmall title="Best Selling Product" products={bestProducts} />
                <ProductBoxesSmall title="Top Reacted Product" products={topProducts} />
            </div>
        </div>
    )
}

export default LatestBestTop