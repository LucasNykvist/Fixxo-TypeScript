import React from 'react'
import ProductBoxesSmall from '../components/ProductBoxesSmall'


const LatestBestTop: React.FC<{ products: any }> = ({ products }) => {
    return (
        <div className='latest-best-top'>
            <div className='container'>
                <ProductBoxesSmall title="Latest Product" products={products} />
                <ProductBoxesSmall title="Best Selling Product" products={products} />
                <ProductBoxesSmall title="Top Reacted Product" products={products} />
            </div>
        </div>
    )
}

export default LatestBestTop