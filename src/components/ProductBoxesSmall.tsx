import React from 'react'
import ProductBoxSmall from './ProductBoxSmall'

const ProductBoxesSmall: React.FC<{ products: any, title: string }> = ({ products, title }) => {
    return (
        <div className='product-boxes-small'>
            <h3>{title}</h3>
            {
                products.filter((products: any, index: number) => index < 3).map((products: any, index: React.Key | null | undefined) => <ProductBoxSmall key={index} product={products} />)
            }
        </div>
    )
}

export default ProductBoxesSmall